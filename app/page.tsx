"use client";

import { useState } from "react";
import Header from "@/components/hero/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import AuthModal from "@/components/authModal/AuthModal";
import { User } from "@/types/authType"; 

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero onGetStartedAction={() => setIsModalOpen(true)} />
      <Footer />
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Page;
