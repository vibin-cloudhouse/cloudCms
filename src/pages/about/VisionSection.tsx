
import React from "react";
import { Globe } from "lucide-react";

const VisionSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">Our Vision</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
          <div className="w-48 h-48 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
            <Globe className="h-24 w-24 text-teal-600 dark:text-teal-400" />
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="text-slate-700 dark:text-slate-200 mb-4 text-lg">
            Our vision at CloudStick is to create a world where data is truly secure, 
            private, and accessible only to those who should have access. We envision a 
            future where individuals and organizations can collaborate freely without 
            compromising on security.
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg">
            By 2030, we aim to become the global standard for secure cloud storage, 
            protecting millions of users worldwide while pioneering new technologies 
            that redefine what's possible in data privacy and security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
