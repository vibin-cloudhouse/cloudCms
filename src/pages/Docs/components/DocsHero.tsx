
import React from "react";
import { Link } from "react-router-dom";

const DocsHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-16 px-4 text-white">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">CloudStick Documentation</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Everything you need to know about building and deploying applications with CloudStick
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link 
            to="/docs/getting-started/quick-start" 
            className="bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Quick Start Guide
          </Link>
          <Link 
            to="/docs/api/authentication" 
            className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            API Reference
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DocsHero;
