"use client";

import { motion } from "framer-motion";
import HeroTitle from "./HeroTitle";
import HeroFeatures from "./HeroFeatures";
import HeroButton from "./HeroButton";
import HeroHighlights from "./HeroHighlights";

interface HeroProps {
  onGetStartedAction: () => void;
}

export default function Hero({ onGetStartedAction }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <HeroTitle />

        <div className="mt-6">
          <HeroFeatures />
        </div>

        <div className="mt-8">
          <HeroButton onClickAction={onGetStartedAction} />
        </div>

        <div className="mt-10">
          <HeroHighlights />
        </div>
      </motion.div>
    </section>
  );
}
