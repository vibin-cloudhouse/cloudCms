
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, Calendar, Clock, ArrowRight, Share2, Facebook, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getArticleBySlug, getCategoryBySlug, kbCategories, getRelatedArticles } from "./data/kbCategories";
import ReactMarkdown from 'react-markdown';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const KnowledgeBaseArticle: React.FC = () => {
  const { category: categorySlug, slug: articleSlug } = useParams<{ category: string; slug: string }>();
  const navigate = useNavigate();
  
  const article = getArticleBySlug(categorySlug || "", articleSlug || "");
  const category = getCategoryBySlug(categorySlug || "");
  
  if (!article || !category) {
    navigate("/kb");
    return null;
  }
  
  const relatedArticles = getRelatedArticles(article);

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
                <Link to={`/kb/${category.slug}`} className="transition-colors hover:text-foreground">{category.name}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="font-normal text-foreground">{article.title}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold mb-3">{category.name}</h3>
                  <ul className="space-y-1">
                    {category.articles.map(art => (
                      <li key={art.id}>
                        <Link 
                          to={`/kb/${category.slug}/${art.slug}`}
                          className={`block px-2 py-1.5 rounded-md text-sm transition-colors ${
                            art.id === article.id 
                              ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300" 
                              : "hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          {art.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to={`/kb/${category.slug}`}>
                      <ArrowLeft className="mr-2" />
                      Back to {category.name}
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/kb">
                      <ArrowLeft className="mr-2" />
                      All categories
                    </Link>
                  </Button>
                </div>
              </div>
            </aside>
            
            {/* Main content */}
            <div className="flex-grow">
              <article className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-6 mb-8">
                <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-teal-500" />
                    <span>Updated: {article.updatedAt}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-teal-500" />
                    <span>5 min read</span>
                  </div>
                </div>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="prose prose-slate dark:prose-invert max-w-none prose-img:rounded-lg prose-headings:border-b prose-headings:pb-2 prose-headings:border-slate-200 dark:prose-headings:border-slate-800">
                  <ReactMarkdown>{article.content}</ReactMarkdown>
                </div>
                
                <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Was this article helpful?</span>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm">Yes</Button>
                        <Button variant="outline" size="sm">No</Button>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm text-slate-500 dark:text-slate-400 block mb-2">Share this article:</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Facebook size={16} />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={16} />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Mail size={16} />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Related articles */}
              {relatedArticles.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Related Articles</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {relatedArticles.map(relatedArticle => (
                      <Card key={relatedArticle.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            <Link 
                              to={`/kb/${relatedArticle.categorySlug}/${relatedArticle.slug}`}
                              className="hover:text-teal-600 transition-colors"
                            >
                              {relatedArticle.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardFooter className="text-sm text-muted-foreground flex justify-between pt-0">
                          <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                            {relatedArticle.category}
                          </span>
                          <Link 
                            to={`/kb/${relatedArticle.categorySlug}/${relatedArticle.slug}`}
                            className="flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors"
                          >
                            Read <ArrowRight className="w-4 h-4" />
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
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

export default KnowledgeBaseArticle;
