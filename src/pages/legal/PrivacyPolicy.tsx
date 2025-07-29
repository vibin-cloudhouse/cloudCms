
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="bg-white dark:bg-slate-800 shadow-md rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-[#006FEE] mr-3" />
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Privacy Policy</h1>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">1. Introduction</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Welcome to CloudStick. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">2. The Data We Collect</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300">
                <li className="mb-2">Identity Data includes first name, last name, username or similar identifier.</li>
                <li className="mb-2">Contact Data includes email address and telephone numbers.</li>
                <li className="mb-2">Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li className="mb-2">Usage Data includes information about how you use our website, products, and services.</li>
              </ul>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">3. How We Use Your Data</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300">
                <li className="mb-2">Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li className="mb-2">Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li className="mb-2">Where we need to comply with a legal obligation.</li>
              </ul>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">4. Data Security</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">5. Data Retention</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">6. Your Legal Rights</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300">
                <li className="mb-2">Request access to your personal data.</li>
                <li className="mb-2">Request correction of your personal data.</li>
                <li className="mb-2">Request erasure of your personal data.</li>
                <li className="mb-2">Object to processing of your personal data.</li>
                <li className="mb-2">Request restriction of processing your personal data.</li>
                <li className="mb-2">Request transfer of your personal data.</li>
                <li className="mb-2">Right to withdraw consent.</li>
              </ul>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">7. Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-4">
                <p className="text-slate-600 dark:text-slate-300">Email: privacy@cloudstick.io</p>
                <p className="text-slate-600 dark:text-slate-300">Phone: +1 (555) 333-4444</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
