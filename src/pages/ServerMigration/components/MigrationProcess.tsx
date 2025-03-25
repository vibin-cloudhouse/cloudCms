
import React from "react";
import { 
  CheckCircle, 
  ClipboardCheck, 
  Server, 
  Database, 
  Monitor 
} from "lucide-react";

const MigrationProcess = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 text-sm font-semibold text-teal-700 bg-teal-100/70 dark:text-teal-300 dark:bg-teal-900/30 rounded-full inline-block mb-4">Seamless Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Our Migration Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We've perfected our migration process to be straightforward and efficient, 
              minimizing disruption to your business operations
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-cyan-500 hidden md:block"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center mb-12 relative">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">1. Migration Request</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Submit your migration request with details about your server and websites. Our team reviews your requirements and contacts you to confirm details.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg mb-8 md:mb-0">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <div className="md:w-1/2 md:pl-12 md:hidden"></div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-12 relative">
              <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">2. Server Assessment</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Our experts analyze your current server setup, identify potential challenges, and create a detailed migration plan tailored to your needs.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg mb-8 md:mb-0">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div className="md:w-1/2 md:pr-12 md:hidden"></div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center mb-12 relative">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">3. Data Migration</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We transfer all your files, databases, and configurations to the destination server, ensuring everything is properly set up and optimized.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg mb-8 md:mb-0">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div className="md:w-1/2 md:pl-12 md:hidden"></div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-12 relative">
              <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">4. Testing & Quality Check</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We thoroughly test your websites to ensure they function correctly on the new server, verifying database connectivity, script functionality, and more.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg mb-8 md:mb-0">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div className="md:w-1/2 md:pr-12 md:hidden"></div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center relative">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">5. Go Live & Support</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Once you approve the migration, we switch your DNS to point to the new server and provide post-migration support to ensure everything works seamlessly.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="md:w-1/2 md:pl-12 md:hidden"></div>
            </div>
          </div>
          
          <div className="text-center mt-16 p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800/40">
            <p className="text-teal-700 dark:text-teal-300 font-medium mb-0">
              Our migration process typically takes 24-72 hours depending on the size and complexity of your websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationProcess;
