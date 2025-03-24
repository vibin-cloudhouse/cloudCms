
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Book, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { kbCategories, getAllArticles, KBArticle } from "./data/kbCategories";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
          {searchTerm ? (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Search Results</h2>
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredArticles.map((article) => (
                    <Card key={article.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle className="text-xl">
                            <Link 
                              to={`/kb/${article.categorySlug}/${article.slug}`}
                              className="hover:text-teal-600 transition-colors"
                            >
                              {article.title}
                            </Link>
                          </CardTitle>
                          <span className="text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                        </div>
                        <CardDescription className="mt-2">{article.excerpt}</CardDescription>
                      </CardHeader>
                      <CardFooter className="text-sm text-muted-foreground flex justify-between pt-4">
                        <span>Updated: {article.updatedAt}</span>
                        <Link 
                          to={`/kb/${article.categorySlug}/${article.slug}`}
                          className="flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors"
                        >
                          Read more <ArrowRight className="w-4 h-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No results found for "{searchTerm}"</p>
                  <p className="mt-2">Try a different search term or browse categories below.</p>
                </div>
              )}
              <div className="mt-8">
                <h3 className="font-medium text-lg mb-4">Browse all categories</h3>
              </div>
            </div>
          ) : null}

          {/* Categories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kbCategories.map(category => (
              <Card key={category.id} className="hover:shadow-lg transition-all border border-slate-200 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg text-teal-600 dark:text-teal-400">
                      {getIconByName(category.icon)}
                    </span>
                    <Link to={`/kb/${category.slug}`} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      {category.name}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-1">
                    {category.articles.slice(0, 3).map(article => (
                      <li key={article.id}>
                        <Link 
                          to={`/kb/${category.slug}/${article.slug}`}
                          className="text-sm hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center"
                        >
                          <ArrowRight className="w-3 h-3 mr-1 inline flex-shrink-0" />
                          <span className="line-clamp-1">{article.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Link 
                    to={`/kb/${category.slug}`}
                    className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors flex items-center"
                  >
                    View all articles ({category.articles.length})
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KnowledgeBase;
