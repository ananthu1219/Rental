import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-green-500">
            BikeRent
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-green-400" : "text-slate-300 hover:text-green-400 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/auth"
              className="px-5 py-2 rounded-full border border-green-500/50 text-green-400 font-semibold text-sm hover:bg-green-500/10 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/explore"
              className="px-5 py-2 rounded-full bg-green-500 text-black font-semibold text-sm hover:bg-green-400 transition shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Rent Now
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-slate-300 hover:text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-slate-950 flex flex-col md:hidden"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="text-2xl font-bold text-green-500">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium ${isActive ? "text-green-400" : "text-slate-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <hr className="border-white/10 my-4" />
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/auth"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 rounded-xl border border-green-500/50 text-green-400 font-bold text-center hover:bg-green-500/10 transition"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/explore"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 rounded-xl bg-green-500 text-black font-bold text-center hover:bg-green-400 transition shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                  Rent Now
                </NavLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
