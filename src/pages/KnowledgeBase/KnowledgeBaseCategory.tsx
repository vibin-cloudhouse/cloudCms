
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Search, Book, BookOpen, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { getCategoryBySlug, kbCategories } from "./data/kbCategories";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const KnowledgeBaseCategory: React.FC = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  const category = getCategoryBySlug(categorySlug || "");
  
  if (!category) {
    navigate("/kb");
    return null;
  }
  
  const filteredArticles = searchTerm 
    ? category.articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : category.articles;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link to="/kb" className="transition-colors hover:text-foreground">Knowledge Base</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="font-normal text-foreground">{category.name}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Enhanced Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-lg mb-4 text-slate-800 dark:text-slate-200 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-teal-500" />
                    Categories
                  </h3>
                  <div className="space-y-1">
                    {kbCategories.map(cat => (
                      <Link 
                        key={cat.id}
                        to={`/kb/${cat.slug}`}
                        className={`group flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm transition-all ${
                          cat.id === category.id 
                            ? "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 font-medium" 
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-slate-100"
                        }`}
                      >
                        <div className="flex items-center">
                          <Bookmark className={`w-4 h-4 mr-2.5 ${
                            cat.id === category.id 
                              ? "text-teal-500" 
                              : "text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
                          }`} />
                          <span>{cat.name}</span>
                        </div>
                        
                        {cat.articles.length > 0 && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            cat.id === category.id
                              ? "bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-200"
                              : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                          }`}>
                            {cat.articles.length}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" size="lg" className="w-full justify-start shadow-sm" asChild>
                  <Link to="/kb">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to all categories
                  </Link>
                </Button>
              </div>
            </aside>
            
            {/* Main content */}
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg text-teal-600 dark:text-teal-400">
                  <Book className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{category.name}</h1>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
              
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder={`Search in ${category.name}...`}
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {filteredArticles.length > 0 ? (
                <div className="space-y-4">
                  {filteredArticles.map(article => (
                    <Card key={article.id} className="hover:shadow-md transition-shadow border-slate-200 dark:border-slate-700">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">
                          <Link 
                            to={`/kb/${category.slug}/${article.slug}`}
                            className="hover:text-teal-600 transition-colors"
                          >
                            {article.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="mt-2">{article.excerpt}</CardDescription>
                      </CardHeader>
                      <CardFooter className="text-sm text-muted-foreground flex justify-between pt-4">
                        <span>Updated: {article.updatedAt}</span>
                        <Link 
                          to={`/kb/${category.slug}/${article.slug}`}
                          className="flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors group"
                        >
                          Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No articles found</p>
                  {searchTerm && (
                    <p className="mt-2">Try another search term or browse other categories.</p>
                  )}
                  {!searchTerm && category.articles.length === 0 && (
                    <p className="mt-2">Articles for this category are coming soon.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KnowledgeBaseCategory;
