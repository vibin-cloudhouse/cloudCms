import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Search, Book, BookOpen, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { getCategoryBySlug, kbCategories } from "./data/kbCategories";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HelpCategory } from "@/types/helpTypes";
import axios from "axios";

const KnowledgeBaseCategoryPage: React.FC = () => {
  const params = useParams()
  const categorySlug = params.category
 const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm,setSearchTerm]= useState("")

const category = categories.find((item)=>item.slug==categorySlug)
console.log("category",category);

  useEffect(() => {
    console.log("KnowledgeBaseHome: useEffect initiated - Starting data fetch.");
    setLoading(true);
    setError(null); // Clear previous errors

axios.get("https://great-basket-5458a3b3d3.strapiapp.com/api/help-categories?populate[icon]=true&populate[help_articles][fields]&populate[help_articles][populate][mediasection][populate]=infomedia")
        .then((res) => {
            console.log("KnowledgeBaseHome: API response received.", res.data);

            // Check if res.data.data exists and is an array
            if (res.data && Array.isArray(res.data.data)) {
                const formatted = res.data.data.map((item: any) => {
                    // Safely access description, assuming it's a rich text field
                    const descriptionText = item?.description?.[0]?.children?.[0]?.text || "No description available.";

                    // Safely access media field
                    const imageUrl = item?.media?.data?.attributes?.url ? `https://great-basket-5458a3b3d3.strapiapp.com${item.media.data.attributes.url}` : null;
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
                        icon:item.icon
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
  
  // Handle redirection if category is not found BEFORE rendering anything else
//   useEffect(() => {
//     if (!category) {
//       navigate("/kb");
//     }
//   }, [category, navigate]); // Add category and navigate to dependencies

  // If category is null, we are in the process of redirecting, so don't render anything
  if (!category) {
    return null; 
  }
  
   const filteredArticles = searchTerm
    ? category.help_articles.filter((article: any) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : category.help_articles;

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
                <span className="font-normal text-foreground">{category.title}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl shadow-md border border-teal-100 dark:border-slate-700">
                  <h3 className="font-semibold text-lg mb-4 text-slate-800 dark:text-slate-200 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-teal-600" />
                    Knowledge Categories
                  </h3>
                  <div className="space-y-1">
                    {categories.map(cat => (
                      <Link 
                        key={cat.id}
                        to={`/kb/${cat.slug}`}
                        className={`group flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                          cat.id === category.id 
                            ? "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 font-medium" 
                            : "text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-700/50 hover:text-teal-800 dark:hover:text-teal-200"
                        }`}
                      >
                        <div className="flex items-center">
                          <Bookmark className={`w-4 h-4 mr-2.5 transition-colors ${
                            cat.id === category.id 
                              ? "text-teal-500" 
                              : "text-slate-400 group-hover:text-teal-500 dark:text-slate-500 dark:group-hover:text-teal-400"
                          }`} />
                          <span>{cat.title}</span>
                        </div>
                        
                        {cat.help_articles?.length >= 0 && (
                          <span className={`text-xs px-2 py-1 rounded-full transition-colors ${
                            cat.id === category.id
                              ? "bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-200"
                              : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50"
                          }`}>
                            {cat.help_articles.length}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" size="lg" className="w-full justify-start shadow-sm bg-gradient-to-r from-teal-50 to-cyan-100 hover:from-teal-100 hover:to-cyan-200 dark:from-slate-800 dark:to-slate-900 dark:hover:from-slate-700 dark:hover:to-slate-800" asChild>
                  <Link to="/kb">
                    <ArrowLeft className="mr-2 h-4 w-4 text-teal-600" />
                    Back to all categories
                  </Link>
                </Button>
              </div>
            </aside>
            
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg text-teal-600 dark:text-teal-400">
                 <img className=" rounded-md w-5 h-5" src={`${category.icon?.url}`} alt="" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{category.title}</h1>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
              
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder={`Search in ${category.title}...`}
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
                        <CardDescription className="mt-2">{article.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="text-sm text-muted-foreground flex justify-between pt-4">
                        <span>Updated: {new Date(article.updateDate)?.toLocaleString()}</span>
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

export default KnowledgeBaseCategoryPage;