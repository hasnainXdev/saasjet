import { CreditCard, FolderKanban, LayoutDashboard, Settings } from "lucide-react";

export const dummyData = [
    { name: "Mon", users: 400, revenue: 240 },
    { name: "Tue", users: 300, revenue: 139 },
    { name: "Wed", users: 200, revenue: 980 },
    { name: "Thu", users: 278, revenue: 390 },
    { name: "Fri", users: 189, revenue: 480 },
    { name: "Sat", users: 239, revenue: 380 },
    { name: "Sun", users: 349, revenue: 430 },
];


export const activities = [
    {
        id: 1,
        user: "John Doe",
        action: "Upgraded to Pro",
        amount: "$49",
        date: "Oct 29, 2025",
    },
    {
        id: 2,
        user: "Sarah Lee",
        action: "Refund issued",
        amount: "-$12",
        date: "Oct 28, 2025",
    },
    {
        id: 3,
        user: "Mike Ross",
        action: "New signup",
        amount: "$0",
        date: "Oct 27, 2025",
    },
    {
        id: 4,
        user: "Anna Smith",
        action: "Subscription renewed",
        amount: "$99",
        date: "Oct 26, 2025",
    },
];


export const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];