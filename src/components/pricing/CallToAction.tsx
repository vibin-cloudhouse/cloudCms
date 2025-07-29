
import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#006FEE] to-cyan-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Join thousands of users who trust CloudStick for their secure file storage needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/signup">
            <button className="bg-white text-[#006FEE] px-8 py-3 rounded-xl hover:bg-opacity-90 transition-opacity font-medium">
              Sign Up Now
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium">
              Contact Sales
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
