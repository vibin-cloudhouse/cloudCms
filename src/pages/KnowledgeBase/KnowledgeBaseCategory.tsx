
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Search, Book } from "lucide-react";
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
                <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/kb">Knowledge Base</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{category.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <ul className="space-y-2">
                    {kbCategories.map(cat => (
                      <li key={cat.id}>
                        <Link 
                          to={`/kb/${cat.slug}`}
                          className={`block px-2 py-1.5 rounded-md text-sm transition-colors ${
                            cat.id === category.id 
                              ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300" 
                              : "hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          {cat.name}
                          {cat.articles.length > 0 && (
                            <span className="ml-2 text-xs bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded-full">
                              {cat.articles.length}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/kb">
                    <ArrowLeft className="mr-2" />
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
                    <Card key={article.id} className="hover:shadow-md transition-shadow">
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
                          className="flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors"
                        >
                          Read article <ArrowRight className="w-4 h-4" />
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
