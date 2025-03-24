
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
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
        <img 
          src="https://images.unsplash.com/photo-1483058712412-e9573fc25ebb?auto=format&fit=crop&w=1200&q=80" 
          alt="CloudHouse Office" 
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <p className="font-semibold text-lg">Our Headquarters</p>
          <p className="text-sm opacity-90">Where innovation meets reliability</p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
