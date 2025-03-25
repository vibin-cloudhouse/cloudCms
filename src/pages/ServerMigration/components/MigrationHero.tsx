
import React from "react";

const MigrationHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50/90 to-teal-50/90 dark:from-slate-900/95 dark:to-slate-800/95 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="gradient-blob w-96 h-96 -top-20 -right-20 opacity-10"></div>
        <div className="gradient-blob w-96 h-96 bottom-20 -left-20 opacity-10"></div>
        <div className="max-w-3xl mx-auto text-center">
          <span className="px-4 py-1.5 text-sm font-semibold text-teal-700 bg-teal-100/70 dark:text-teal-300 dark:bg-teal-900/30 rounded-full inline-block mb-6">Free Service</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Migration to CloudStick is <span className="gradient-heading dark:text-teal-400 block md:inline">Totally Free</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Our expert team handles your entire server migration process at no cost, 
            ensuring a smooth transition with minimal downtime and maximum reliability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-white/70 dark:bg-slate-800/50 px-4 py-2 rounded-full shadow-sm">
              <span className="h-6 w-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">✓</span>
              <span className="font-medium text-teal-700 dark:text-teal-300">Zero Downtime</span>
            </div>
            <div className="flex items-center bg-white/70 dark:bg-slate-800/50 px-4 py-2 rounded-full shadow-sm">
              <span className="h-6 w-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">✓</span>
              <span className="font-medium text-teal-700 dark:text-teal-300">All Website Types</span>
            </div>
            <div className="flex items-center bg-white/70 dark:bg-slate-800/50 px-4 py-2 rounded-full shadow-sm">
              <span className="h-6 w-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">✓</span>
              <span className="font-medium text-teal-700 dark:text-teal-300">24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationHero;
