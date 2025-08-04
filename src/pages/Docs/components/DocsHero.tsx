
import React from "react";
import { Link } from "react-router-dom";

const DocsHero: React.FC = () => {
  return (
    <section className="my-[200px] py-16 px-4 text-white">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-3xl md:text-7xl font-bold text-black dark:text-white mb-4"><span className="gradient-heading">CloudStick </span>Documentation</h1>
        <p className="text-md md:text-lg dark:text-white/50 text-gray-700 mb-8 max-w-3xl mx-auto opacity-90">
          Everything you need to know about building and deploying applications with CloudStick
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link 
            to="/docs/getting-started/quick-start" 
            className="bg-transparent text-gray-700 border bg-white dark:bg-white/10 dark:text-white/80 hover:bg-[#06B5D2] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Quick Start Guide
          </Link>
          <Link 
            to="/docs/api/authentication" 
            className="bg-transparent text-gray-700 border bg-white dark:bg-white/10 dark:text-white/80 hover:bg-[#06B5D2] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            API Reference
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DocsHero;
