
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft, Calendar } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Type definitions for changelog entries
interface ChangelogEntry {
  date: string;
  version: string;
  title: string;
  description: string;
  changes: {
    type: "feature" | "improvement" | "fix";
    description: string;
  }[];
}

// Sample changelog data
const changelogData: ChangelogEntry[] = [
  {
    date: "June 15, 2023",
    version: "v2.4.0",
    title: "Enhanced Security Features",
    description: "This release focuses on improving security and adding new encryption options.",
    changes: [
      { type: "feature", description: "Added support for hardware security keys." },
      { type: "feature", description: "Introduced client-side encryption settings." },
      { type: "improvement", description: "Improved password policy enforcement." },
      { type: "fix", description: "Fixed an issue with expired session handling." }
    ]
  },
  {
    date: "May 2, 2023",
    version: "v2.3.2",
    title: "Performance Improvements",
    description: "This update brings performance enhancements and bug fixes.",
    changes: [
      { type: "improvement", description: "Optimized file syncing for large files." },
      { type: "improvement", description: "Reduced memory usage during batch uploads." },
      { type: "fix", description: "Fixed thumbnail generation for certain file types." },
      { type: "fix", description: "Addressed issues with WebDAV connectivity." }
    ]
  },
  {
    date: "March 10, 2023",
    version: "v2.3.0",
    title: "Collaboration Tools Update",
    description: "New collaboration features and sharing improvements.",
    changes: [
      { type: "feature", description: "Introduced real-time document collaboration." },
      { type: "feature", description: "Added commenting functionality to shared files." },
      { type: "improvement", description: "Enhanced link sharing with expiration options." },
      { type: "improvement", description: "Updated the sharing UI for better usability." },
      { type: "fix", description: "Fixed permissions issues when sharing to external users." }
    ]
  }
];

const ChangeLog: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-gradient-to-b from-cyan-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-teal-600" />
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Change Log
              </h1>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
              Keep track of CloudStick's latest updates, improvements, and fixes. We're constantly working to make your cloud storage experience better.
            </p>
          </motion.div>

          <div className="space-y-12">
            {changelogData.map((entry, index) => (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {entry.title}
                    </h2>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 gap-4">
                      <span className="font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm">
                        {entry.version}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {entry.date}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {entry.description}
                </p>
                
                <Separator className="my-4" />
                
                <div className="space-y-3">
                  {entry.changes.map((change, idx) => (
                    <div key={idx} className="flex">
                      <div className="mr-3">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          change.type === 'feature' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : change.type === 'improvement'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {change.type === 'feature' ? 'New' : change.type === 'improvement' ? 'Improved' : 'Fixed'}
                        </span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">{change.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ChangeLog;
