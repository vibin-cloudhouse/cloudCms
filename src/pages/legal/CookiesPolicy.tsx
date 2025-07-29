import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const CookiesPolicy = () => {
  const { resetCookiePreferences } = useCookieConsent();

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
              <Cookie className="h-8 w-8 text-[#006FEE] mr-3" />
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Cookies Policy</h1>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-slate-600 dark:text-slate-300">
                    Manage your cookie preferences
                  </p>
                  <Button onClick={resetCookiePreferences}>
                    Manage Cookies
                  </Button>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">1. What Are Cookies</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and the service more useful to you.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">2. How We Use Cookies</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                When you use and access our service, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300">
                <li className="mb-2">To enable certain functions of the service</li>
                <li className="mb-2">To provide analytics</li>
                <li className="mb-2">To store your preferences</li>
                <li className="mb-2">To enable advertisements delivery, including behavioral advertising</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We use both session and persistent cookies on the service and we use different types of cookies to run the service:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300">
                <li className="mb-2">Essential cookies. We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
                <li className="mb-2">Preferences cookies. We may use preferences cookies to remember information that changes the way the service behaves or looks, such as the "remember me" functionality or a user's language preference.</li>
                <li className="mb-2">Analytics cookies. We may use analytics cookies to track information about how the service is used so that we can make improvements.</li>
                <li className="mb-2">Marketing cookies. We may use marketing cookies to show you new features or services we think you'll find interesting.</li>
              </ul>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">3. Third-Party Cookies</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">4. What Are Your Choices Regarding Cookies</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
              </p>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">5. Where Can You Find More Information About Cookies</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                You can learn more about cookies and the following third-party websites:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-600 dark:text-slate-300">
                <li className="mb-2">AllAboutCookies: <a href="https://www.allaboutcookies.org/" className="text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">https://www.allaboutcookies.org/</a></li>
                <li className="mb-2">Network Advertising Initiative: <a href="https://www.networkadvertising.org/" className="text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">https://www.networkadvertising.org/</a></li>
              </ul>

              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">6. Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                If you have any questions about our Cookies Policy, please contact us at:
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

export default CookiesPolicy;
