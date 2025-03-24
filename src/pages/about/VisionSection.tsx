
import React from "react";
import { Globe, Shield, Users } from "lucide-react";

const VisionSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-bold gradient-heading mb-12 text-center">Our Vision</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Globe className="h-8 w-8 text-teal-600 dark:text-teal-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center">Global Access</h3>
          <p className="text-slate-700 dark:text-slate-200 text-center">
            Creating a world where data is truly secure, private, and accessible only to those who should have access.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Shield className="h-8 w-8 text-teal-600 dark:text-teal-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center">Uncompromising Security</h3>
          <p className="text-slate-700 dark:text-slate-200 text-center">
            Pioneering new technologies that redefine what's possible in data privacy and security.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Users className="h-8 w-8 text-teal-600 dark:text-teal-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center">Collaborative Innovation</h3>
          <p className="text-slate-700 dark:text-slate-200 text-center">
            By 2030, we aim to become the global standard for secure cloud storage, protecting millions of users worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
