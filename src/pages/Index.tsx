import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import FeatureSectionsContainer from "@/components/home/FeatureSectionsContainer";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <HeroSection />
      <FeaturesSection/>
      <HowItWorksSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;