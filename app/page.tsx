"use client"; 

import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircleDashed as MessageCircle,
  Shield,
  TrendingUp,
} from "lucide-react";

interface HeroProps {
  onStartChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartChat }) => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Chat with Your{" "}
            <span className="bg-gradient-to-r from-warning/90 to-orange-warning bg-clip-text text-transparent">
              Inflation Shield
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get real-time price predictions and resilient strategies. Securely
            share insights on Sui blockchain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <TrendingUp className="w-8 h-8 text-warning/80 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Price Predictions</h3>
              <p className="text-white/70 text-sm">
                AI-powered forecasts for Nigerian markets
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Shield className="w-8 h-8 text-success mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">
                Resilient Strategies
              </h3>
              <p className="text-white/70 text-sm">
                Protect your purchasing power
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <MessageCircle className="w-8 h-8 text-primary/60 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Secure Sharing</h3>
              <p className="text-white/70 text-sm">
                Share strategies on Sui blockchain
              </p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStartChat}
            className="bg-gradient-to-r from-primary to-primary/20 hover:from-primary hover:to-primary/80 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 border border-white/20"

          >
            Start Chatting
          </motion.button>

          <div className="mt-12 flex items-center justify-center space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm">Secure & Private</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary/80 rounded-full"></div>
              <span className="text-sm">Blockchain Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <span className="text-sm">AI Powered</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
