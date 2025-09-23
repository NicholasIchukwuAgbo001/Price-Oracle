"use client";

import Header from "@/components/hero/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";

const Page = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Page;
