
import React from "react";
import StatCounter from "./StatCounter";
import { Database, Server, AppWindow, Globe } from "lucide-react";

interface StatCounterData {
  value: number;
  label: string;
  icon: React.ReactNode;
}

const statCounters: StatCounterData[] = [
  {
    value: 5782,
    label: "Servers Connected",
    icon: <Server className="h-8 w-8 text-teal-600" />
  },
  {
    value: 3149,
    label: "Databases Managed",
    icon: <Database className="h-8 w-8 text-teal-600" />
  },
  {
    value: 8634,
    label: "Applications Secured",
    icon: <AppWindow className="h-8 w-8 text-teal-600" />
  },
  {
    value: 2957,
    label: "Domains Protected",
    icon: <Globe className="h-8 w-8 text-teal-600" />
  }
];

const StatsSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statCounters.map((stat, index) => (
          <StatCounter 
            key={index}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
