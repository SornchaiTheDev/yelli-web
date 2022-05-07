import React from "react";
import Navbar from "@components/common/Navbar";
import Hero from "@components/Landing/Hero";
import Scroll from "@components/Landing/Scroll";
import Features from "@components/Landing/Features";
import Plans from "@components/Landing/Plans";
import Gallery from "@components/Landing/Gallery";
import Contact from "@components/Landing/Contact";
import Footer from "@components/Landing/Footer";

function Index() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col max-h-screen h-screen">
        <Navbar />
        <Hero />
        <Scroll />
      </div>
      <Features />
      <Plans />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
