
import React from "react";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
              Flexible Pricing for Every Need
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
              Choose the perfect plan for your storage needs. All plans include our core security features.
            </p>
            
            {/* Pricing Tables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Free Plan */}
              <div className="pricing-card hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 rounded-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold">Free</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-slate-500 dark:text-slate-400">/month</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">Perfect for personal use</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>5GB Storage</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Basic file sharing</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Desktop app</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Mobile app</span>
                  </li>
                </ul>
                
                <Link to="/signup" className="block text-center">
                  <button className="w-full py-3 px-6 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-xl transition-colors dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-700">
                    Get Started
                  </button>
                </Link>
              </div>
              
              {/* Basic Plan */}
              <div className="pricing-card hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 rounded-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold">Basic</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold">$9.99</span>
                    <span className="text-slate-500 dark:text-slate-400">/month</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">Great for individuals</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>100GB Storage</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Advanced file sharing</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Offline access</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>30-day file recovery</span>
                  </li>
                </ul>
                
                <Link to="/signup" className="block text-center">
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-opacity">
                    Get Started
                  </button>
                </Link>
              </div>
              
              {/* Pro Plan */}
              <div className="pricing-card featured hover:shadow-xl transition-all duration-300 border border-teal-200 dark:border-teal-900 relative rounded-2xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-600 to-cyan-500 text-white text-sm font-medium py-1 px-4 rounded-full">
                  Most Popular
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold">Pro</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold">$19.99</span>
                    <span className="text-slate-500 dark:text-slate-400">/month</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">Perfect for professionals</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>1TB Storage</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Advanced permissions</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Team collaboration tools</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>90-day file recovery</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>API access</span>
                  </li>
                </ul>
                
                <Link to="/signup" className="block text-center">
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-opacity shadow-md">
                    Get Started
                  </button>
                </Link>
              </div>
              
              {/* Business Plan */}
              <div className="pricing-card hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 rounded-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold">Business</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold">$49.99</span>
                    <span className="text-slate-500 dark:text-slate-400">/month</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">For teams and organizations</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>5TB Storage</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>SSO Integration</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Advanced admin controls</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Unlimited file recovery</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <Check className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Custom contracts</span>
                  </li>
                </ul>
                
                <Link to="/signup" className="block text-center">
                  <button className="w-full py-3 px-6 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-xl transition-colors dark:border-teal-400 dark:text-teal-400 dark:hover:bg-slate-700">
                    Contact Sales
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comparison Table Section - Enhanced */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Compare Plans</h2>
            
            <div className="overflow-x-auto rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50 dark:bg-slate-800">
                    <TableHead className="py-6 px-6 text-left font-semibold text-slate-800 dark:text-slate-200">Features</TableHead>
                    <TableHead className="py-6 px-6 text-center font-medium text-slate-600 dark:text-slate-300">
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-slate-400 dark:text-slate-500">Free</span>
                        <span className="text-lg font-bold text-slate-800 dark:text-slate-200">$0</span>
                        <span className="text-xs text-slate-400 dark:text-slate-500">/month</span>
                      </div>
                    </TableHead>
                    <TableHead className="py-6 px-6 text-center font-medium text-slate-600 dark:text-slate-300">
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-slate-400 dark:text-slate-500">Basic</span>
                        <span className="text-lg font-bold text-slate-800 dark:text-slate-200">$9.99</span>
                        <span className="text-xs text-slate-400 dark:text-slate-500">/month</span>
                      </div>
                    </TableHead>
                    <TableHead className="py-6 px-6 text-center font-semibold bg-cyan-50/50 dark:bg-cyan-900/20">
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-teal-600 dark:text-teal-400">Pro</span>
                        <span className="text-lg font-bold text-teal-600 dark:text-teal-400">$19.99</span>
                        <span className="text-xs text-teal-500 dark:text-teal-500">/month</span>
                      </div>
                    </TableHead>
                    <TableHead className="py-6 px-6 text-center font-medium text-slate-600 dark:text-slate-300">
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-slate-400 dark:text-slate-500">Business</span>
                        <span className="text-lg font-bold text-slate-800 dark:text-slate-200">$49.99</span>
                        <span className="text-xs text-slate-400 dark:text-slate-500">/month</span>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Storage</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">5GB</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">100GB</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">1TB</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">5TB</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">File Size Limit</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">250MB</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">2GB</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">10GB</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Unlimited</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">File Recovery</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">7 days</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">30 days</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">90 days</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Unlimited</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Collaboration</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Basic</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Advanced</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">Team</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Enterprise</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Support</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Email</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Priority Email</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">Chat & Email</TableCell>
                    <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Dedicated</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">API Access</TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <X className="h-5 w-5 text-slate-400 dark:text-slate-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <X className="h-5 w-5 text-slate-400 dark:text-slate-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center bg-cyan-50/50 dark:bg-cyan-900/20">
                      <Check className="h-5 w-5 text-teal-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <Check className="h-5 w-5 text-teal-500 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">SSO Integration</TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <X className="h-5 w-5 text-slate-400 dark:text-slate-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <X className="h-5 w-5 text-slate-400 dark:text-slate-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center bg-cyan-50/50 dark:bg-cyan-900/20">
                      <X className="h-5 w-5 text-slate-400 dark:text-slate-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <Check className="h-5 w-5 text-teal-500 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Two-Factor Authentication</TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <X className="h-5 w-5 text-slate-400 dark:text-slate-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <Check className="h-5 w-5 text-teal-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center bg-cyan-50/50 dark:bg-cyan-900/20">
                      <Check className="h-5 w-5 text-teal-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <Check className="h-5 w-5 text-teal-500 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Custom Branding</TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <X className="h-5 w-5 text-slate-400 dark:text-slate-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <X className="h-5 w-5 text-slate-400 dark:text-slate-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center bg-cyan-50/50 dark:bg-cyan-900/20">
                      <Check className="h-5 w-5 text-teal-500 mx-auto" />
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <Check className="h-5 w-5 text-teal-500 mx-auto" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Need a custom plan for your enterprise? Contact our sales team for a tailored solution.
              </p>
              <Link to="/contact">
                <button className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity font-medium">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-600 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Join thousands of users who trust CloudStick for their secure file storage needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <button className="bg-white text-teal-600 px-8 py-3 rounded-xl hover:bg-opacity-90 transition-opacity font-medium">
                  Sign Up Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-transparent border border-white text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
