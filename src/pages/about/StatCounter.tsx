
import React from "react";

interface StatCounterProps {
  value: number;
  label: string;
  icon: React.ReactNode;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, label, icon }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
        {value.toLocaleString()}
      </div>
      <div className="text-teal-600 dark:text-teal-400 font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
