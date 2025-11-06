"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, ArrowUpRight, DollarSign, Calendar } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { invoices } from "@/constants/constant";
import BillingInvoiceTable from "@/components/BillingInvoiceTable";

const BillingPage = () => {


    return (
        <div className="p-6 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold flex items-center gap-2">
                    <DollarSign className="h-6 w-6" />
                    Billing
                </h1>
                <Button variant="secondary" className="cursor-pointer">
                    <Calendar className="h-4 w-4 mr-2" /> View All Invoices
                </Button>
            </div>

            {/* Current Plan */}
            <Card className="backdrop-blur bg-white/5 border-white/10">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        <span>Current Plan</span>
                        <Badge className="bg-green-500/15 text-green-600">Pro</Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            You are on the <strong>Pro</strong> plan. Enjoy all premium
                            features including team collaboration and API access.
                        </p>
                    </div>
                    <Button className="cursor-pointer">
                        <ArrowUpRight className="h-4 w-4 mr-2" />
                        Upgrade Plan
                    </Button>
                </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="backdrop-blur bg-white/5 border-white/10">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Payment Method
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                    <div>
                        <p className="font-medium">Visa •••• 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/26</p>
                    </div>
                    <Button variant={"secondary"} className="cursor-pointer">Update</Button>
                </CardContent>
            </Card>

            {/* Billing History */}
            <BillingInvoiceTable invoices={invoices} />
        </div>
    );
};

export default BillingPage;
