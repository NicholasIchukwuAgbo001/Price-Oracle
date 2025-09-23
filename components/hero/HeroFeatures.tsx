"use client";
import { motion } from "framer-motion";
import { TrendingUp, Shield, MessageCircleDashed as MessageCircle } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-8 h-8 text-warning/80 mb-3 mx-auto" />,
    title: "Price Predictions",
    desc: "AI-powered forecasts for Nigerian markets",
    delay: 0.2,
  },
  {
    icon: <Shield className="w-8 h-8 text-success mb-3 mx-auto" />,
    title: "Resilient Strategies",
    desc: "Protect your purchasing power",
    delay: 0.4,
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-primary/60 mb-3 mx-auto" />,
    title: "Secure Sharing",
    desc: "Share strategies on Sui blockchain",
    delay: 0.6,
  },
];

export default function HeroFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: f.delay }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
        >
          {f.icon}
          <h3 className="text-white font-semibold mb-2">{f.title}</h3>
          <p className="text-white/70 text-sm">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
