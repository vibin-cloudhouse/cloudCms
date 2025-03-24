
import React from "react";
import { ArrowRight } from "lucide-react";

const AboutHero: React.FC = () => {
  return (
    <div className="relative py-8 mb-24">
      <div className="gradient-blob w-96 h-96 -top-20 -left-20 opacity-10"></div>
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-8 gradient-heading">
          About CloudStick
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          Secure cloud storage solutions for businesses and individuals. We're committed to providing 
          the best cloud experience with uncompromising security and intuitive design.
        </p>
        <div className="p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg border border-teal-100 dark:border-teal-800 inline-flex items-center gap-2">
          <p className="text-teal-700 dark:text-teal-300 font-medium">
            We are proudly part of <a href="https://cloudhousetechnologies.com/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">CloudHouse</a>
          </p>
          <ArrowRight className="w-4 h-4 text-teal-600 dark:text-teal-400" />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
