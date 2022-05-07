import React from "react";
import Navbar from "@components/common/Navbar";
import Hero from "@components/Landing/Hero";
import Scroll from "@components/Landing/Scroll";
import Features from "@components/Landing/Features";

function Index() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col max-h-screen h-screen">
        <Navbar />
        <Hero />
        <Scroll />
      </div>
      <Features />
    </div>
  );
}

export default Index;
