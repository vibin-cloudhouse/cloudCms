
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const TermsOfService = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              <FileText className="h-8 w-8 text-[#006FEE] mr-3" />
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Terms of Service</h1>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                By accessing or using CloudStick's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">2. Use License</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Permission is granted to temporarily download one copy of the materials on CloudStick's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300">
                <li className="mb-2">Modify or copy the materials</li>
                <li className="mb-2">Use the materials for any commercial purpose or for any public display</li>
                <li className="mb-2">Attempt to reverse engineer any software contained on CloudStick's website</li>
                <li className="mb-2">Remove any copyright or other proprietary notations from the materials</li>
                <li className="mb-2">Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">3. Disclaimer</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                The materials on CloudStick's website are provided on an 'as is' basis. CloudStick makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">4. Limitations</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                In no event shall CloudStick or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CloudStick's website, even if CloudStick or a CloudStick authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">5. Accuracy of Materials</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                The materials appearing on CloudStick's website could include technical, typographical, or photographic errors. CloudStick does not warrant that any of the materials on its website are accurate, complete, or current. CloudStick may make changes to the materials contained on its website at any time without notice.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">6. Links</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                CloudStick has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CloudStick of the site. Use of any such linked website is at the user's own risk.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">7. Modifications</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                CloudStick may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">8. Governing Law</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">9. Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-4">
                <p className="text-slate-600 dark:text-slate-300">Email: legal@cloudstick.io</p>
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

export default TermsOfService;
