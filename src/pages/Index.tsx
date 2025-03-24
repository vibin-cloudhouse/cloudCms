import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Server, 
  Shield, 
  Database, 
  Monitor, 
  Settings, 
  Cloud,
  HardDriveDownload,
  Network,
  Cpu,
  PowerSquare,
  Terminal,
  Gauge
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-950 z-[-1]"></div>
        <div className="gradient-blob w-96 h-96 top-20 right-0 opacity-10"></div>
        <div className="gradient-blob w-96 h-96 bottom-20 left-0 opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Powerful Server Management <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Made Simple
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Monitor, manage, and optimize your cloud infrastructure with enterprise-grade tools and real-time analytics.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/signup">
                <Button className="gradient-btn text-lg px-8 py-6">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" className="text-lg px-8 py-6 rounded-xl border-blue-700 text-white hover:bg-blue-900/50">
                  Request Demo
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center">
                <Monitor className="w-5 h-5 text-blue-400 mr-2" />
                <span>Real-time Monitoring</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-blue-400 mr-2" />
                <span>Advanced Security</span>
              </div>
              <div className="flex items-center">
                <Terminal className="w-5 h-5 text-blue-400 mr-2" />
                <span>Command Center</span>
              </div>
              <div className="flex items-center">
                <Gauge className="w-5 h-5 text-blue-400 mr-2" />
                <span>Performance Analytics</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
              variants={itemVariants}
            >
              Complete Server Management Solution
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-300"
              variants={itemVariants}
            >
              Everything you need to manage and optimize your cloud infrastructure in one platform.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="glass-card bg-slate-800/50 border-slate-700"
              variants={itemVariants}
            >
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Server Monitoring</h3>
              <p className="text-slate-300 mb-4">
                Real-time monitoring of server health, resources, and performance metrics with automated alerts.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card bg-slate-800/50 border-slate-700"
              variants={itemVariants}
            >
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Database Management</h3>
              <p className="text-slate-300 mb-4">
                Streamlined database operations, backups, and performance optimization tools.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card bg-slate-800/50 border-slate-700"
              variants={itemVariants}
            >
              <Network className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Network Analytics</h3>
              <p className="text-slate-300 mb-4">
                Comprehensive network monitoring, traffic analysis, and bandwidth optimization.
              </p>
            </motion.div>

            <motion.div 
              className="glass-card bg-slate-800/50 border-slate-700"
              variants={itemVariants}
            >
              <PowerSquare className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Power Management</h3>
              <p className="text-slate-300 mb-4">
                Efficient power consumption monitoring and automation for cost optimization.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card bg-slate-800/50 border-slate-700"
              variants={itemVariants}
            >
              <Settings className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Server Configuration</h3>
              <p className="text-slate-300 mb-4">
                Easy-to-use interface for server setup, maintenance, and configuration management.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card bg-slate-800/50 border-slate-700"
              variants={itemVariants}
            >
              <Cpu className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Resource Allocation</h3>
              <p className="text-slate-300 mb-4">
                Smart resource distribution and scaling based on workload demands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Get Started in Minutes
            </h2>
            <p className="text-lg text-slate-300">
              Simple setup process to start managing your servers effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            <div className="glass-card bg-slate-800/50 border-slate-700 relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-xl font-semibold text-white mb-3">Connect Your Servers</h3>
              <p className="text-slate-300">
                Add your servers with our secure connection protocol. Support for all major cloud providers.
              </p>
            </div>
            
            <div className="glass-card bg-slate-800/50 border-slate-700 relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-xl font-semibold text-white mb-3">Configure Monitoring</h3>
              <p className="text-slate-300">
                Set up monitoring parameters and alerts according to your needs.
              </p>
            </div>
            
            <div className="glass-card bg-slate-800/50 border-slate-700 relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-xl font-semibold text-white mb-3">Manage & Optimize</h3>
              <p className="text-slate-300">
                Start managing your infrastructure with our comprehensive dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section Preview */}
      <section className="py-20 md:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Plans for Every Scale
            </h2>
            <p className="text-lg text-slate-300">
              Choose the right plan for your infrastructure needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pricing-card bg-slate-800/50 border-slate-700 text-white">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-slate-300">Starter</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-white">$49</span>
                  <span className="ml-2 text-slate-400">/month</span>
                </div>
                <p className="mt-4 text-slate-300">
                  Perfect for small infrastructure deployments.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <Cloud className="w-5 h-5 text-blue-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-300">Up to 10 servers</span>
                </li>
                <li className="flex items-start">
                  <Monitor className="w-5 h-5 text-blue-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-300">Basic monitoring</span>
                </li>
                <li className="flex items-start">
                  <Terminal className="w-5 h-5 text-blue-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-300">Command line access</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/signup" className="block w-full">
                  <Button variant="outline" className="w-full rounded-xl border-blue-700 text-white hover:bg-blue-900/50">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="pricing-card featured bg-gradient-to-b from-slate-800 to-blue-900/50 border-blue-700 text-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-blue-400">Professional</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="ml-2 text-slate-400">/month</span>
                </div>
                <p className="mt-4 text-slate-300">
                  Ideal for growing businesses with multiple servers.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <Cloud className="w-5 h-5 text-blue-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-300">Up to 50 servers</span>
                </li>
                <li className="flex items-start">
                  <Monitor className="w-5 h-5 text-blue-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-300">Advanced monitoring</span>
                </li>
                <li className="flex items-start">
                  <Terminal className="w-5 h-5 text-blue-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-300">Full access to all features</span>
                </li>
                <li className="flex items-start">
                  <Settings className="w-5 h-5 text-blue-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-300">Priority support</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/signup" className="block w-full">
                  <Button className="w-full gradient-btn">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="pricing-card bg-slate-800/50 border-slate-700 text-white">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-slate-300">Enterprise</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-white">Custom</span>
                </div>
                <p className="mt-4 text-slate-300">
                  For large organizations with complex infrastructure.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <Cloud className="w-5 h-5 text-blue-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-300">Unlimited servers</span>
                </li>
                <li className="flex items-start">
                  <Monitor className="w-5 h-5 text-blue-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-300">Custom monitoring solutions</span>
                </li>
                <li className="flex items-start">
                  <Terminal className="w-5 h-5 text-blue-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-300">Dedicated support team</span>
                </li>
                <li className="flex items-start">
                  <Settings className="w-5 h-5 text-blue-400 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-300">Custom integrations</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/contact" className="block w-full">
                  <Button variant="outline" className="w-full rounded-xl border-blue-700 text-white hover:bg-blue-900/50">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Start Managing Your Servers Better Today
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Try CloudStick free for 14 days. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button className="bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 px-8 py-3 text-lg font-medium rounded-xl transition-colors shadow-lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-xl transition-colors">
                  Schedule Demo
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
