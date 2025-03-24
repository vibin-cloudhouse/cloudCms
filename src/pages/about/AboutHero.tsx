
import React from "react";

const AboutHero: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
        About Us
      </h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-xl text-slate-600 mb-6">
          Secure cloud storage solutions for businesses and individuals.
        </p>
        <div className="p-4 bg-teal-50 rounded-lg border border-teal-100 inline-block">
          <p className="text-teal-700 font-medium">
            We are proudly from <span className="font-bold">CloudHouse</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
