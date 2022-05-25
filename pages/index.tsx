import React from "react";
import Navbar from "@components/common/Navbar";
import Hero from "@components/Landing/Hero";
import Features from "@components/Landing/Features";
import Plans from "@components/Landing/Plans";
import Contact from "@components/Landing/Contact";
import Footer from "@components/Landing/Footer";
import { useRef, useState, useEffect } from "react";
import Script from "next/script";
import { PlanProps } from "@decor/Plan";

function Index() {
  const plansRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanProps | null>(null);

  const handleCancelPlan = () => {
    setSelectedPlan(null);
  };

  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return (
    <>
      <title>Phuket Instant Print</title>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
      />
      <div className="container mx-auto">
        <Navbar active="Home" />
        <Hero plansRef={plansRef} />
        <Features />
        <Plans
          ref={plansRef}
          contactRef={contactRef}
          planSelected={(plan) => setSelectedPlan(plan)}
        />
        <Contact
          ref={contactRef}
          selectedPlan={selectedPlan!}
          cancelPlan={handleCancelPlan}
        />
      </div>
      <Footer />
    </>
  );
}

export default Index;
