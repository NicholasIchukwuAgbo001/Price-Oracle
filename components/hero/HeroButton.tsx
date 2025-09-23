"use client";
import { motion } from "framer-motion";

export default function HeroButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-primary to-primary/20 hover:from-primary hover:to-primary/80 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 cursor-pointer"
    >
      Start Chatting
    </motion.button>
  );
}
