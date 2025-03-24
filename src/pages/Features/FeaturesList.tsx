
import React from "react";
import { 
  Shield, 
  Code, 
  Zap, 
  Users, 
  Database, 
  Monitor, 
  Lock, 
  Layers, 
  BookOpen, 
  Compass, 
  Activity, 
  Settings 
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "White Labeling",
    description: "Customize and rebrand CloudStick as your own product with complete white labeling options."
  },
  {
    icon: Code,
    title: "API Integration",
    description: "Seamlessly integrate with existing systems using our comprehensive API ecosystem."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Boost your application performance with our advanced optimization tools."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enhance teamwork with real-time collaboration features and shared workspaces."
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Efficiently manage and organize your data with our powerful database solutions."
  },
  {
    icon: Monitor,
    title: "Real-time Analytics",
    description: "Track user behavior and application performance with detailed analytics."
  },
  {
    icon: Lock,
    title: "Advanced Security",
    description: "Protect your data with enterprise-grade security and encryption protocols."
  },
  {
    icon: Layers,
    title: "Multi-environment Support",
    description: "Seamlessly deploy across development, staging, and production environments."
  },
  {
    icon: BookOpen,
    title: "Comprehensive Documentation",
    description: "Access detailed documentation, tutorials, and guides for all features."
  },
  {
    icon: Compass,
    title: "Guided Onboarding",
    description: "Get started quickly with personalized onboarding and setup assistance."
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Monitor the health and status of your applications in real-time."
  },
  {
    icon: Settings,
    title: "Custom Workflows",
    description: "Design and implement custom workflows tailored to your specific needs."
  }
];

const FeaturesList = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Everything You Need in One Platform
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 dark:border-slate-700"
            >
              <div className="bg-gradient-to-r from-teal-600 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
