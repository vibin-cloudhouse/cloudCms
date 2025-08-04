
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  delay: number;
  isVisible: boolean;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  delay, 
  isVisible 
}: FeatureCardProps) => {
  return (
    <motion.div 
      className="feature-card dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:border-slate-600"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <Icon className="w-12 h-12 text-teal-600 dark:text-teal-400 mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>
      <Link to={link} className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-medium">
        Learn more <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </motion.div>
  );
};

export default FeatureCard;
