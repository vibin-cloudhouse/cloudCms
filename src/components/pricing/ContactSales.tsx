
import React from "react";
import { Link } from "react-router-dom";
import { CreditCard } from "lucide-react";

const ContactSales = () => {
  return (
    <div className="mt-12 text-center">
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        Need a custom plan for your enterprise? Contact our sales team for a tailored solution.
      </p>
      
      <div className="flex items-center justify-center mb-8">
        <div className="inline-flex items-center bg-teal-50 dark:bg-teal-900/30 px-6 py-3 rounded-lg">
          <CreditCard className="h-5 w-5 text-[#006FEE] dark:text-teal-400 mr-2 stroke-2" />
          <span className="font-medium text-teal-700 dark:text-teal-300">No credit card required for any trial</span>
        </div>
      </div>
      
      <Link to="/contact">
        <button className="bg-gradient-to-r from-[#006FEE] to-cyan-500 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity font-medium">
          Contact Sales
        </button>
      </Link>
    </div>
  );
};

export default ContactSales;
