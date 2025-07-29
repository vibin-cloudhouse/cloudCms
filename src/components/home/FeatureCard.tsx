import { motion } from "framer-motion";

interface FeatureCardProps {
  iconUrl: string;
  title: string;
  description: string;
  link: string;
  delay: number;
  isVisible: boolean;
 }

const FeatureCard = ({
  iconUrl,
  title,
  description,
  link,
  delay,
  isVisible,
}: FeatureCardProps) => {
  return (
    <div
      className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"
    >
      <img
        src={iconUrl}
        alt={title}
        className="w-10 h-10 mb-4 object-contain"
      />
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
        {description}
      </p>
      <a href={link} className="text-[#006FEE] font-medium">
        Learn more →
      </a>
    </div>
  );
};

export default FeatureCard;
