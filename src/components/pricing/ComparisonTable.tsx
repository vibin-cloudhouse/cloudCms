import React from "react";
import { Check, X } from "lucide-react";
// Removed Link and cn as they are not used in this component based on the image
// import { Link } from "react-router-dom";
// import { cn } from "@/lib/utils";

// Assuming these components are available from a UI library like shadcn/ui
const Table = ({ children }) => <table className="w-full text-sm caption-bottom">{children}</table>;
const TableBody = ({ children }) => <tbody className="[&_tr:last-child]:border-0">{children}</tbody>;
const TableCell = ({ className, children }) => <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className || ''}`}>{children}</td>;
const TableHead = ({ className, children }) => <th className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className || ''}`}>{children}</th>;
const TableHeader = ({ children }) => <thead className="[&_tr]:border-b">{children}</thead>;
const TableRow = ({ className, children }) => <tr className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className || ''}`}>{children}</tr>;


const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 font-inter">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50 dark:bg-slate-800">
            <TableHead className="py-6 px-6 text-left font-semibold text-slate-800 dark:text-slate-200">Features</TableHead>
            <TableHead className="py-6 px-6 text-center font-medium text-slate-600 dark:text-slate-300">
              <div className="flex flex-col items-center">
                <span className="text-sm text-slate-400 dark:text-slate-500">Free</span>
                {/* Prices are not in the image, keeping original for now */}
                <span className="text-lg font-bold text-slate-800 dark:text-slate-200">$0</span>
                <span className="text-xs text-slate-400 dark:text-slate-500">/month</span>
              </div>
            </TableHead>
            <TableHead className="py-6 px-6 text-center font-medium text-slate-600 dark:text-slate-300">
              <div className="flex flex-col items-center">
                <span className="text-sm text-slate-400 dark:text-slate-500">Standard</span> {/* Changed from Basic to Standard */}
                <span className="text-lg font-bold text-slate-800 dark:text-slate-200">$8.00</span>
                <span className="text-xs text-slate-400 dark:text-slate-500">/month</span>
              </div>
            </TableHead>
            <TableHead className="py-6 px-6 text-center font-semibold bg-cyan-50/50 dark:bg-cyan-900/20">
              <div className="flex flex-col items-center">
                <span className="text-sm text-[#006FEE] dark:text-teal-400">Pro</span>
                <span className="text-lg font-bold text-[#006FEE] dark:text-teal-400">$15.00</span>
                <span className="text-xs text-teal-500 dark:text-teal-500">/month</span>
              </div>
            </TableHead>
            <TableHead className="py-6 px-6 text-center font-medium text-slate-600 dark:text-slate-300">
              <div className="flex flex-col items-center">
                <span className="text-sm text-slate-400 dark:text-slate-500">Business</span>
                <span className="text-lg font-bold text-slate-800 dark:text-slate-200">$45.00</span>
                <span className="text-xs text-slate-400 dark:text-slate-500">/month</span>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Features from Screenshot from 2025-07-28 15-59-22.png */}
          <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Total Connected servers</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">1</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">1</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">Unlimited</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Unlimited</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Total number of Webhosting Accounts</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">One</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Unlimited</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">Unlimited</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Unlimited</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Free SSL</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Business Email</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Support Priority</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Low</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">High</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300 bg-cyan-50/50 dark:bg-cyan-900/20">High</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">High</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Advanced database management</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Manual SSL</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Advanced File Manager</TableCell>
            <TableCell className="py-5 px-6 text-center">
              <Check className="h-5 w-5 text-teal-500 mx-auto" />
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Team</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Mail</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">User/web hosting account Quota</TableCell>
            <TableCell className="py-5 px-6 text-center">
              <Check className="h-5 w-5 text-teal-500 mx-auto" />
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Multiple PHP versions</TableCell>
            <TableCell className="py-5 px-6 text-center">
              <Check className="h-5 w-5 text-teal-500 mx-auto" />
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">SFTP and additional FTP accounts for webhosting accounts</TableCell>
            <TableCell className="py-5 px-6 text-center text-slate-700 dark:text-slate-300">Only SFTP</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Subdomains</TableCell>
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

          {/* Features from Screenshot from 2025-07-28 15-59-36.png */}
          <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Easy PHP-install PHP extensions with one, click no need of command line</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Git Deployment</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">PHP CLI-allow to change command line PHP version</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Server firewall</TableCell>
            <TableCell className="py-5 px-6 text-center">
              <Check className="h-5 w-5 text-teal-500 mx-auto" />
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Activity log</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Cron job management</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Time zone management-Allow customers to change server time</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Tweak SSH settings</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Reset MSQL root password</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Third-party and security update management</TableCell>
            <TableCell className="py-5 px-6 text-center">
              <Check className="h-5 w-5 text-teal-500 mx-auto" />
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Service Management</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Supervisord Management</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Server Transfer</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Change Server IP Address</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">SSH key management</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">WordPress Manager</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">One Click Opensource Project Installations</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Web Application Log</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Wildcard Support</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">SSH Vault</TableCell>
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
            <TableCell className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium">Web Application Clone</TableCell>
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
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;
