"use client";

import { StatsCard } from "@/components/StatsCard";
import { Bell, DollarSign, Users, RefreshCcw, RotateCcw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { activities, dummyData } from "@/constants/constant";

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Dashboard Overview</h1>
        <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
          <Bell className="h-5 w-5 text-white/80 cursor-pointer" />
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Active Users" value="12,450" change="+8%" icon={Users} />
        <StatsCard title="Revenue" value="$4,230" change="+12%" icon={DollarSign}/>
        <StatsCard title="New Signups" value="942" change="+5%" icon={Bell}/>
        <StatsCard title="Refunds" value="23" change="-2%" icon={RefreshCcw}/>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Users Growth Line Chart */}
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
          <CardHeader>
            <CardTitle className="text-white">User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={dummyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: "#111", border: "1px solid #333" }} />
                <Line type="monotone" dataKey="users" stroke="#fff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue Bar Chart */}
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Revenue Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dummyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: "#111", border: "1px solid #333" }} />
                <Bar dataKey="revenue" fill="#fff" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

       {/* Recent Activity */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
        </div>

        <Table>
          <TableCaption>Latest updates on user actions</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">User</TableHead>
              <TableHead className="text-white">Action</TableHead>
              <TableHead className="text-white">Amount</TableHead>
              <TableHead className="text-white text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>{activity.amount}</TableCell>
                <TableCell className="text-right">{activity.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
