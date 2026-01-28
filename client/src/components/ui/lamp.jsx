import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";


export function LampContainer({ children, className }) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">

        {/* RIGHT GLOW */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          animate={{ opacity: 1, width: "clamp(18rem, 80vw, 30rem)" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 h-56 bg-gradient-conic from-green-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        />

        {/* LEFT GLOW */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          animate={{ opacity: 1, width: "clamp(18rem, 80vw, 30rem)" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 h-56 bg-gradient-conic from-transparent via-transparent to-green-500 [--conic-position:from_290deg_at_center_top]"
        />

        {/* BLUR LAYERS */}
        <div className="absolute top-1/2 h-48 w-full bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full backdrop-blur-md opacity-10" />
        <div className="absolute z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-green-500 opacity-50 blur-3xl" />

        {/* CENTER GLOW */}
        <motion.div
          initial={{ width: "8rem" }}
          animate={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-30 h-36 -translate-y-[6rem] rounded-full bg-green-400 blur-2xl"
        />

        {/* LIGHT LINE */}
        <motion.div
          initial={{ width: "8rem" }}
          animate={{ width: "clamp(18rem, 80vw, 30rem)" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-50 h-0.5 -translate-y-[7rem] bg-green-400"
        />

        <div className="absolute z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950" />
      </div>

      {/* CONTENT */}
      <div className="relative z-50 flex -translate-y-[55vh] md:-translate-y-[17rem] flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
}

/* ================= BIKE HERO ================= */

export default function BikeHero() {
  return (
    <LampContainer>

      {/* TEXT BLOCK */}
      <div className="flex flex-col items-center">

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 text-green-400 text-center 
          text-3xl sm:text-4xl md:text-7xl 
          font-bold tracking-tight px-4
          [text-shadow:0_6px_25px_rgba(0,0,0,0.9)]"
        >
          Rent a Bike <br /> Ride the City
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 max-w-xl text-center text-slate-300 
          text-sm sm:text-base px-6"
        >
          Fast, affordable, and eco-friendly bike rentals for daily commutes and
          city adventures.
        </motion.p>
      </div>

      {/* BUTTON */}


      <Link to="/explore">
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="
          mt-8 md:mt-16 
          rounded-full bg-green-500 px-6 sm:px-8 py-2.5 sm:py-3 
          text-base sm:text-lg font-semibold text-black 
          hover:bg-green-400 transition
          relative z-50
          md:-translate-y-6
        "
      >
        Book a Bike
      </motion.button>
      </Link>

    </LampContainer>
  );
}
