
import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
        
        {/* Comparison Table Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Compare Plans</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-4 px-6 text-slate-600 dark:text-slate-300 font-medium">Features</th>
                    <th className="py-4 px-6 text-slate-600 dark:text-slate-300 font-medium">Free</th>
                    <th className="py-4 px-6 text-slate-600 dark:text-slate-300 font-medium">Basic</th>
                    <th className="py-4 px-6 text-teal-600 dark:text-teal-400 font-semibold">Pro</th>
                    <th className="py-4 px-6 text-slate-600 dark:text-slate-300 font-medium">Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-4 px-6 text-slate-800 dark:text-slate-200 font-medium">Storage</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">5GB</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">100GB</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">1TB</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">5TB</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-4 px-6 text-slate-800 dark:text-slate-200 font-medium">File Size Limit</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">250MB</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">2GB</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">10GB</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">Unlimited</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-4 px-6 text-slate-800 dark:text-slate-200 font-medium">File Recovery</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">7 days</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">30 days</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">90 days</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">Unlimited</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-4 px-6 text-slate-800 dark:text-slate-200 font-medium">Collaboration</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">Basic</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">Advanced</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">Team</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">Enterprise</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-4 px-6 text-slate-800 dark:text-slate-200 font-medium">Support</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">Email</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">Priority Email</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">Chat & Email</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">Dedicated</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-4 px-6 text-slate-800 dark:text-slate-200 font-medium">API Access</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">
                      <span className="inline-block h-5 w-5 text-slate-400">—</span>
                    </td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">
                      <span className="inline-block h-5 w-5 text-slate-400">—</span>
                    </td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">
                      <Check className="h-5 w-5 text-teal-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">
                      <Check className="h-5 w-5 text-teal-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-4 px-6 text-slate-800 dark:text-slate-200 font-medium">SSO Integration</td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">
                      <span className="inline-block h-5 w-5 text-slate-400">—</span>
                    </td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">
                      <span className="inline-block h-5 w-5 text-slate-400">—</span>
                    </td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">
                      <span className="inline-block h-5 w-5 text-slate-400">—</span>
                    </td>
                    <td className="py-4 px-6 text-center text-slate-700 dark:text-slate-300">
                      <Check className="h-5 w-5 text-teal-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
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
