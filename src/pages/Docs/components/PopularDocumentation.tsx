
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PopularDocumentation: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Popular Documentation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started with CloudStick</CardTitle>
            <CardDescription>Learn how to create your first project and deploy it</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><Link to="/docs/getting-started/overview" className="text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">CloudStick Overview</Link></li>
              <li><Link to="/docs/getting-started/quick-start" className="text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">Quick Start Guide</Link></li>
              <li><Link to="/docs/getting-started/installation" className="text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">Installation Guide</Link></li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Deployment & Scaling</CardTitle>
            <CardDescription>Take your application to production</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><Link to="/docs/guides/deploying" className="text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">Deploying Applications</Link></li>
              <li><Link to="/docs/guides/domains" className="text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">Setting Up Custom Domains</Link></li>
              <li><Link to="/docs/guides/scaling" className="text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">Scaling Your Application</Link></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PopularDocumentation;
