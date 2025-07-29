
import React, { useContext } from "react";
import { Switch } from "@/components/ui/switch";
import { PricingContext } from "@/pages/Pricing";

const PricingHero = () => {
  const { isYearly, setIsYearly } = useContext(PricingContext);

  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
        Flexible Pricing for Every Need
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-6">
        Choose the perfect plan for your storage needs. All plans include our core security features.
      </p>
      
      {/* Billing Toggle */}
      <div className="flex items-center justify-center mb-8">
        <span className={`mr-3 text-sm font-medium ${!isYearly ? 'text-[#006FEE] dark:text-teal-400' : 'text-slate-600 dark:text-slate-400'}`}>
          Monthly
        </span>
        <div className="flex items-center">
          <Switch 
            checked={isYearly} 
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-[#006FEE]"
          />
        </div>
        <span className={`ml-3 text-sm font-medium ${isYearly ? 'text-[#006FEE] dark:text-teal-400' : 'text-slate-600 dark:text-slate-400'}`}>
          Yearly <span className="bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-400 text-xs px-2 py-0.5 rounded-full ml-1">Save 20%</span>
        </span>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <div className="flex items-center bg-teal-50 dark:bg-teal-900/30 px-4 py-2 rounded-full">
          <span className="h-6 w-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">✓</span>
          <span className="font-medium text-teal-700 dark:text-teal-300">10-Day Free Trial</span>
        </div>
        <div className="flex items-center bg-teal-50 dark:bg-teal-900/30 px-4 py-2 rounded-full">
          <span className="h-6 w-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">✓</span>
          <span className="font-medium text-teal-700 dark:text-teal-300">No Credit Card Required</span>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
