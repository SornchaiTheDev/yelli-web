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
import useWindow from "@hooks/useWindow";
import { useRouter } from "next/router";
import Scroll from "@components/Landing/Scroll";

function Index() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const { width } = useWindow();
  const [selectedPlan, setSelectedPlan] = useState<PlanProps | null>(null);
  const [activeSection, setActiveSection] = useState<string>("Home");

  useEffect(() => {
    if (router.asPath.split("/")[1].substring(1).length) {
      setActiveSection(router.asPath.split("/")[1].substring(1));
    }
  }, [router.asPath]);

  const handleCancelPlan = () => {
    setSelectedPlan(null);
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const isMobile = width < 728;
    if (section === "home") {
      heroRef.current?.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "nearest" : "center",
      });
    }
    if (section === "plans") {
      plansRef.current?.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "nearest" : "center",
      });
    }
    if (section === "contact") {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "nearest" : "center",
      });
    }
  };

  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return (
    <div className="bg-gray-100">
      <title>Phuket Instant Print</title>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
      />
      <Navbar
        home
        activeSection={activeSection}
        scrollToSection={(section) => scrollToSection(section)}
      />
      <Hero plansRef={plansRef} ref={heroRef} />
      <Scroll />
      <div className="container mx-auto">
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
    </div>
  );
}

export default Index;
