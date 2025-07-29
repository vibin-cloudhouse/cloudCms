
import React from "react";
import { Check, X } from "lucide-react";

const FeaturesComparisonTable = () => {
  const features = [
    "White Labeling",
    "API Integration",
    "Team Collaboration",
    "Real-time Analytics",
    "Multi-environment Support",
    "Custom Workflows",
    "Health Monitoring",
    "Advanced Security"
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-6">
          How We Compare
        </h2>
        <p className="text-lg text-center text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
          See how CloudStick stands out from the competition with our comprehensive feature set.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto">
            <thead>
              <tr>
                <th className="text-left p-4 text-slate-900 dark:text-white">Feature</th>
                <th className="p-4 text-center text-white bg-gradient-to-r from-[#006FEE] to-cyan-500 rounded-tl-lg">
                  CloudStick
                </th>
                <th className="p-4 text-center text-slate-900 dark:text-white bg-slate-200 dark:bg-slate-700">
                  Competitor A
                </th>
                <th className="p-4 text-center text-slate-900 dark:text-white bg-slate-200 dark:bg-slate-700 rounded-tr-lg">
                  Competitor B
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index}
                  className={index % 2 === 0 ? "bg-white dark:bg-slate-900" : "bg-slate-100 dark:bg-slate-900/50"}
                >
                  <td className="p-4 border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white">
                    {feature}
                  </td>
                  <td className="p-4 border-b border-slate-200 dark:border-slate-700 text-center">
                    <Check className="h-5 w-5 text-teal-500 mx-auto" />
                  </td>
                  <td className="p-4 border-b border-slate-200 dark:border-slate-700 text-center">
                    {["White Labeling", "API Integration", "Team Collaboration", "Health Monitoring"].includes(feature) ? 
                      <Check className="h-5 w-5 text-teal-500 mx-auto" /> : 
                      <X className="h-5 w-5 text-slate-400 mx-auto" />
                    }
                  </td>
                  <td className="p-4 border-b border-slate-200 dark:border-slate-700 text-center">
                    {["API Integration", "Team Collaboration", "Real-time Analytics"].includes(feature) ? 
                      <Check className="h-5 w-5 text-teal-500 mx-auto" /> : 
                      <X className="h-5 w-5 text-slate-400 mx-auto" />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeaturesComparisonTable;
