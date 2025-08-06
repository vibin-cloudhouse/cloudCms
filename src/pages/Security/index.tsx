import { useState, useEffect } from "react";
import { Shield, Lock, Server, AlertTriangle, Globe, Network, CheckCircle, ArrowRight, Eye, Zap, Star, Play, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Security = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Anti-Bruteforce Shield",
      description: "Advanced protection against brute force attacks with intelligent blocking",
      details: "Real-time monitoring with automatic IP blocking after failed attempts",
      color: "from-red-500 to-orange-500",
      percentage: 99.9,
      status: "Active",
      threats: "247 blocked today"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Country-Specific Blocking",
      description: "Block entire countries with intelligent geolocation filtering",
      details: "Advanced geofencing technology with customizable country restrictions",
      color: "from-blue-500 to-cyan-500",
      percentage: 99.5,
      status: "Active",
      threats: "15 countries blocked"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Smart Port Management",
      description: "Intelligent port configuration with automated rule management",
      details: "Dynamic port allocation with security-first configuration",
      color: "from-green-500 to-emerald-500",
      percentage: 98.7,
      status: "Configured",
      threats: "22 ports secured"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "IP Whitelist/Blacklist",
      description: "Granular IP access control with smart filtering capabilities",
      details: "Advanced IP management with automatic threat intelligence integration",
      color: "from-purple-500 to-violet-500",
      percentage: 99.2,
      status: "Active",
      threats: "156 IPs blocked"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with instant threat alerts",
      details: "Continuous surveillance with automated incident response",
      color: "from-indigo-500 to-blue-500",
      percentage: 99.8,
      status: "Monitoring",
      threats: "All systems green"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Firewall Rule Engine",
      description: "Advanced firewall with custom rule creation and management",
      details: "Intelligent rule processing with automated policy enforcement",
      color: "from-teal-500 to-cyan-500",
      percentage: 97.5,
      status: "Active",
      threats: "34 rules active"
    }
  ];

  const securityStats = [
    { label: "Threats Blocked Daily", value: "2.5M+", icon: <Shield className="w-6 h-6" /> },
    { label: "Security Incidents Prevented", value: "99.99%", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Response Time", value: "<1ms", icon: <Zap className="w-6 h-6" /> },
    { label: "Global Servers Protected", value: "50K+", icon: <Server className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop&crop=face",
      content: "The AI-powered threat detection has saved us countless hours and prevented major security incidents.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Security Director, DataFlow",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Zero-trust architecture implementation was seamless. Our security posture improved dramatically.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "DevOps Lead, CloudScale",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The autonomous security orchestration is like having a 24/7 security team that never sleeps.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
       <div className="gradient-blob w-96 h-96 -top-20 -right-20 opacity-10"></div>
      <div className="gradient-blob w-72 h-72 -bottom-10 -left-10 opacity-20"></div>
      {/* Hero Section with Animated Background */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl 2xl:my-[200px] my-2 mx-auto text-center">
            <div className="flex items-center justify-center w-full">
              <div className="mb-6 w-[300px] flex items-center justify-center rounded-full font-semibold px-6 py-2 text-sm hover:bg-teal-400/10 text-black dark:text-white/60 border-white/20 animate-fade-in">
              <Shield className="w-5 h-5 mr-2" />
              Next-Generation Security
            </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl py-4 font-bold text-black dark:text-white mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Security That
              <span className="block pt-4 gradient-heading text-transparent">
                Thinks Ahead
              </span>
            </h1>
            <p className="text-xl md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Experience quantum-ready security with AI-powered threat detection, zero-trust architecture, and autonomous protection that evolves with emerging threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 px-8 py-4 text-lg group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
              <Button variant="outline" size="lg" className="border-teal-700/30 text-teal-500 border-teal-500 bg-teal-50 hover:text-white px-8 py-4 text-lg">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Security Stats */}
      <section className="py-16 bg-white dark:bg-slate-950 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {securityStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {visibleStats ? stat.value : "0"}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Security Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Advanced Security</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Revolutionary Security Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Next-generation security technology that adapts, learns, and protects your infrastructure with unprecedented intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Feature Cards */}
            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 ${
                    activeFeature === index 
                      ? 'border-primary shadow-2xl scale-105 bg-gradient-to-r from-white to-blue-50 dark:from-slate-800 dark:to-blue-950' 
                      : 'border-gray-200 dark:border-slate-700 hover:border-primary/50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{feature.description}</p>
                        <div className="flex items-center gap-3 mb-2">
                          <Progress value={feature.percentage} className="flex-1 h-2" />
                          <span className="text-sm font-semibold text-primary">{feature.percentage}%</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{feature.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Security Dashboard Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${securityFeatures[activeFeature].color} rounded-xl flex items-center justify-center`}>
                        {securityFeatures[activeFeature].icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{securityFeatures[activeFeature].title}</h3>
                        <p className="text-blue-200 text-sm">{securityFeatures[activeFeature].status}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{securityFeatures[activeFeature].percentage}%</div>
                      <div className="text-xs text-blue-200">Efficiency</div>
                    </div>
                  </div>
                  
                  {/* Real-time Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-sm text-blue-200 mb-1">Today's Activity</div>
                      <div className="text-lg font-bold text-cyan-400">{securityFeatures[activeFeature].threats}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-sm text-blue-200 mb-1">Response Time</div>
                      <div className="text-lg font-bold text-green-400">&lt; 50ms</div>
                    </div>
                  </div>

                  {/* Activity Log */}
                  <div className="bg-white/5 rounded-xl p-4 mb-6">
                    <div className="text-sm font-semibold text-blue-200 mb-3">Recent Activity</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-300">Blocked suspicious IP: 192.168.1.***</span>
                        <span className="text-blue-300 ml-auto">2m ago</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-yellow-300">Updated firewall rules</span>
                        <span className="text-blue-300 ml-auto">5m ago</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-blue-300">System scan completed</span>
                        <span className="text-blue-300 ml-auto">12m ago</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{securityFeatures[activeFeature].percentage}%</div>
                      <div className="text-xs text-blue-200">Protection</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">0</div>
                      <div className="text-xs text-blue-200">Breaches</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">24/7</div>
                      <div className="text-xs text-blue-200">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Customer Success
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how industry leaders are transforming their security posture with our next-generation platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              Join 50,000+ Protected Servers
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Experience
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Next-Gen Security?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Join thousands of companies that trust our AI-powered security platform to protect their most critical infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 bg-white/10 hover:bg-white/10 px-8 py-4 text-lg">
                <Eye className="mr-2 w-5 h-5" />
                Live Demo
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-6">No credit card required • Enterprise support included</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;