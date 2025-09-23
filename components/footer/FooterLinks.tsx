"use client";
import { motion } from "framer-motion";

export default function FooterLinks() {
  return (
    <div className="text-center">
      <h4 className="font-semibold mb-4">Quick Links</h4>
      <div className="space-y-2">
        {["Privacy Policy", "Feedback", "Terms of Service"].map((item, index) => (
          <motion.a
            key={index}
            href="#"
            className="block text-white hover:text-white text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
