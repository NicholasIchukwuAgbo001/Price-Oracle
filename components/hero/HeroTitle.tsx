"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  { prefix: "Chat with Your", highlight: "Inflation Shield" },
  { prefix: "Check Your", highlight: "Market Price Movement" },
  { prefix: "Track Real Time", highlight: "Chart Trends" },
  { prefix: "Chat with Your", highlight: "Price Predictor" },
{ prefix: "Stay Ahead with", highlight: "Accurate Forecasts" },
  { prefix: "Discover", highlight: "Resilient Investment Strategies" },
  { prefix: "Securely Share Your", highlight: "Market Insights" },
];

export default function HeroTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.h1
        key={index}
        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        {phrases[index].prefix}{" "}
        <span className="bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">
          {phrases[index].highlight}
        </span>
      </motion.h1>
    </AnimatePresence>
  );
}
