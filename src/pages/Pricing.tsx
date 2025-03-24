
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import ContactSales from "@/components/pricing/ContactSales";
import CallToAction from "@/components/pricing/CallToAction";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-50 to-white dark:from-slate-900 dark:to-slate-950">
          <PricingHero />
          
          {/* Pricing Tables Grid */}
          <PricingCards />
        </section>
        
        {/* Comparison Table Section - Enhanced */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Compare Plans</h2>
            
            <ComparisonTable />
            
            <ContactSales />
          </div>
        </section>
        
        {/* Call to Action Section */}
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
