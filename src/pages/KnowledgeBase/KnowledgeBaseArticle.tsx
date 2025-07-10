
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, Calendar, Clock, ArrowRight, Share2, Facebook, Linkedin, Mail, BookOpen, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getArticleBySlug, getCategoryBySlug, kbCategories, getRelatedArticles } from "./data/kbCategories";
import ReactMarkdown from 'react-markdown';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import axios from "axios";

const KnowledgeBaseArticle: React.FC = () => {
    const params = useParams()
    console.log("params",params);
      const categorySlug = params.category
      const articleSlug = params.slug
 const [categories, setCategories] = useState([]);
 console.log("categories",categories);
 
  const navigate = useNavigate();
   const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const category = categories.find((item)=>item.slug==categorySlug)
    const article = category?.help_articles?.find((item)=>item.slug==articleSlug)

    console.log("category",category,"article",article);

    console.log("image",article?.image?.url);
    
    
  
  // if (!article || !category) {
  //   navigate("/kb");
  //   return null;
  // }
  

    useEffect(() => {
    console.log("KnowledgeBaseHome: useEffect initiated - Starting data fetch.");
    setLoading(true);
    setError(null); // Clear previous errors

    axios.get("http://localhost:1337/api/help-categories?populate[help_articles][fields]&populate[help_articles][populate]=media")
        .then((res) => {
            console.log("KnowledgeBaseHome: API response received.", res.data);

            // Check if res.data.data exists and is an array
            if (res.data && Array.isArray(res.data.data)) {
                const formatted = res.data.data.map((item: any) => {
                    // Safely access description, assuming it's a rich text field
                    const descriptionText = item?.description?.[0]?.children?.[0]?.text || "No description available.";

                    // Safely access media field
                    const imageUrl = item?.media?.data?.attributes?.url ? `http://localhost:1337${item.media.data.attributes.url}` : null;
                    const imageAltText = item?.media?.data?.attributes?.alternativeText || "Category image";

                    // Safely map help_articles
                    const helpArticles = item?.help_articles?.map((article: any) => ({
                        id: article.id,
                        title: article.title,
                        slug: article.slug,
                        description:article.description,
                        content:article.content,
                        image:article.media,
                        updateDate:article.updatedAt
                        // Add any other fields you expect from help_article here
                        // For example, if your help_article has a 'content' field:
                        // content: article.content || '',
                        // If 'description' on help_article is also rich text:
                        // description: article?.description?.[0]?.children?.[0]?.text || "No description available.",
                    })) || [];

                    return {
                        id: item.id,
                        title: item?.title || "Untitled",
                        slug: item?.slug,
                        description: descriptionText,
                        imageUrl: imageUrl,
                        imageAltText: imageAltText,
                        help_articles: helpArticles,
                    };
                });

                console.log("KnowledgeBaseHome: Formatted Categories:", formatted);
                setCategories(formatted);
            } else {
                console.warn("KnowledgeBaseHome: API response data.data is not an array or missing.", res.data);
                setError("Unexpected data format from API.");
            }
        })
        .catch((err) => {
            console.error("KnowledgeBaseHome: Error fetching help categories:", err);
            setError("Failed to load categories. Please try again later.");
            if (axios.isAxiosError(err)) {
                if (err.response) {
                    console.error("KnowledgeBaseHome: Error response data:", err.response.data);
                    console.error("KnowledgeBaseHome: Error response status:", err.response.status);
                    console.error("KnowledgeBaseHome: Error response headers:", err.response.headers);
                    if (err.response.data && err.response.data.error && err.response.data.error.message) {
                        setError(`Failed to load categories: ${err.response.data.error.message}`);
                    }
                } else if (err.request) {
                    console.error("KnowledgeBaseHome: No response received:", err.request);
                    setError("No response from server. Check server status.");
                } else {
                    console.error("KnowledgeBaseHome: Error setting up request:", err.message);
                    setError("An unexpected error occurred.");
                }
            } else {
                console.error("KnowledgeBaseHome: A non-Axios error occurred:", err);
                setError("An unexpected error occurred during data processing.");
            }
        })
        .finally(() => {
            setLoading(false);
            console.log("KnowledgeBaseHome: Data fetch process completed.");
        });
}, []);
  

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
                <Link to={`/kb/${category?.slug}`} className="transition-colors hover:text-foreground">{category?.title}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="font-normal text-foreground">{article?.title}</span>
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
                    {category?.title}
                  </h3>
                  <ul className="space-y-1">
                    {category?.help_articles?.map(art => (
                      <li key={art.id} className="group">
                        <Link 
                          to={`/kb/${category.slug}/${art.slug}`}
                          className={`block px-3 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between ${
                            art.id === article.id 
                              ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-medium" 
                              : "text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-slate-100"
                          }`}
                        >
                          <span className="truncate">{art.title}</span>
                          <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                            art.id === article.id 
                              ? "text-teal-500" 
                              : "text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
                          } ${art.id === article.id ? "transform translate-x-1" : ""}`} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <Button variant="outline" size="lg" className="w-full justify-start shadow-sm" asChild>
                    <Link to={`/kb/${category?.slug}`}>
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back to {category?.title}
                    </Link>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full justify-start shadow-sm" asChild>
                    <Link to="/kb">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      All categories
                    </Link>
                  </Button>
                </div>
              </div>
            </aside>
            
            {/* Enhanced Main content */}
            <div className="flex-grow">
              <article className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-8">
                  <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{article?.title}</h1>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6 items-center">
                    <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                      <Calendar size={14} className="text-teal-500" />
                      <span>Updated: {new Date(article?.updateDate).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                      <Clock size={14} className="text-teal-500" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  
                  <div className="mb-8 flex flex-wrap gap-2">
                    {article?.tags?.map(tag => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="bg-teal-50 text-teal-700 hover:bg-teal-100 dark:bg-teal-900/20 dark:text-teal-300 dark:hover:bg-teal-900/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <img className="w-full h-[500px]" src={`http://localhost:1337${article?.image?.url}`} alt="" />
                  </div>
                  <div className="prose prose-slate dark:prose-invert max-w-none prose-img:rounded-lg prose-headings:border-b prose-headings:pb-2 prose-headings:border-slate-200 dark:prose-headings:border-slate-800 prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-p:text-slate-700 dark:prose-p:text-slate-300 leading-relaxed">
                    {article?.content?.map((content)=>{
                      
                       return <p className="my-2">{content?.children[0]?.text}</p>
                      
                    })}
                  </div>
                </div>
                
                <div className="border-t border-slate-200 dark:border-slate-800 px-8 py-6 bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex flex-wrap items-center justify-between gap-6">
                    <div className="text-sm">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">Was this article helpful?</span>
                      <div className="flex gap-3 mt-3">
                        <Button variant="outline" size="sm" className="bg-white dark:bg-slate-800">Yes</Button>
                        <Button variant="outline" size="sm" className="bg-white dark:bg-slate-800">No</Button>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm text-slate-600 dark:text-slate-400 font-medium block mb-3">Share this article:</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Facebook size={16} />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={16} />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50" asChild>
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
              {category?.help_articles?.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-teal-500" />
                    Related Articles
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.help_articles?.filter((art)=>art.slug !==articleSlug)?.map(relatedArticle => (
                      <Card key={relatedArticle.id} className="hover:shadow-md transition-shadow border-slate-200 dark:border-slate-700 overflow-hidden">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            <Link 
                              to={`/kb/${categorySlug}/${relatedArticle.slug}`}
                              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                            >
                              {relatedArticle.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardFooter className="text-sm text-muted-foreground flex justify-between pt-0">
                          <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            {category.title}
                          </Badge>
                          <Link 
                            to={`/kb/${categorySlug}/${relatedArticle.slug}`}
                            className="flex items-center gap-1 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors group"
                          >
                            Read <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
