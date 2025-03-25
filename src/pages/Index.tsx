import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Server, 
  BarChart, 
  Cloud, 
  Lock, 
  Globe, 
  Cpu, 
  HardDrive, 
  ArrowRight, 
  CheckCircle,
  Database,
  Terminal,
  MonitorCheck,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
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

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
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
              <Link to="/signup">
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
                <Server className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                <span>Multi-Cloud Support</span>
              </div>
              <div className="flex items-center">
                <MonitorCheck className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                <span>Advanced Security</span>
              </div>
              <div className="flex items-center">
                <Terminal className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                <span>Command Line Tools</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
            <motion.div 
              className="feature-card dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:border-slate-600"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Server className="w-12 h-12 text-teal-600 dark:text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Server Provisioning</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Deploy new servers in seconds with our one-click provisioning system across multiple cloud providers.
              </p>
              <Link to="/features/provisioning" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="feature-card dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:border-slate-600"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <BarChart className="w-12 h-12 text-teal-600 dark:text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Performance Monitoring</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Real-time metrics and analytics dashboard to monitor CPU, memory, disk usage, and network performance.
              </p>
              <Link to="/features/monitoring" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="feature-card dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:border-slate-600"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Shield className="w-12 h-12 text-teal-600 dark:text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Security Management</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Manage firewall rules, access controls, and security patches from a centralized dashboard.
              </p>
              <Link to="/features/security" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="feature-card dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:border-slate-600"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Terminal className="w-12 h-12 text-teal-600 dark:text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Remote Terminal</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Access your servers via secure web-based SSH terminal directly from CloudStick's dashboard.
              </p>
              <Link to="/features/terminal" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="feature-card dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:border-slate-600"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Database className="w-12 h-12 text-teal-600 dark:text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Database Management</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Create, configure, and optimize database instances with automated backups and scaling.
              </p>
              <Link to="/features/database" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="feature-card dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:border-slate-600"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Settings className="w-12 h-12 text-teal-600 dark:text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Automated Scaling</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Set up auto-scaling rules based on load metrics to ensure your applications always have the resources they need.
              </p>
              <Link to="/features/scaling" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-700 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/30 rounded-full">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
              How CloudStick Works
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Managing your cloud infrastructure has never been easier. Get started in minutes with our intuitive platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            <div className="glass-card p-8 relative dark:bg-slate-800/50 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Connect Your Cloud</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Link your AWS, Google Cloud, Azure, or DigitalOcean accounts in just a few clicks.
              </p>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                <ArrowRight className="w-8 h-8 text-teal-300 dark:text-teal-600" />
              </div>
              <div className="absolute -bottom-1 left-10 right-10 h-4 bg-white blur-xl opacity-80 dark:bg-slate-800 dark:opacity-50"></div>
            </div>
            
            <div className="glass-card p-8 relative dark:bg-slate-800/50 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Manage Your Servers</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Control all your servers from a unified dashboard with powerful management tools.
              </p>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                <ArrowRight className="w-8 h-8 text-teal-300 dark:text-teal-600" />
              </div>
              <div className="absolute -bottom-1 left-10 right-10 h-4 bg-white blur-xl opacity-80 dark:bg-slate-800 dark:opacity-50"></div>
            </div>
            
            <div className="glass-card p-8 relative dark:bg-slate-800/50 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Scale & Optimize</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Monitor performance metrics and scale resources automatically based on demand.
              </p>
              <div className="absolute -bottom-1 left-10 right-10 h-4 bg-white blur-xl opacity-80 dark:bg-slate-800 dark:opacity-50"></div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/signup">
              <Button className="gradient-btn">
                Request Free Migration
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Plans & Pricing Section Preview */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-700 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/30 rounded-full">
              Flexible Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Choose the Perfect Plan for Your Infrastructure
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              From startups to enterprises, we have tailored options to meet your server management needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <div className="pricing-card animate-float dark:bg-slate-700 dark:border-slate-600">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-slate-500 dark:text-slate-300">Free</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">$0</span>
                  <span className="ml-2 text-slate-500 dark:text-slate-400">/forever</span>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  Perfect for individuals and small personal projects.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Up to 3 servers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Basic monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Email support</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/signup" className="block w-full">
                  <Button variant="outline" className="w-full rounded-xl dark:border-teal-800 dark:text-teal-400 dark:hover:bg-teal-900/30">
                    Sign Up Free
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Basic Plan */}
            <div className="pricing-card animate-float dark:bg-slate-700 dark:border-slate-600" style={{animationDelay: "0.1s"}}>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-slate-500 dark:text-slate-300">Basic</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">$19.99</span>
                  <span className="ml-2 text-slate-500 dark:text-slate-400">/month</span>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  For startups and growing projects with more needs.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Up to 10 servers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Standard monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Web SSH terminal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Priority email support</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/signup" className="block w-full">
                  <Button variant="outline" className="w-full rounded-xl dark:border-teal-800 dark:text-teal-400 dark:hover:bg-teal-900/30">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="pricing-card featured animate-float dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:border-teal-900" style={{animationDelay: "0.2s"}}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-teal-700 dark:text-teal-400">Pro</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">$49.99</span>
                  <span className="ml-2 text-slate-500 dark:text-slate-400">/month</span>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  For growing businesses with multiple servers and advanced needs.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Up to 25 servers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Advanced monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Auto-scaling rules</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Database management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">API access</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/signup" className="block w-full">
                  <Button className="w-full gradient-btn">
                    Start Pro Trial
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Business Plan */}
            <div className="pricing-card animate-float dark:bg-slate-700 dark:border-slate-600" style={{animationDelay: "0.4s"}}>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-slate-500 dark:text-slate-300">Business</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">$99.99</span>
                  <span className="ml-2 text-slate-500 dark:text-slate-400">/month</span>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  For organizations with large-scale infrastructure requirements.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Unlimited servers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Enterprise security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">SLA guarantees</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/contact" className="block w-full">
                  <Button variant="outline" className="w-full rounded-xl dark:border-teal-800 dark:text-teal-400 dark:hover:bg-teal-900/30">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/pricing" className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium inline-flex items-center">
              View full pricing details and comparison <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-700 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/30 rounded-full">
              Trusted by DevOps Teams
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Hear from our satisfied users about how CloudStick has transformed their server management experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 dark:bg-slate-800/50 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="Sarah L." 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Sarah L.</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">DevOps Engineer</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                "CloudStick has dramatically reduced the time we spend on server management. The automated scaling features have saved us countless hours of manual intervention."
              </p>
              <div className="flex text-teal-500 dark:text-teal-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
            
            <div className="glass-card p-8 dark:bg-slate-800/50 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Michael T." 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Michael T.</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">CTO</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                "We've deployed CloudStick across our multi-cloud environment. The unified dashboard gives us perfect visibility into our infrastructure and has improved our team's efficiency."
              </p>
              <div className="flex text-teal-500 dark:text-teal-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
            
            <div className="glass-card p-8 dark:bg-slate-800/50 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Jessica K." 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Jessica K.</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">System Administrator</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                "The monitoring capabilities in CloudStick have helped us identify and resolve performance issues before they impact our users. The alerting system is top-notch."
              </p>
              <div className="flex text-teal-500 dark:text-teal-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-teal-600 to-cyan-700 dark:from-teal-800 dark:to-cyan-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 dark:bg-cyan-700 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-800 dark:bg-teal-900 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Take Control of Your Cloud Infrastructure Today
            </h2>
            <p className="text-lg text-teal-100 mb-8">
              Start managing your servers efficiently with our 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button className="bg-white hover:bg-teal-50 text-teal-700 hover:text-teal-800 px-8 py-3 text-lg font-medium rounded-xl transition-colors shadow-lg">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-xl transition-colors">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

