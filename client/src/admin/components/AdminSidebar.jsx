import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Bike, Users, Calendar, Settings, LogOut } from "lucide-react";

function AdminSidebar() {
  const links = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Fleet Management", path: "/admin/bikes", icon: Bike },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Bookings", path: "/admin/bookings", icon: Calendar },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-slate-950 border-r border-white/10 shrink-0">
      {/* Brand */}
      <div className="p-6 border-b border-white/10">
        <h2 className="text-2xl font-bold text-green-500 tracking-wide">BikeAdmin</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${isActive
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "text-slate-400 hover:text-white hover:bg-white/5"
              }`
            }
          >
            <link.icon size={20} />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-white/10">
        <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition font-medium">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;