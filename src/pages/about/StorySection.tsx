
import React from "react";

const StorySection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Our Story</h2>
      <p className="text-slate-600 mb-4">
        Founded in 2020, CloudStick emerged from our founders' shared vision to create a 
        secure, user-friendly cloud storage solution that prioritizes privacy without 
        compromising convenience.
      </p>
      <p className="text-slate-600 mb-4">
        As part of the CloudHouse family, we leverage decades of combined experience in cloud 
        infrastructure, security, and user experience design to build a product that meets the 
        highest standards of performance and protection.
      </p>
      <p className="text-slate-600">
        Today, we serve thousands of customers worldwide, from individual professionals to 
        large enterprises, all united by the need for reliable, secure file storage and 
        sharing in an increasingly digital world.
      </p>
    </div>
  );
};

export default StorySection;
