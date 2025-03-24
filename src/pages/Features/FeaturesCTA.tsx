
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturesCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Experience CloudStick?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that have transformed their workflow with CloudStick's powerful features.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <Button className="bg-white text-teal-600 hover:bg-slate-100 px-6 py-6 rounded-md text-lg font-medium">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/pricing">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg font-medium">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCTA;
