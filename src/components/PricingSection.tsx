"use client";
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { pricingPlans } from '@/constants/constant'
import { useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// we're extending the Session user type to include stripeCustomerId
interface UserWithStripe {
    name: string;
    email: string;
    id: string;
    stripeCustomerId?: string;
    subscriptionPlan: string;
}


const PricingSection = () => {
    const [fullUserData, setFullUserData] = useState<UserWithStripe | null>(null)
    const { data: session } = useSession()

    const router = useRouter();

    const currentPlan = fullUserData?.subscriptionPlan
    const isFreeUser = currentPlan?.toLowerCase() === "free";
    const isProUser = currentPlan?.toLowerCase() === "pro";
    const isLifetimeUser = currentPlan?.toLowerCase() === "lifetime";


    async function handleCheckout(plan: string) {
        if (!session?.user) {
            router.push("/sign-in");
        }

        const res = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: session?.user.id, plan: plan.toLowerCase() }),
        });
        const data = await res.json();
        if (data.url) window.location.href = data.url;
    }

    async function handleManageSubscription() {
        if (!session?.user) {
            alert("Not LoggedIn Yet!")
        }
        const res = await fetch("/api/manage-subscription", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: session?.user.id }),
        });
        const data = await res.json();
        if (data.url) window.location.href = data.url;
    }

    useEffect(() => {

        if (!session?.user.id) return;

        const fetchFullUser = async () => {
            if (!session?.user) {
                alert("Not LoggedIn Yet!")
            }

            const res = await fetch("/api/auth/get-full-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: session?.user.id })
            })

            if (!res.ok) {
                console.log("ERROR: fetching full user data", res.body);
            }

            const data = await res.json()

            setFullUserData(data.user)
        }

        fetchFullUser()
    }, [session?.user])

    return (
        <section className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-semibold text-center mb-16">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => {
                    const isFreePlan = plan.name === "Free";
                    const isProPlan = plan.name === "Pro";

                    // this is just a starting point its up to you as per your stripe billings logic
                    const disableCheckout =
                        isLifetimeUser ||                             // lifetime users can't buy anything
                        (isProUser && !isProPlan) ||                  // pro users can manage only their own plan
                        (isFreeUser && isFreePlan);                   // free users can't buy free plan again

                    const showManageButton =
                        isProUser && isProPlan;
                    return (
                        <Card key={index} className={`${plan.cardStyle} backdrop-blur-xl rounded-2xl`}>
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-semibold mb-4 text-white">{plan.name}</h3>
                                <p className="text-4xl font-bold mb-6 text-white/90">{plan.price}</p>
                                <ul className="space-y-3 text-white/70 mb-6">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>✔ {feature}</li>
                                    ))}
                                </ul>
                                {/* LIFETIME USER VIEW */}
                                {isLifetimeUser ? (
                                    <Button
                                        disabled
                                        className="w-full bg-white text-black rounded-xl opacity-70 cursor-not-allowed"
                                    >
                                        Lifetime Access
                                    </Button>
                                ) : showManageButton ? (
                                    <Button
                                        onClick={handleManageSubscription}
                                        className="w-full bg-white text-black hover:bg-white/90 rounded-xl cursor-pointer"
                                    >
                                        Manage Subscription
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => handleCheckout(plan.name)}
                                        disabled={disableCheckout}
                                        className="w-full bg-white text-black hover:bg-white/90 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        {plan.buttonText}
                                    </Button>
                                )}

                                {/* Only for Pro plan when user is Pro */}
                                {showManageButton && (
                                    <p className="text-white/60 text-sm text-center mt-2">
                                        Cancel or change your plan
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    )
}

export default PricingSection