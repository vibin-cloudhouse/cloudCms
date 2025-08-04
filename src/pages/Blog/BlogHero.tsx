import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Book, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BlogHeroProps {
  onSearch: (searchTerm: string) => void;
}

const BlogHero: React.FC<BlogHeroProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <div className="relative min-h-[80vh] flex items-center md:py-16 mb-12">
      {/* Background elements */}
      <div className="gradient-blob w-96 h-96 -top-20 -right-20 opacity-10"></div>
      <div className="gradient-blob w-72 h-72 -bottom-10 -left-10 opacity-20"></div>

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
              <span className="gradient-heading">CloudStick</span> Blog
            </h1>

            <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest cloud storage insights, security tips,
              and product updates from our team of experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {/* These links would ideally be dynamic based on fetched categories */}
              <Link to="/blog/category/cloud-security" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto" variant="outline">
                  <Book className="mr-2 h-4 w-4" />
                  Cloud Security
                </Button>
              </Link>
              <Link to="/blog/category/tutorials" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto" variant="outline">
                  <Book className="mr-2 h-4 w-4" />
                  Tutorials
                </Button>
              </Link>
              <Link to="/blog/category/updates" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto" variant="outline">
                  <Book className="mr-2 h-4 w-4" />
                  Product Updates
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card flex items-center p-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-md overflow-hidden">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search articles, tutorials and more..."
                  className="pl-10 w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>
              <Button className="rounded-full">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;