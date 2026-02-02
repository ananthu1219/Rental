import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function AdminHeader() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Bikes", path: "/admin/bikes" },
    { name: "Bookings", path: "/admin/bookings" },
    { name: "Users", path: "/admin/users" },
  ];

  const logoutBtnClass = `
    rounded-md
    border border-green-500/30
    px-4 py-1.5 text-sm
    text-green-400
    hover:bg-green-500/10
    transition
  `;

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-green-500/20">
      <div className="mx-auto flex h-16 max-w-7xl w-full items-center justify-between px-4">

        {/* LOGO */}
        <Link
          to="/admin"
          className="text-lg font-bold text-green-400 truncate"
        >
          BikeRent Admin
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive
                  ? "text-green-400"
                  : "text-slate-400 hover:text-green-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          {/* DESKTOP LOGOUT */}
          <button className={`hidden md:block ${logoutBtnClass}`}>
            Logout
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-green-400"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed top-16 inset-x-0 bottom-0 bg-slate-950 border-t border-green-500/20 overflow-y-auto z-40">
          <nav className="flex flex-col px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${isActive
                    ? "text-green-400"
                    : "text-slate-400 hover:text-green-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-green-500/10">
              <button className={`${logoutBtnClass} w-full text-center text-base py-2`}>
                Logout
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default AdminHeader;
