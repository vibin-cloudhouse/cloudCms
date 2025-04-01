
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const RunCloudComparison = () => {
  const comparisonPoints = [
    {
      feature: "Server Management",
      cloudstick: "Comprehensive server management with automated backups and scaling",
      runcloud: "Web server management focused on PHP applications",
      cloudstickBetter: true
    },
    {
      feature: "Pricing Model",
      cloudstick: "Flexible usage-based pricing with generous free tier",
      runcloud: "Subscription-based with tiered plans",
      cloudstickBetter: true
    },
    {
      feature: "Application Support",
      cloudstick: "Support for all major web applications and frameworks",
      runcloud: "Strong PHP and WordPress focus",
      cloudstickBetter: true
    },
    {
      feature: "User Interface",
      cloudstick: "Modern, intuitive dashboard with advanced visualization",
      runcloud: "Functional dashboard focused on server operations",
      cloudstickBetter: true
    },
    {
      feature: "Deployment Pipeline",
      cloudstick: "Integrated CI/CD with Git workflows",
      runcloud: "Git deployment with manual configurations",
      cloudstickBetter: true
    },
    {
      feature: "Security Features",
      cloudstick: "Enterprise-grade security with compliance certifications",
      runcloud: "Standard security features with SSL management",
      cloudstickBetter: true
    },
    {
      feature: "PHP Optimization",
      cloudstick: "Standard PHP optimization",
      runcloud: "Advanced PHP-specific optimizations and configurations",
      cloudstickBetter: false
    },
    {
      feature: "WordPress Focus",
      cloudstick: "General WordPress support",
      runcloud: "Specialized WordPress tools and optimizations",
      cloudstickBetter: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-2 mb-4">
                <Link to="/" className="text-slate-500 hover:text-teal-600 transition-colors">Home</Link>
                <span className="text-slate-400">/</span>
                <Link to="/alternatives" className="text-slate-500 hover:text-teal-600 transition-colors">Alternatives</Link>
                <span className="text-slate-400">/</span>
                <span className="text-slate-700 dark:text-slate-300">RunCloud</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                CloudStick vs. <span className="text-blue-600">RunCloud</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8">
                Comparing CloudStick with RunCloud - see how our cloud management solution stacks up against this popular alternative.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white">
                  Try CloudStick Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <a href="https://runcloud.io" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="flex items-center">
                    Visit RunCloud
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Comparison Table */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Feature Comparison
            </h2>
            
            <Card className="overflow-hidden border-slate-200 dark:border-slate-700 shadow-md max-w-5xl mx-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold">Feature</TableHead>
                    <TableHead className="w-1/3 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold text-center">CloudStick</TableHead>
                    <TableHead className="w-1/3 bg-blue-600 text-white font-semibold text-center">RunCloud</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonPoints.map((point, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-white dark:bg-slate-900" : "bg-slate-50 dark:bg-slate-800/50"}>
                      <TableCell className="font-medium text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">
                        {point.feature}
                      </TableCell>
                      <TableCell className={`border-b border-slate-200 dark:border-slate-700 ${point.cloudstickBetter ? "bg-teal-50 dark:bg-teal-950/20" : ""}`}>
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 rounded-full p-1 ${point.cloudstickBetter ? "bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400" : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"}`}>
                            <CheckIcon className="h-4 w-4" />
                          </div>
                          <span className={`text-sm ${point.cloudstickBetter ? "text-slate-900 dark:text-white font-medium" : "text-slate-600 dark:text-slate-400"}`}>
                            {point.cloudstick}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className={`border-b border-slate-200 dark:border-slate-700 ${!point.cloudstickBetter ? "bg-blue-50 dark:bg-blue-950/20" : ""}`}>
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 rounded-full p-1 ${!point.cloudstickBetter ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400" : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"}`}>
                            <CheckIcon className="h-4 w-4" />
                          </div>
                          <span className={`text-sm ${!point.cloudstickBetter ? "text-slate-900 dark:text-white font-medium" : "text-slate-600 dark:text-slate-400"}`}>
                            {point.runcloud}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
            
            <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
              <p>Feature comparison based on publicly available information as of 2023.</p>
            </div>
          </div>
        </section>
        
        {/* Strengths and Weaknesses */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Strengths & Weaknesses
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-500 mb-4">CloudStick Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <CheckIcon className="h-5 w-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">More comprehensive cloud management features</span>
                  </li>
                  <li className="flex">
                    <CheckIcon className="h-5 w-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Better scaling for growing businesses</span>
                  </li>
                  <li className="flex">
                    <CheckIcon className="h-5 w-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">More advanced analytics and monitoring</span>
                  </li>
                  <li className="flex">
                    <CheckIcon className="h-5 w-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Broader technology stack support</span>
                  </li>
                  <li className="flex">
                    <CheckIcon className="h-5 w-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">More cost-effective for multiple projects</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">RunCloud Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Specialized PHP application management</span>
                  </li>
                  <li className="flex">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Simpler interface for PHP developers</span>
                  </li>
                  <li className="flex">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">More WordPress-specific optimizations</span>
                  </li>
                  <li className="flex">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Lower learning curve for PHP specialists</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Try CloudStick?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the powerful features and flexibility that makes CloudStick the preferred choice for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button className="bg-white text-teal-600 hover:bg-slate-100 px-6 py-2">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-2">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RunCloudComparison;
