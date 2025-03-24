import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {/* Free Plan */}
      <div className="pricing-card hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 rounded-2xl">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold">Free</h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-slate-500 dark:text-slate-400">/month</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">Perfect for personal use</p>
        </div>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>5GB Storage</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Basic file sharing</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Desktop app</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Mobile app</span>
          </li>
        </ul>
        
        <Link to="/signup" className="block text-center">
          <button className="w-full py-3 px-6 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-xl transition-colors dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-700">
            Get Started
          </button>
        </Link>
      </div>
      
      {/* Basic Plan */}
      <div className="pricing-card hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 rounded-2xl">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold">Basic</h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold">$9.99</span>
            <span className="text-slate-500 dark:text-slate-400">/month</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">Great for individuals</p>
          <p className="text-teal-600 dark:text-teal-400 text-sm font-medium mb-6">10-day free trial</p>
        </div>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>100GB Storage</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Advanced file sharing</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Priority support</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Offline access</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>30-day file recovery</span>
          </li>
        </ul>
        
        <Link to="/signup" className="block text-center">
          <button className="w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-opacity">
            Start Free Trial
          </button>
        </Link>
      </div>
      
      {/* Pro Plan */}
      <div className="pricing-card featured hover:shadow-xl transition-all duration-300 border border-teal-200 dark:border-teal-900 relative rounded-2xl">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-600 to-cyan-500 text-white text-sm font-medium py-1 px-4 rounded-full">
          Most Popular
        </div>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold">Pro</h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold">$19.99</span>
            <span className="text-slate-500 dark:text-slate-400">/month</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">Perfect for professionals</p>
          <p className="text-teal-600 dark:text-teal-400 text-sm font-medium mb-6">10-day free trial</p>
        </div>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>1TB Storage</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Everything in Basic</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Advanced permissions</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Team collaboration tools</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>90-day file recovery</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>API access</span>
          </li>
        </ul>
        
        <Link to="/signup" className="block text-center">
          <button className="w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-opacity shadow-md">
            Start Free Trial
          </button>
        </Link>
      </div>
      
      {/* Business Plan */}
      <div className="pricing-card hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 rounded-2xl">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold">Business</h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold">$49.99</span>
            <span className="text-slate-500 dark:text-slate-400">/month</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">For teams and organizations</p>
          <p className="text-teal-600 dark:text-teal-400 text-sm font-medium mb-6">10-day free trial</p>
        </div>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>5TB Storage</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Everything in Pro</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>SSO Integration</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Advanced admin controls</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Unlimited file recovery</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Dedicated support</span>
          </li>
          <li className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            <span>Custom contracts</span>
          </li>
        </ul>
        
        <Link to="/signup" className="block text-center">
          <button className="w-full py-3 px-6 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-xl transition-colors dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-700">
            Contact Sales
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCards;
