import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-green-500">
          BikeRent
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-500" : "hover:text-green-500 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/bikes"
            className={({ isActive }) =>
              isActive ? "text-green-500" : "hover:text-green-500 transition"
            }
          >
            Bikes
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-green-500" : "hover:text-green-500 transition"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Login */}
          <NavLink
            to="/auth"
            className="border border-green-500 text-green-500 px-5 py-2 rounded-lg font-semibold hover:bg-green-500 hover:text-black transition"
          >
            Login
          </NavLink>

          {/* Rent Now */}
          <NavLink
            to="/rent"
            className="bg-green-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-green-400 transition"
          >
            Rent Now
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
