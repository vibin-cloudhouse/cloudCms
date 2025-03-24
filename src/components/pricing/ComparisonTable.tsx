
import React from "react";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const ComparisonTable = () => {
  return (
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
  );
};

export default ComparisonTable;
