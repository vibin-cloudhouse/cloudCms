
import React from "react";

const AboutHero: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
      <div className="text-left">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl mb-6">
          About Us
        </h1>
        <div>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
            Secure cloud storage solutions for businesses and individuals.
          </p>
          <div className="p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg border border-teal-100 dark:border-teal-800 inline-block">
            <p className="text-teal-700 dark:text-teal-300 font-medium">
              We are proudly from <span className="font-bold">CloudHouse</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
