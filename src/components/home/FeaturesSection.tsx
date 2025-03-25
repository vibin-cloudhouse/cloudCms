
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  BarChart, 
  Shield, 
  Terminal,
  Database,
  Settings
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const features = [
    {
      icon: Server,
      title: "Server Provisioning",
      description: "Deploy new servers in seconds with our one-click provisioning system across multiple cloud providers.",
      link: "/features/provisioning",
      delay: 0.2
    },
    {
      icon: BarChart,
      title: "Performance Monitoring",
      description: "Real-time metrics and analytics dashboard to monitor CPU, memory, disk usage, and network performance.",
      link: "/features/monitoring",
      delay: 0.3
    },
    {
      icon: Shield,
      title: "Security Management",
      description: "Manage firewall rules, access controls, and security patches from a centralized dashboard.",
      link: "/features/security",
      delay: 0.4
    },
    {
      icon: Terminal,
      title: "Remote Terminal",
      description: "Access your servers via secure web-based SSH terminal directly from CloudStick's dashboard.",
      link: "/features/terminal",
      delay: 0.5
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Create, configure, and optimize database instances with automated backups and scaling.",
      link: "/features/database",
      delay: 0.6
    },
    {
      icon: Settings,
      title: "Automated Scaling",
      description: "Set up auto-scaling rules based on load metrics to ensure your applications always have the resources they need.",
      link: "/features/scaling",
      delay: 0.7
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-slate-800 relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-50 to-white dark:from-slate-900 dark:to-slate-800"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-700 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/30 rounded-full">
              Powerful Features
            </span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            Complete Server Management Toolkit
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-300"
            variants={itemVariants}
          >
            CloudStick provides everything you need to manage your cloud infrastructure efficiently and securely.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              delay={feature.delay}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
