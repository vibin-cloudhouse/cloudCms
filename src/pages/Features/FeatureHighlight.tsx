
import React from "react";
import { CheckCircle } from "lucide-react";

interface FeatureHighlightProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  title,
  description,
  image,
  reverse = false,
}) => {
  const benefits = [
    "Easy to implement",
    "Customizable options",
    "No code required",
    "Enterprise-ready",
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <div className="w-full lg:w-1/2">
            <img
              src={image}
              alt={title}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              {description}
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
