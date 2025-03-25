
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-700 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/30 rounded-full">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
            How CloudStick Works
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Managing your cloud infrastructure has never been easier. Get started in minutes with our intuitive platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          <div className="glass-card p-8 relative dark:bg-slate-800/50 dark:border-slate-700">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">1</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Connect Your Cloud</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Link your AWS, Google Cloud, Azure, or DigitalOcean accounts in just a few clicks.
            </p>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
              <ArrowRight className="w-8 h-8 text-teal-300 dark:text-teal-600" />
            </div>
            <div className="absolute -bottom-1 left-10 right-10 h-4 bg-white blur-xl opacity-80 dark:bg-slate-800 dark:opacity-50"></div>
          </div>
          
          <div className="glass-card p-8 relative dark:bg-slate-800/50 dark:border-slate-700">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">2</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Manage Your Servers</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Control all your servers from a unified dashboard with powerful management tools.
            </p>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
              <ArrowRight className="w-8 h-8 text-teal-300 dark:text-teal-600" />
            </div>
            <div className="absolute -bottom-1 left-10 right-10 h-4 bg-white blur-xl opacity-80 dark:bg-slate-800 dark:opacity-50"></div>
          </div>
          
          <div className="glass-card p-8 relative dark:bg-slate-800/50 dark:border-slate-700">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">3</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Scale & Optimize</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Monitor performance metrics and scale resources automatically based on demand.
            </p>
            <div className="absolute -bottom-1 left-10 right-10 h-4 bg-white blur-xl opacity-80 dark:bg-slate-800 dark:opacity-50"></div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/server-migration">
            <Button className="gradient-btn">
              Request Free Migration
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
