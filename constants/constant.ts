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


// add more fields as you go based on your needs 
export const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];


export  const projects = [
    {
      id: 1,
      name: "AI Analytics Dashboard",
      description: "A modern analytics dashboard built with Next.js & shadcn.",
      status: "Active",
    },
    {
      id: 2,
      name: "E-Commerce Platform",
      description: "Full-stack store with payments, admin, and API integration.",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Marketing Website",
      description: "Responsive landing page template for SaaS startups.",
      status: "Completed",
    },
    {
      id: 4,
      name: "CRM System",
      description: "Customer relationship manager for internal teams.",
      status: "Paused",
    },
  ];



   export const invoices = [
    {
      id: "INV-001",
      date: "Oct 10, 2025",
      amount: "$49",
      status: "Paid",
    },
    {
      id: "INV-002",
      date: "Sep 10, 2025",
      amount: "$49",
      status: "Paid",
    },
    {
      id: "INV-003",
      date: "Aug 10, 2025",
      amount: "$49",
      status: "Failed",
    },
  ];