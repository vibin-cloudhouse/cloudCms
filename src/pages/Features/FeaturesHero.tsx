
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006FEE] to-cyan-500">
              Powerful Features
            </span>{" "}
            to Streamline Your Workflow
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            CloudStick offers a comprehensive suite of features designed to enhance productivity,
            improve collaboration, and simplify your development processes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing">
              <Button className="bg-gradient-to-r from-[#006FEE] to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-6 py-6 rounded-md text-lg font-medium">
                View Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/docs">
              <Button variant="outline" className="px-6 py-6 text-lg font-medium">
                Browse Documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
