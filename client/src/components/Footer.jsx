import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-green-500">BikeRent</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience the thrill of the ride with our premium bike rentals.
              Quality configs, affordable prices.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-green-500 hover:text-black transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <NavLink to="/" className="hover:text-green-400 transition">Home</NavLink>
              </li>
              <li>
                <NavLink to="/explore" className="hover:text-green-400 transition">Explore Bikes</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-green-400 transition">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-green-400 transition">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-green-400 transition">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-500 shrink-0 mt-0.5" />
                <span>123 Riding Ave, Bike City, BC 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-green-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-green-500 shrink-0" />
                <span>support@bikerent.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 BikeRent. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;