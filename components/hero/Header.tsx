"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import AuthModal from "@/components/authModal/AuthModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-background/70 backdrop-blur-lg shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-tight cursor-pointer">
            Price Oracle
          </h1>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-medium backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
          >
            <LogIn size={18} />
            <span>Login / Register</span>
          </motion.button>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-pink-500 to-teal-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
      </header>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Header;
