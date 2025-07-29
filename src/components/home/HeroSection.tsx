
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Server, 
  Lock, 
  Terminal,
  MonitorCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 to-teal-50/80 dark:from-slate-900/90 dark:to-slate-800/90 z-[-1] transition-colors duration-300"></div>
      <div className="gradient-blob w-[40rem] h-[40rem] top-[-10rem] right-[-10rem] opacity-40"></div>
      <div className="gradient-blob w-[30rem] h-[30rem] bottom-[-5rem] left-[-5rem] opacity-30"></div>
      <div className="gradient-glow w-[60rem] h-[60rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Powerful Cloud Server <br />
            <span className="gradient-heading dark:text-teal-400">
              Management Platform
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Deploy, monitor, and scale your cloud infrastructure with ease. 
            Take control of your servers with our powerful management dashboard.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="https://dash.cloudstick.io/register">
              <Button className="gradient-btn text-lg px-8 py-6">
                Get Started Free
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" className="text-lg px-8 py-6 rounded-xl border-teal-200 text-teal-700 dark:border-teal-800 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30">
                View Dashboard Demo
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center">
              <Server className="w-5 h-5 text-[#006FEE] dark:text-teal-400 mr-2" />
              <span>Multi-Cloud Support</span>
            </div>
            <div className="flex items-center">
              <MonitorCheck className="w-5 h-5 text-[#006FEE] dark:text-teal-400 mr-2" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center">
              <Lock className="w-5 h-5 text-[#006FEE] dark:text-teal-400 mr-2" />
              <span>Advanced Security</span>
            </div>
            <div className="flex items-center">
              <Terminal className="w-5 h-5 text-[#006FEE] dark:text-teal-400 mr-2" />
              <span>Command Line Tools</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
