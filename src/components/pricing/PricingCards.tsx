
import React, { useContext } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PricingContext } from "@/pages/Pricing";

const PricingCards = () => {
  const { isYearly } = useContext(PricingContext);
  
  // Pricing data with both monthly and yearly options
  const plans = [
    {
      name: "Free",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      description: "Perfect for personal use",
      features: [
        "5GB Storage",
        "Basic file sharing",
        "Desktop app",
        "Mobile app"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Basic",
      monthlyPrice: "$9.99",
      yearlyPrice: "$95.90",
      description: "Great for individuals",
      trial: "10-day free trial",
      features: [
        "100GB Storage",
        "Advanced file sharing",
        "Priority support",
        "Offline access",
        "30-day file recovery"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "gradient"
    },
    {
      name: "Pro",
      monthlyPrice: "$19.99",
      yearlyPrice: "$191.90",
      description: "Perfect for professionals",
      trial: "10-day free trial",
      featured: true,
      features: [
        "1TB Storage",
        "Everything in Basic",
        "Advanced permissions",
        "Team collaboration tools",
        "90-day file recovery",
        "API access"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "gradient"
    },
    {
      name: "Business",
      monthlyPrice: "$49.99",
      yearlyPrice: "$479.90",
      description: "For teams and organizations",
      trial: "10-day free trial",
      features: [
        "5TB Storage",
        "Everything in Pro",
        "SSO Integration",
        "Advanced admin controls",
        "Unlimited file recovery",
        "Dedicated support",
        "Custom contracts"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline"
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
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-600 to-cyan-500 text-white text-sm font-medium py-1 px-4 rounded-full">
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
              <p className="text-teal-600 dark:text-teal-400 text-sm font-medium mb-6">{plan.trial}</p>
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
          
          <Link to="/signup" className="block text-center">
            <button 
              className={
                plan.buttonVariant === "gradient" 
                  ? "w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-opacity shadow-md"
                  : "w-full py-3 px-6 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-xl transition-colors dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-700"
              }
            >
              {plan.buttonText}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
