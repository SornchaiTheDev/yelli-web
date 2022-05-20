import React from "react";
import Navbar from "@components/common/Navbar";
import Hero from "@components/Landing/Hero";
import Scroll from "@components/Landing/Scroll";
import Features from "@components/Landing/Features";
import Plans from "@components/Landing/Plans";
import Contact from "@components/Landing/Contact";
import Footer from "@components/Landing/Footer";
import { useRef } from "react";
import Script from "next/script";

function Index() {
  const plansRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
      />
      <div className="container mx-auto">
        <div className="flex flex-col max-h-screen h-screen">
          <Navbar active="Home" />
          <Hero plansRef={plansRef} />
          <Scroll />
        </div>
        <Features />
        <Plans ref={plansRef} contactRef={contactRef} />
        <Contact ref={contactRef} />
      </div>
      <Footer />
    </>
  );
}

export default Index;
