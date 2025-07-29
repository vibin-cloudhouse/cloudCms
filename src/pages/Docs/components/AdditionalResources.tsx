
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdditionalResources: React.FC = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-lg">Community Forums</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">Connect with other CloudStick users to share knowledge</p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link to="/community" className="text-sm text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
              Join our community →
            </Link>
          </div>
        </Card>
        
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-lg">Sample Projects</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">Download and explore example applications built with CloudStick</p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link to="/resources/examples" className="text-sm text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
              Browse examples →
            </Link>
          </div>
        </Card>
        
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-lg">Developer Blog</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">Tips, tricks and best practices from our engineering team</p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link to="/blog" className="text-sm text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
              Read our blog →
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AdditionalResources;
