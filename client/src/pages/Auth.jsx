import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (isSignup && !userData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Logic for validation only, no mock submission
      console.log("Form Validated. Data:", userData);
    }
  };

  return (
    <LampContainer>
      {/* AUTH CARD */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="
          relative z-50 w-full max-w-md
          rounded-2xl border border-green-500/20
          bg-slate-950/80 backdrop-blur-xl
          p-5 sm:p-8
          shadow-[0_0_40px_rgba(34,197,94,0.25)]
          overflow-hidden
        "
      >
        {/* TITLE */}
        <motion.h1 layout className="text-center text-2xl sm:text-3xl font-bold text-green-400">
          {isSignup ? "Create Account" : "Welcome Back"}
        </motion.h1>

        <motion.p layout className="mt-2 text-center text-xs sm:text-sm text-slate-400">
          {isSignup
            ? "Sign up to start riding"
            : "Login to book your next ride"}
        </motion.p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <AnimatePresence mode="popLayout">
            {/* NAME (SIGN UP ONLY) */}
            {isSignup && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto", marginBottom: 20 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.2 }}
                key="name-field"
              >
                <label className="text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className={`
                    mt-1 w-full rounded-lg
                    bg-slate-900 border ${errors.name ? 'border-red-500' : 'border-slate-700'}
                    px-4 py-2.5 text-slate-200
                    placeholder:text-slate-500
                    focus:outline-none focus:border-green-400
                    transition
                  `}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </motion.div>
            )}
          </AnimatePresence>

          {/* EMAIL */}
          <motion.div layout key="email-field">
            <label className="text-sm text-slate-300">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className={`
                mt-1 w-full rounded-lg
                bg-slate-900 border ${errors.email ? 'border-red-500' : 'border-slate-700'}
                px-4 py-2.5 text-slate-200
                placeholder:text-slate-500
                focus:outline-none focus:border-green-400
                transition
              `}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </motion.div>

          {/* PASSWORD */}
          <motion.div layout key="password-field">
            <label className="text-sm text-slate-300">Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              className={`
                mt-1 w-full rounded-lg
                bg-slate-900 border ${errors.password ? 'border-red-500' : 'border-slate-700'}
                px-4 py-2.5 text-slate-200
                placeholder:text-slate-500
                focus:outline-none focus:border-green-400
                transition
              `}
            />
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          </motion.div>

          {/* BUTTON */}
          <motion.button
            layout
            key="submit-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="
              mt-6 w-full rounded-full
              bg-green-500 py-2.5
              font-semibold text-black
              hover:bg-green-400 transition
            "
          >
            {isSignup ? "Sign Up" : "Login"}
          </motion.button>
        </form>

        {/* FOOTER */}
        <motion.p layout key="footer" className="mt-6 text-center text-sm text-slate-400">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
          <span
            onClick={() => {
              setIsSignup(!isSignup);
              setErrors({});
              setUserData({ ...userData, name: "" });
            }}
            className="text-green-400 cursor-pointer hover:underline"
          >
            {isSignup ? "Login" : "Sign up"}
          </span>
        </motion.p>
      </motion.div>
    </LampContainer>
  );
}

export default Auth;
