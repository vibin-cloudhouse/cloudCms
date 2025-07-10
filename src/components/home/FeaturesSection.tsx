// FeaturesSection.tsx
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion"; // Not used in this simplified version, can be removed if not needed for other animations
import FeatureCard from "./FeatureCard";

interface Feature {
  id: number;
  title: string;
  description: string;
  linkText?: string;
  linkurl?: string;
  icon: {
    url: string;
  };
}

interface SectionData {
  sectionLabel: string;
  mainHeading: string;
  description: string;
  features: Feature[];
}

interface FeaturesSectionProps {
  sectionData: SectionData; // Now accepting sectionData as a prop
}

const FeaturesSection = ({ sectionData }: FeaturesSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Removed data fetching logic from here

  // No loading or error state handling here, as it's done in the container
  // No "No features available" message here, as it's handled in the container

  return (
    <section
      className="py-20 md:py-32 bg-white dark:bg-slate-800 relative"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 w-full h-32 "></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-700 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/30 rounded-full">
              {sectionData.sectionLabel}
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6"
          >
            {sectionData.mainHeading}
          </h2>
          <p
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            {sectionData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectionData.features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              iconUrl={feature.icon.url}
              title={feature.title}
              description={feature.description}
              link={feature.linkurl}
              delay={0.3 + index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;