
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft, Calendar, Star, GitMerge, Zap } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
      { type: "improvement", description: "Improved password policy enforcement.\n• Stronger password requirements\n• Password rotation policies\n• Failed login attempt tracking" },
      { type: "fix", description: "Fixed an issue with expired session handling." }
    ]
  },
  {
    date: "May 2, 2023",
    version: "v2.3.2",
    title: "Performance Improvements",
    description: "This update brings performance enhancements and bug fixes.",
    changes: [
      { type: "improvement", description: "Optimized file syncing for large files.\n• 50% faster uploads for files >1GB\n• Reduced bandwidth usage\n• Better handling of interrupted transfers" },
      { type: "improvement", description: "Reduced memory usage during batch uploads.\n• Memory usage down by 30%\n• Parallel processing of uploads\n• Better queue management" },
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
      { type: "improvement", description: "Enhanced link sharing with expiration options.\n• Custom expiration dates\n• Password protection for links\n• View-only or edit permission options" },
      { type: "improvement", description: "Updated the sharing UI for better usability.\n• Simplified sharing dialog\n• Quick access to recent shares\n• Improved permission management interface" },
      { type: "fix", description: "Fixed permissions issues when sharing to external users." }
    ]
  }
];

// Function to get the icon based on change type
const getChangeTypeIcon = (type: "feature" | "improvement" | "fix") => {
  switch (type) {
    case "feature":
      return <Star className="h-4 w-4" />;
    case "improvement":
      return <Zap className="h-4 w-4" />;
    case "fix":
      return <GitMerge className="h-4 w-4" />;
  }
};

// Function to render the description with bullet points for improvements
const renderDescription = (description: string) => {
  if (!description.includes('\n')) {
    return <p>{description}</p>;
  }
  
  const lines = description.split('\n');
  const mainText = lines[0];
  const bulletPoints = lines.slice(1);
  
  return (
    <div>
      <p className="mb-2">{mainText}</p>
      <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
        {bulletPoints.map((point, i) => (
          <li key={i}>{point.startsWith('• ') ? point.substring(2) : point}</li>
        ))}
      </ul>
    </div>
  );
};

const ChangeLog: React.FC = () => {
  // Sort the changes to put improvements at the end
  const sortChanges = (entry: ChangelogEntry) => {
    const sortedChanges = [...entry.changes].sort((a, b) => {
      if (a.type === "improvement" && b.type !== "improvement") return 1;
      if (a.type !== "improvement" && b.type === "improvement") return -1;
      return 0;
    });
    return sortedChanges;
  };

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
              <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-full">
                <FileText className="h-6 w-6 text-[#006FEE] dark:text-teal-400" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Change Log
              </h1>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
              Keep track of CloudStick's latest updates, improvements, and fixes. We're constantly working to make your cloud storage experience better.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-900/50 ml-3 md:ml-0"></div>
            
            <div className="space-y-12">
              {changelogData.map((entry, index) => (
                <motion.div
                  key={entry.version}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-white dark:border-slate-900 z-10 ml-0.5 md:ml-0 transform -translate-y-1"></div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                          {entry.title}
                        </h2>
                        <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 gap-4">
                          <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 flex items-center gap-1 px-3 py-1 text-sm font-mono">
                            {entry.version}
                          </Badge>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {entry.date}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {entry.description}
                    </p>
                    
                    <Separator className="my-4" />
                    
                    <div className="grid grid-cols-1 gap-4 mt-6">
                      {sortChanges(entry).map((change, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-start p-4 rounded-lg border ${
                            change.type === 'feature' 
                              ? 'bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800/30'
                              : change.type === 'improvement'
                                ? 'bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800/30 col-span-1 md:col-span-2'
                                : 'bg-amber-50 border-amber-100 dark:bg-amber-900/20 dark:border-amber-800/30'
                          }`}
                        >
                          <div className="mr-3 mt-0.5">
                            <span className={`inline-flex items-center justify-center p-1.5 rounded-full ${
                              change.type === 'feature' 
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400'
                                : change.type === 'improvement'
                                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400'
                                  : 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400'
                            }`}>
                              {getChangeTypeIcon(change.type)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium mb-1 text-sm uppercase text-slate-500 dark:text-slate-400">
                              {change.type === 'feature' ? 'New Feature' : change.type === 'improvement' ? 'Improvement' : 'Bug Fix'}
                            </div>
                            <div className="text-slate-700 dark:text-slate-300">
                              {renderDescription(change.description)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ChangeLog;
