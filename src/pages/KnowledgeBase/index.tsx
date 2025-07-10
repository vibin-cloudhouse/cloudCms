
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Book, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { kbCategories, getAllArticles, KBArticle } from "./data/kbCategories";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KnowledgeBasePage from "../Knowledge";

const KnowledgeBase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const allArticles = getAllArticles();
  
  const filteredArticles = searchTerm 
    ? allArticles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : [];

  const getIconByName = (iconName: string) => {
    // You would normally import these dynamically, but for simplicity we're handling it this way
    switch (iconName) {
      case "book": return <Book className="w-5 h-5" />;
      default: return <Book className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-16 px-4 text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Knowledge Base</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Find answers to all your questions and learn how to make the most of CloudStick.
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search for articles, guides, and more..."
                className="pl-10 py-6 text-black w-full rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>
        
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <KnowledgeBasePage/>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KnowledgeBase;
