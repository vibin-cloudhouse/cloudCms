import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-cyan-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <motion.img
                  src="/hero-image.webp"
                  alt="CloudStick Interface"
                  className="rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
              <div className="md:order-1">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-6 gradient-heading"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Simplify Your Server Management
                </motion.h1>
                <motion.p
                  className="text-lg text-slate-600 dark:text-slate-400 mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  CloudStick offers an intuitive interface to manage your servers efficiently.
                  Deploy, monitor, and scale your applications with ease.
                </motion.p>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <Button className="gradient-btn">
                    Get Started Free <Sparkles className="ml-2 animate-custom-pulse" />
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
                Key Features
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Explore the powerful features that make CloudStick the ideal choice for
                managing your servers.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              ref={ref}
            >
              <motion.div
                className="feature-card animate-fade-up animate-delay-1"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-2">One-Click Deployments</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Deploy applications with a single click. Supports popular frameworks and
                  languages.
                </p>
              </motion.div>
              <motion.div
                className="feature-card animate-fade-up animate-delay-2"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Monitor your server's performance in real-time. Get alerts for unusual
                  activity.
                </p>
              </motion.div>
              <motion.div
                className="feature-card animate-fade-up animate-delay-3"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-2">Automated Backups</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Schedule automated backups to ensure your data is always safe and secure.
                </p>
              </motion.div>
              <motion.div
                className="feature-card animate-fade-up animate-delay-4"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Easily scale your server resources up or down based on your needs.
                </p>
              </motion.div>
              <motion.div
                className="feature-card animate-fade-up animate-delay-5"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Protect your servers with advanced security features, including firewalls and
                  intrusion detection.
                </p>
              </motion.div>
              <motion.div
                className="feature-card animate-fade-up animate-delay-1"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-2">Intuitive Control Panel</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Manage your servers with our easy-to-use control panel.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How CloudStick Works Section - Update the button link */}
        <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How CloudStick Works
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                CloudStick simplifies server management through our intuitive platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/cloudstick-dashboard.png"
                  alt="CloudStick Dashboard"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Effortless Server Management
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  CloudStick provides a streamlined approach to server management, allowing you
                  to focus on your business.
                </p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400">
                  <li>Easy server setup and configuration</li>
                  <li>One-click application deployments</li>
                  <li>Real-time monitoring and alerts</li>
                  <li>Automated backups and security updates</li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link to="/migration">
                <Button className="gradient-btn">
                  Request Free Migration
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
                What Our Users Say
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Read what our users are saying about their experience with CloudStick.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-2xl">
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  "CloudStick has transformed the way we manage our servers. The intuitive
                  interface and powerful features have saved us countless hours."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/9.jpg"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      CEO, Company XYZ
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  "The one-click deployments and real-time monitoring features have made
                  managing our applications a breeze. CloudStick is a game-changer!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/7.jpg"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Jane Smith</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      CTO, Tech Solutions
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  "CloudStick's automated backups and advanced security features have given us
                  peace of mind. We highly recommend it to anyone looking for a reliable server
                  management solution."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Mike Johnson</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      IT Manager, Global Corp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
