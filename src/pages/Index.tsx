
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Shuffle, 
  Share2, 
  CloudOff, 
  Lock, 
  Globe, 
  Zap, 
  HardDrive, 
  ArrowRight, 
  CheckCircle 
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 z-[-1]"></div>
        <div className="gradient-blob w-96 h-96 top-20 right-0"></div>
        <div className="gradient-blob w-96 h-96 bottom-20 left-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Secure Cloud Storage <br />
              <span className="gradient-heading">
                For Your Peace of Mind
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Access, share, and protect your files from anywhere with military-grade encryption 
              and seamless synchronization across all your devices.
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
                <Button variant="outline" className="text-lg px-8 py-6 rounded-xl">
                  See All Features
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 md:mt-24 relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="glass-card relative z-10 shadow-2xl overflow-hidden rounded-2xl border border-white/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 to-white/30 backdrop-blur-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="CloudStick Dashboard" 
                className="w-full h-auto relative z-20 rounded-lg transform hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-300 rounded-full filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-300 rounded-full filter blur-xl opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white relative" ref={sectionRef}>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-700 bg-blue-50 rounded-full">
                Powerful Features
              </span>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6"
              variants={itemVariants}
            >
              Everything You Need for Secure File Management
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              variants={itemVariants}
            >
              CloudStick combines the best security practices with intuitive design to give you a seamless experience.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Military-Grade Encryption</h3>
              <p className="text-slate-600 mb-4">
                Your files are protected with AES-256 encryption, the same standard used by governments to secure classified information.
              </p>
              <Link to="/features/security" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Shuffle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Seamless Synchronization</h3>
              <p className="text-slate-600 mb-4">
                Automatically sync your files across all your devices. Work on a file on your laptop and continue on your mobile device.
              </p>
              <Link to="/features/sync" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Share2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Secure File Sharing</h3>
              <p className="text-slate-600 mb-4">
                Share files with custom permissions, password protection, and expiration dates. Control who sees your data.
              </p>
              <Link to="/features/sharing" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CloudOff className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Offline Access</h3>
              <p className="text-slate-600 mb-4">
                Access your important files even without an internet connection. CloudStick keeps your selected files available offline.
              </p>
              <Link to="/features/offline" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Lock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Zero-Knowledge Privacy</h3>
              <p className="text-slate-600 mb-4">
                We can't read your files or see your passwords. Your privacy is guaranteed through zero-knowledge architecture.
              </p>
              <Link to="/features/privacy" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Cross-Platform Support</h3>
              <p className="text-slate-600 mb-4">
                CloudStick works seamlessly on Windows, macOS, Linux, iOS, and Android. Your files, everywhere you need them.
              </p>
              <Link to="/download" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
                Download apps <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-700 bg-blue-50 rounded-full">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              How CloudStick Works
            </h2>
            <p className="text-lg text-slate-600">
              Securing your files has never been easier. Get started in minutes with our intuitive platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            <div className="glass-card p-8 relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Create Your Account</h3>
              <p className="text-slate-600">
                Sign up in seconds with just your email. No credit card required for our free plan.
              </p>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                <ArrowRight className="w-8 h-8 text-blue-300" />
              </div>
              <div className="absolute -bottom-1 left-10 right-10 h-4 bg-white blur-xl opacity-80"></div>
            </div>
            
            <div className="glass-card p-8 relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Upload Your Files</h3>
              <p className="text-slate-600">
                Drag and drop your files into CloudStick. They're automatically encrypted and secured.
              </p>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                <ArrowRight className="w-8 h-8 text-blue-300" />
              </div>
              <div className="absolute -bottom-1 left-10 right-10 h-4 bg-white blur-xl opacity-80"></div>
            </div>
            
            <div className="glass-card p-8 relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Access Anywhere</h3>
              <p className="text-slate-600">
                Your files sync across all your devices. Access, edit, and share them from anywhere.
              </p>
              <div className="absolute -bottom-1 left-10 right-10 h-4 bg-white blur-xl opacity-80"></div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/signup">
              <Button className="gradient-btn">
                Start Securing Your Files
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Plans & Pricing Section Preview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-700 bg-blue-50 rounded-full">
              Flexible Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Choose the Perfect Plan for Your Needs
            </h2>
            <p className="text-lg text-slate-600">
              Whether you're an individual or a large enterprise, we have a plan that fits your requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pricing-card animate-float">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-slate-500">Basic</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900">Free</span>
                  <span className="ml-2 text-slate-500">forever</span>
                </div>
                <p className="mt-4 text-slate-600">
                  Perfect for individual users looking to store and share basic files.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">5 GB storage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">End-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">3 devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Basic file sharing</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/signup" className="block w-full">
                  <Button variant="outline" className="w-full rounded-xl">
                    Sign Up Free
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="pricing-card featured animate-float" style={{animationDelay: "0.2s"}}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-blue-700">Pro</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900">$9.99</span>
                  <span className="ml-2 text-slate-500">/month</span>
                </div>
                <p className="mt-4 text-slate-600">
                  For professionals who need advanced security and more storage.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">1 TB storage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Advanced encryption</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Unlimited devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Advanced sharing & controls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">30-day version history</span>
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
            
            <div className="pricing-card animate-float" style={{animationDelay: "0.4s"}}>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-slate-500">Business</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900">$24.99</span>
                  <span className="ml-2 text-slate-500">/user/month</span>
                </div>
                <p className="mt-4 text-slate-600">
                  For teams and businesses with advanced security needs.
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">5 TB storage per user</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Enterprise-grade security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Admin console & controls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Advanced compliance features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                  <span className="text-slate-700">Unlimited version history</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/contact" className="block w-full">
                  <Button variant="outline" className="w-full rounded-xl">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/pricing" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
              See all pricing details <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-700 bg-blue-50 rounded-full">
              Trusted by Thousands
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-600">
              Hear from our satisfied users about how CloudStick has transformed their file security and management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="Sarah L." 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Sarah L.</h4>
                  <p className="text-sm text-slate-500">Freelance Designer</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "CloudStick has been a game-changer for my design business. I can securely share large files with clients without worrying about security breaches. The interface is so intuitive!"
              </p>
              <div className="flex text-blue-500">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Michael T." 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Michael T.</h4>
                  <p className="text-sm text-slate-500">IT Manager</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "We've deployed CloudStick across our entire organization. The admin controls are impressive, and the security features help us maintain compliance with industry regulations."
              </p>
              <div className="flex text-blue-500">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Jessica K." 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Jessica K.</h4>
                  <p className="text-sm text-slate-500">Small Business Owner</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "As someone who manages sensitive client information, CloudStick gives me peace of mind. The interface is beautiful, and the cross-platform support means I can work from anywhere."
              </p>
              <div className="flex text-blue-500">
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
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Join Thousands of Satisfied CloudStick Users Today
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Start securing your files now with our 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button className="bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 px-8 py-3 text-lg font-medium rounded-xl transition-colors shadow-lg">
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
