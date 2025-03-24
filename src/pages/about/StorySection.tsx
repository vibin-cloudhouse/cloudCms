
import React from "react";

const StorySection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto relative">
      <div className="gradient-glow w-[600px] h-[600px] opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <h2 className="text-3xl font-bold gradient-heading mb-10 text-center">Our Story</h2>
      <div className="glass-card p-8 relative z-10">
        <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
          Founded in 2020, CloudStick emerged from our founders' shared vision to create a 
          secure, user-friendly cloud storage solution that prioritizes privacy without 
          compromising convenience.
        </p>
        <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
          As part of the CloudHouse family, we leverage decades of combined experience in cloud 
          infrastructure, security, and user experience design to build a product that meets the 
          highest standards of performance and protection.
        </p>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          Today, we serve thousands of customers worldwide, from individual professionals to 
          large enterprises, all united by the need for reliable, secure file storage and 
          sharing in an increasingly digital world.
        </p>
      </div>
    </div>
  );
};

export default StorySection;
