"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Dot {
  x: number;
  y: number;
  dx: number;
  dy: number;
  duration: number;
}

const AnimatedBackground: React.FC = () => {
  const [dots, setDots] = useState<Dot[] | null>(null);

  useEffect(() => {
    const createDots = () =>
      Array.from({ length: 15 }, () => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const dx = Math.random() * window.innerWidth;
        const dy = Math.random() * window.innerHeight;
        const duration = 10 + Math.random() * 10;
        return { x, y, dx, dy, duration };
      });

    setDots(createDots());
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/70" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.13) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(70, 6, 6, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(107, 4, 4, 0.05) 0%, transparent 50%)
            `,
            backgroundSize: "400px 400px, 300px 300px, 200px 200px",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {dots &&
        dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ x: dot.x, y: dot.y }}
            animate={{ x: dot.dx, y: dot.dy }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
};

export default AnimatedBackground;
