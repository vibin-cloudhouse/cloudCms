
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const alternatives = [
  {
    name: "RunCloud",
    description: "PHP server management platform with focus on WordPress hosting",
    link: "/alternatives/runcloud",
    available: true
  },
  {
    name: "GridPane",
    description: "WordPress-focused server management platform",
    link: "/alternatives/gridpane",
    available: false
  },
  {
    name: "CloudWays",
    description: "Managed cloud hosting platform for various applications",
    link: "/alternatives/cloudways",
    available: false
  },
  {
    name: "Flywp",
    description: "Managed WordPress hosting platform",
    link: "/alternatives/flywp",
    available: false
  },
  {
    name: "Ploi",
    description: "Server management tool for PHP applications",
    link: "/alternatives/ploi",
    available: false
  },
  {
    name: "ServerAvatar",
    description: "Server management solution for web applications",
    link: "/alternatives/serveravatar",
    available: false
  }
];

const AlternativesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                CloudStick Alternatives Compared
              </h1>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                See how CloudStick compares to other server management solutions and find out why our customers choose us over the competition.
              </p>
            </div>
          </div>
        </section>
        
        {/* Alternatives List */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Popular Alternatives
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {alternatives.map((alt, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{alt.name}</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">{alt.description}</p>
                  {alt.available ? (
                    <Link to={alt.link} className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
                      View Comparison <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="text-slate-500 dark:text-slate-400 italic">
                      Comparison coming soon
                    </span>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose CloudStick */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">
                Why Choose CloudStick?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-teal-600 dark:text-teal-500 mb-4">Comprehensive Solution</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    CloudStick provides an all-in-one solution for server management, monitoring, security, and scaling - eliminating the need for multiple tools and services.
                  </p>
                </Card>
                
                <Card className="bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-teal-600 dark:text-teal-500 mb-4">Superior Performance</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Our proprietary optimization technology delivers faster load times, better resource utilization, and improved user experience compared to alternative solutions.
                  </p>
                </Card>
                
                <Card className="bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-teal-600 dark:text-teal-500 mb-4">Flexible Pricing</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Pay only for what you use with our usage-based pricing model, making CloudStick more cost-effective for businesses of all sizes.
                  </p>
                </Card>
                
                <Card className="bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-teal-600 dark:text-teal-500 mb-4">Enterprise-Grade Security</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Advanced security features including automated patching, vulnerability scanning, and compliance monitoring to keep your applications safe.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AlternativesPage;
