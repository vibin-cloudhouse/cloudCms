
import React, { useContext } from "react";
import { Check } from "lucide-react";
import { Link, redirect } from "react-router-dom";
import { PricingContext } from "@/pages/Pricing";

const PricingCards = () => {
  const { isYearly } = useContext(PricingContext);
  
  // Pricing data with both monthly and yearly options
  const plans = [
    {
      "name": "Free",
      "monthlyPrice": "$0",
      "yearlyPrice": "$0",
      "description": "Perfect for personal use",
      "features": [
        "1 Server",
        "One Hosting Account",
        "Custom SSL Only",
        "Server Firewall",
        "Sub Domains",
        "EasyPHP",
        "User Quota",
        "Multiple PHP Versions",
        "Git Deployment",
        "SFTP & Additional FTP Accounts"
      ],
      "buttonText": "More",
      "buttonVariant": "gradient",
      "redirectUrl": "#comparePlans"
    },
    {
      "name": "Basic",
      "monthlyPrice": "$8.00",
      "yearlyPrice": "$80",
      "description": "Great for individuals",
      "trial": "10-day free trial",
      "features": [
        "1 Server",
        "Unlimited Hosting Accounts",
        "One-click Free SSL",
        "Server Firewall",
        "WordPress Manager",
        "EasyPHP",
        "User Quota",
        "Multiple PHP Versions",
        "Git Deployment",
        "Email",
        "SFTP & Additional FTP Accounts",
        "5GB Free Backup",
        "Web application Clone"
      ],
      "buttonText": "More",
      "buttonVariant": "gradient",
      "redirectUrl": ""
    },
    {
      "name": "Pro",
      "monthlyPrice": "$15.00",
      "yearlyPrice": "$150",
      "description": "Perfect for professionals",
      "trial": "10-day free trial",
      "featured": true,
      "features": [
        "Unlimited",
        "Unlimited Hosting Accounts",
        "One-click Free SSL",
        "Server Firewall",
        "WordPress Manager",
        "EasyPHP",
        "User Quota",
        "Multiple PHP Versions",
        "Git Deployment",
        "Email",
        "SFTP & Additional FTP Accounts",
        "10GB Free Backup",
        "Web application Clone"
      ],
      "buttonText": "More",
      "buttonVariant": "gradient"
    },
    {
      "name": "Business",
      "monthlyPrice": "$45.00",
      "yearlyPrice": "$450",
      "description": "For teams and organizations",
      "trial": "10-day free trial",
      "features": [
        "Unlimited Servers",
        "All features of Pro account",
        "White-label Solution",
        "Activepieces",
        "WordPress Manager",
        "EasyPHP",
        "User Quota",
        "Multiple PHP Versions",
        "Email",
        "SFTP & Additional FTP Accounts",
        "40GB Free Backup",
        "Web application Clone",
        "One-click Wordpress login"
      ],
      "buttonText": "More",
      "buttonVariant": "gradient"
    }
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {plans.map((plan, index) => (
        <div 
          key={index}
          className={`pricing-card hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 rounded-2xl ${
            plan.featured ? 'featured border border-teal-200 dark:border-teal-900 relative' : ''
          }`}
        >
          {plan.featured && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#006FEE] to-cyan-500 text-white text-sm font-medium py-1 px-4 rounded-full">
              Most Popular
            </div>
          )}
          
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <div className="mt-4 mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
              <span className="text-slate-500 dark:text-slate-400">/month</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">{plan.description}</p>
            {plan.trial && (
              <p className="text-[#006FEE] dark:text-teal-400 text-sm font-medium mb-6">{plan.trial}</p>
            )}
          </div>
          
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-slate-700 dark:text-slate-300">
                <Check className="h-5 w-5 text-teal-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <a href="#comparePlans" className="block text-center">
            <button 
              className={
                plan.buttonVariant === "gradient" 
                  ? "w-full py-3 px-6 bg-gradient-to-r from-[#006FEE] to-cyan-500 text-white rounded-xl hover:opacity-90 transition-opacity shadow-md"
                  : "w-full py-3 px-6 border border-[#006FEE] text-[#006FEE] hover:bg-teal-50 rounded-xl transition-colors dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-700"
              }
            >
              {plan.buttonText}
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
