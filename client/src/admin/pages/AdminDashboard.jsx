import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { TrendingUp, Users, Calendar, DollarSign } from "lucide-react";

function AdminDashboard() {
  const stats = [
    { title: "Total Revenue", value: "$12,450", icon: DollarSign, change: "+12%" },
    { title: "Active Rentals", value: "24", icon: Calendar, change: "+4" },
    { title: "Total Users", value: "1,203", icon: Users, change: "+18%" },
    { title: "Fleet Status", value: "98%", icon: TrendingUp, change: "Optimal" },
  ];

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar (Desktop) */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader />

        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">

            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
              <p className="text-slate-400">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-green-500/30 transition">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-green-500/10 rounded-xl text-green-500">
                      <stat.icon size={24} />
                    </div>
                    <span className="text-green-400 text-sm font-bold bg-green-500/5 px-2 py-1 rounded-lg">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-slate-400 text-sm font-medium">{stat.title}</h3>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Placeholder for Recent Activity */}
            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="text-slate-500 text-center py-12 border-2 border-dashed border-slate-800 rounded-xl">
                Activity feed loading...
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;