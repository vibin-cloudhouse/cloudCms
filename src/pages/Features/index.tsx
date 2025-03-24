
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeaturesHero from "./FeaturesHero";
import FeaturesList from "./FeaturesList";
import FeatureHighlight from "./FeatureHighlight";
import TestimonialsSection from "./TestimonialsSection";
import FeaturesComparisonTable from "./FeaturesComparisonTable";
import FeaturesFAQ from "./FeaturesFAQ";
import FeaturesCTA from "./FeaturesCTA";

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <FeaturesHero />
        <FeaturesList />
        <FeatureHighlight 
          title="White Labeling" 
          description="Rebrand CloudStick as your own with our comprehensive white labeling options."
          image="/lovable-uploads/364865ac-6f23-478f-8edf-1750c969df74.png"
          reverse={false}
        />
        <FeatureHighlight 
          title="Advanced Data Security" 
          description="Enterprise-grade encryption and security protocols to keep your data safe."
          image="/lovable-uploads/b6663b6d-31b3-4893-9cba-9af864ba5896.png"
          reverse={true}
        />
        <TestimonialsSection />
        <FeaturesComparisonTable />
        <FeaturesFAQ />
        <FeaturesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
