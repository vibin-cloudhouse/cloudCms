
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant?: "default" | "outline" | "gradient";
  isFeatured?: boolean;
  animationDelay?: string;
}

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant = "outline",
  isFeatured = false,
  animationDelay
}: PricingCardProps) => {
  const cardClass = isFeatured
    ? "pricing-card featured animate-float dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:border-teal-900"
    : "pricing-card animate-float dark:bg-slate-700 dark:border-slate-600";

  return (
    <div className={cardClass} style={animationDelay ? { animationDelay } : undefined}>
      {isFeatured && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      <div className="mb-4">
        <h3 className={`text-lg font-medium ${isFeatured ? 'text-teal-700 dark:text-teal-400' : 'text-slate-500 dark:text-slate-300'}`}>
          {name}
        </h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-4xl font-bold text-slate-900 dark:text-white">{price}</span>
          <span className="ml-2 text-slate-500 dark:text-slate-400">{period}</span>
        </div>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
            <span className="text-slate-700 dark:text-slate-300">{feature.text}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link to="/signup" className="block w-full">
          {buttonVariant === "gradient" ? (
            <Button className="w-full gradient-btn">
              {buttonText}
            </Button>
          ) : (
            <Button variant="outline" className="w-full rounded-xl dark:border-teal-800 dark:text-teal-400 dark:hover:bg-teal-900/30">
              {buttonText}
            </Button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
