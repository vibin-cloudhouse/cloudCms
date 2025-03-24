
import React from "react";
import { Link } from "react-router-dom";

const ContactSales = () => {
  return (
    <div className="mt-12 text-center">
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Need a custom plan for your enterprise? Contact our sales team for a tailored solution.
      </p>
      <Link to="/contact">
        <button className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity font-medium">
          Contact Sales
        </button>
      </Link>
    </div>
  );
};

export default ContactSales;
