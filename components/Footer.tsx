"use client";
import { motion } from "framer-motion";
import FooterBrand from "@/components/FooterBrand";
import FooterLinks from "@/components/FooterLinks";
import FooterSocials from "@/components/FooterSocials";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-gradient-to-r from-background to-transparent text-white overflow-hidden border-t border-primary">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            initial={{ d: "M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z",
                "M0,40 C300,80 600,40 900,80 C1050,60 1150,60 1200,40 L1200,120 L0,120 Z",
                "M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <FooterBrand />
          <FooterLinks />
          <FooterSocials />
        </div>

        <div className="border-t border-primary mt-8 pt-6 text-center">
          <p className="text-white/70 text-xs">
            Secure • Transparent • AI-Powered • Built on Sui Blockchain
          </p>
        </div>
      </div>
    </footer>
  );
}
