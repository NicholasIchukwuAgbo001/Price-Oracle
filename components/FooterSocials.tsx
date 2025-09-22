"use client";
import { motion } from "framer-motion";
import { FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function FooterSocials() {
  const socials = [
    { href: "https://twitter.com", icon: <FaTwitter className="w-5 h-5" />, color: "bg-primary" },
    { href: "https://wa.me", icon: <FaWhatsapp className="w-5 h-5" />, color: "bg-success" },
    { href: "https://t.me", icon: <FaTelegram className="w-5 h-5" />, color: "bg-primary" },
  ];

  return (
    <div className="text-center md:text-right">
      <h4 className="font-semibold mb-4">Connect With Us</h4>
      <div className="flex justify-center md:justify-end space-x-4">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 ${s.color} rounded-full flex items-center justify-center hover:opacity-80 transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
