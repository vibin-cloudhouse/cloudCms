import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft, Calendar, Star, GitMerge, Zap, Megaphone, UserCheck, ListOrdered } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import axios from "axios";

// Type definitions for changelog entries
interface ChangelogEntry {
  date: string;
  version: string;
  title: string;
  description: string;
  changes: {
    type: "feature" | "improvement" | "fix" | "announcement" | "agent_released" | "enumeration";
    description: string;
  }[];
}

// Helper function to get styling based on change type
const getChangeTypeStyles = (type: "feature" | "improvement" | "fix" | "announcement" | "agent_released" | "enumeration") => {
  switch (type) {
    case "feature":
      return {
        badgeClass: "bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800/30",
        iconBg: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400",
        icon: <Star className="h-4 w-4" />,
        title: "New Feature"
      };
    case "improvement":
      return {
        badgeClass: "bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800/30",
        iconBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400",
        icon: <Zap className="h-4 w-4" />,
        title: "Improvement"
      };
    case "fix":
      return {
        badgeClass: "bg-amber-50 border-amber-100 dark:bg-amber-900/20 dark:border-amber-800/30",
        iconBg: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400",
        icon: <GitMerge className="h-4 w-4" />,
        title: "Bug Fix"
      };
    case "announcement":
      return {
        badgeClass: "bg-purple-50 border-purple-100 dark:bg-purple-900/20 dark:border-purple-800/30",
        iconBg: "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-400",
        icon: <Megaphone className="h-4 w-4" />,
        title: "Announcement"
      };
    case "agent_released":
      return {
        badgeClass: "bg-indigo-50 border-indigo-100 dark:bg-indigo-900/20 dark:border-indigo-800/30",
        iconBg: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400",
        icon: <UserCheck className="h-4 w-4" />,
        title: "Agent Released"
      };
    case "enumeration":
      return {
        badgeClass: "bg-cyan-50 border-cyan-100 dark:bg-cyan-900/20 dark:border-cyan-800/30",
        iconBg: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-400",
        icon: <ListOrdered className="h-4 w-4" />,
        title: "Enumeration"
      };
  }
};

// Map Strapi type to local type
const mapStrapiTypeToLocal = (strapiType: string) => {
  switch (strapiType.toLowerCase()) {
    case "bug fix":
      return "fix";
    case "new feature release":
      return "feature";
    case "improvement":
      return "improvement";
    case "announcement":
      return "announcement";
    case "agent released":
      return "agent_released";
    case "enumeration":
      return "enumeration";
    default:
      return "fix"; // Default to fix if type is unknown
  }
};

const ChangeLog: React.FC = () => {
  const [changelogData, setChangelogData] = useState<ChangelogEntry[]>([]);
  console.log("cahngelog",changelogData);
  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
  
    axios.get(
      "https://strapnew.cloudstick.io/api/change-logs?populate[logs][fields]&populate[seo][populate]=shareImage"
    )
    .then(res => {
      if (res.data && Array.isArray(res.data.data)) {
        const formattedData: ChangelogEntry[] = res.data.data.map((item: any) => {
          const date = new Date(item.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          // Process changes from the 'logs' array
          const changes = item.logs?.map((log: any) => ({
            type: mapStrapiTypeToLocal(log.type),
            description: log.content || "",
          })) || [];

          return {
            date: date,
            version: item.verison || "N/A",
            title: item.heading || "Untitled Changelog",
            description: item.description || "No description available.",
            changes: changes,
          };
        });

        setChangelogData(formattedData);
      } else {
        setError("Unexpected data format from API.");
      }
    })
    .catch(err => {
      console.error("Error fetching data:", err);
      setError("Failed to fetch changelog data. Please try again later.");
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-slate-500 dark:text-slate-400">Loading changelog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500 dark:text-red-400">Error: {error}</p>
      </div>
    );
  }
  
  // Sort the changes to put improvements and announcements at the end
  const sortChanges = (entry: ChangelogEntry) => {
    const sortedChanges = [...entry.changes].sort((a, b) => {
      if ((a.type === "improvement" || a.type === "announcement") && (b.type !== "improvement" && b.type !== "announcement")) return 1;
      if ((a.type !== "improvement" && a.type !== "announcement") && (b.type === "improvement" || b.type === "announcement")) return -1;
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
                    <article className="prose prose-slate dark:prose-invert max-w-none mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {sortChanges(entry).map((change, idx) => {
                        const content = change?.description?.trim();
                        const isIframe = content?.startsWith("<iframe");
                        const styles = getChangeTypeStyles(change.type);

                        return (
                          <div 
                            key={idx} 
                            className={`flex items-start p-4 rounded-lg border ${styles.badgeClass} ${
                                (change.type === 'improvement' || change.type === 'announcement') ? 'md:col-span-2' : ''
                            }`}
                          >
                            <div className="mr-3 mt-0.5">
                              <span className={`inline-flex items-center justify-center p-1.5 rounded-full ${styles.iconBg}`}>
                                {styles.icon}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">
                                {styles.title}
                              </div>
                              <div className="mt-1 text-slate-600 dark:text-slate-300">
                                {isIframe ? (
                                  <div
                                    className="w-full max-w-5xl"
                                    dangerouslySetInnerHTML={{
                                      __html: content.replace(
                                        /<iframe /,
                                        `<iframe class="w-full h-[400px]" `
                                      ),
                                    }}
                                  />
                                ) : (
                                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                    {content}
                                  </ReactMarkdown>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    </article>
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