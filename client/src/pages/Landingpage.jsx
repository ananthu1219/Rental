import React from "react";
import { LampContainer } from "../components/ui/lamp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Zap, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Landingpage() {
  const features = [
    {
      icon: Zap,
      title: "Instant Booking",
      desc: "Book your ride in seconds with our seamless digital platform.",
    },
    {
      icon: Shield,
      title: "Secure & Insured",
      desc: "Every ride is fully insured and maintained for your safety.",
    },
    {
      icon: Clock,
      title: "Flexible Duration",
      desc: "Rent by the hour, day, or week. You control the schedule.",
    },
    {
      icon: CheckCircle2,
      title: "Premium Fleet",
      desc: "Choose from top-tier bikes maintained to factory standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-green-500/30">
      <Header />

      {/* HERO SECTION */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Ride the Future <br />
          <span className="text-2xl md:text-4xl text-slate-400 font-normal">
            Rent Premium Bikes Instantly
          </span>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/explore"
              className="px-8 py-3 rounded-full bg-green-500 text-black font-bold text-lg hover:bg-green-400 transition shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              Start Riding
            </Link>

          </div>
        </motion.div>
      </LampContainer>

      {/* FEATURES GRID */}
      <section className="relative z-10 py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We provide the best riding experience with zero hassle. Join thousands of happy riders today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-green-500/30 hover:bg-slate-900/80 transition group"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landingpage;