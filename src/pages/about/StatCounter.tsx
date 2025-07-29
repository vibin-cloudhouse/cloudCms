
import React from "react";

interface StatCounterProps {
  value: number;
  label: string;
  icon: React.ReactNode;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, label, icon }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:border-teal-200 dark:hover:border-teal-800">
      <div className="flex justify-center mb-4 text-[#006FEE] dark:text-teal-400">
        {icon}
      </div>
      <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2 text-center">
        {value.toLocaleString()}+
      </div>
      <div className="text-[#006FEE] dark:text-teal-400 font-medium text-center">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
