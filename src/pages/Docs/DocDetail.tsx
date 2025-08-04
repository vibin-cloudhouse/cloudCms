
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getDocumentByPath, getNextAndPreviousDocuments } from "./data/docContent";
import DocsSidebar from "./components/DocsSidebar";
import axios from "axios";
import ReactMarkdown from 'react-markdown';

import rehypeRaw from "rehype-raw";
const baseUrl = import.meta.env.VITE_APP_DEV_URL || "https://strapnew.cloudstick.io";


const DocDetail: React.FC = () => {
  const { category, article } = useParams<{ category: string; article: string }>();
  console.log("nav",category,article);
  
  const navigate = useNavigate();
  const docPath = `${category}/${article}`;
    const [doc, setDoc] = useState([]); // Renamed from 'Blogs' to 'blogs' for conventional naming
      console.log("doc:", doc);
      
      const [loading, setLoading] = useState<boolean>(true);
      const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      console.log("BlogList: useEffect initiated - Starting data fetch.");
      setLoading(true);
      setError(null); // Clear previous errors
  
      axios.get(
  
    "https://strapnew.cloudstick.io/api/docs?populate[icon]=true&populate[sub_docs][fields]&populate[sub_docs][populate][keywords][fields]&populate[sub_docs][populate][content][fields]&populate[sub_docs][populate][content][populate]=image&populate[seo][populate]=shareImage&populate[sub_docs][populate][seo][fields]"
  
  )
        .then(res => {
          console.log("BlogList: API response received:", res.data);
          // Check if res.data.data exists and is an array
          if (res.data && Array.isArray(res.data.data)) {
              const formatted = res.data.data.map((item: any) => {
                  const descriptionText = item?.description || "No description available.";
                  const icon = item?.icon?.url ? `https://strapnew.cloudstick.io${item.icon.url}` : null;
                  const sub_docs = item?.sub_docs?.map((contentItem: any) => ({
                      id: contentItem.id,
                      heading: contentItem.heading || "Untitled Content",
                      content: contentItem.content || "",
                      keywords: contentItem.keywords ,
                      seo: contentItem.seo || {},
                      updated_at: contentItem.updatedAt,
                      slug: contentItem.slug || "",
                  })) || [];
  
                  return {
                      id: item.id,
                      documentId: item.documentId,
                      heading: item?.heading || "Untitled Blog",
                      slug: item?.slug,
                      description: descriptionText,
                      icon: icon,
                      seo: item?.seo,
                      sub_docs: sub_docs,
                      createdAt: item?.createdAt, // Add createdAt for sorting/display if needed
                      updatedAt: item?.updatedAt, // Add updatedAt for sorting/display if needed
                  };
              });
  
              console.log("BlogList: Formatted Blogs:", formatted);
              setDoc(formatted);
  
             
  
          } else {
              console.warn("BlogList: API response data is not an array or missing.", res.data);
              setError("Unexpected data format from API.");
          }
        })
        .catch(err => {
          console.error("BlogList: Error fetching data:", err);
          setError("Failed to fetch blog posts. Please try again later.");
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
// First, find the parent document that contains the desired sub_doc
const parentDoc = doc?.find((item) => {
  return item?.sub_docs?.some((sub) => sub?.slug === article);
});

// Now, find the specific sub_doc within that parent document
const document = parentDoc?.sub_docs?.find((sub) => sub?.slug === article);

console.log("document", document);
  
  const { prevDoc, nextDoc } = getNextAndPreviousDocuments(docPath);
  
  useEffect(() => {
    // Scroll to top when document changes
    window.scrollTo(0, 0);
   
  }, [docPath]);
  
  // if (!document) {
  //   navigate("/docs");
  //   return null;
  // }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="flex">
          {/* Docs Sidebar */}
          <DocsSidebar />
          
          {/* Main content */}
          <div className="flex-1 px-4 py-8 overflow-auto">
            <div className="container mx-auto max-w-4xl">
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <Link to="/docs" className="transition-colors hover:text-foreground">Documentation</Link>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <Link to={`/docs/${category}`} className="transition-colors hover:text-foreground capitalize">
                      {category?.replace(/-/g, ' ')}
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <span className="font-normal text-foreground">{document?.heading}</span>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <Button variant="outline" size="sm" className="mb-6" asChild>
                <Link to="/docs">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back to Documentation
                </Link>
              </Button>
              
              <article className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">{document?.heading}</h1>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {document?.keywords?.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-2.5 py-1 rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                
                {document?.updated_at && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                    Last updated: {new Date(document?.updated_at).toLocaleString()}
                  </p>
                )}
                
                {/* Document content sections */}
                {document?.content?.map((section, index) => {
                  const content = section?.content?.trim();
                  const isIframe = content?.startsWith("<iframe");
                  return(
                  <section key={index} className="mb-10">
                    {section.heading && <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>}
                    
                    {section.content && (
                      <div className="space-y-4">
                       <div key={index} className="p-4">
                               {isIframe ? (
                                 <div
                                   className="w-full max-w-5xl"
                                   dangerouslySetInnerHTML={{
                                     __html: content.replace(
                                       /<iframe /,
                                       `<iframe class="w-full h-[400px]" ` // you can adjust height as needed
                                     ),
                                   }}
                                 />
                               ) : (
                                 <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                   {content}
                                 </ReactMarkdown>
                               )}
                             </div>
                        
                        
                                          
                      </div>
                    )}
                    
                    {section.image && 
                    section?.image?.map((imageItem,Imageindex)=>{
                      return (
                      <div className="my-6 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                        <img 
                          src={`${baseUrl}${imageItem?.url}`} 
                          alt={section.imageTagText || section.title || document.title} 
                          className="w-full"
                        />
                        {section.imageTagText && (
                          <div className="text-sm text-center text-slate-500 dark:text-slate-400 py-2 px-4 bg-slate-50 dark:bg-slate-800/50">
                            {section.imageTagText}
                          </div>
                        )}
                      </div>
                    )
                    })
                    }
                    
                    {section.copyText && (
                      <div className="bg-slate-900 text-slate-50 p-4 rounded-lg my-6 overflow-x-auto">
                        <pre><code><ReactMarkdown  rehypePlugins={[rehypeRaw]}>{section.copyText}</ReactMarkdown></code></pre>
                      </div>
                    )}
                    
                    {section.importantText && (
                      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                        <div className="text-amber-800 dark:text-amber-300">
                          <ReactMarkdown  rehypePlugins={[rehypeRaw]}>{section.importantText}</ReactMarkdown>
                          </div>
                      </div>
                    )}
                  </section>
                )})}
                
                {/* Related documentation cards */}
                {document?.relatedDocs && document?.relatedDocs.length > 0 && (
                  <section className="mt-12">
                    <h2 className="text-2xl font-semibold mb-6">Related Documentation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {document.relatedDocs.map((relatedDoc, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <h3 className="font-medium text-lg mb-2">
                              <Link 
                                to={`/docs/${relatedDoc.path}`} 
                                className="text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                              >
                                {relatedDoc.title}
                              </Link>
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{relatedDoc.description}</p>
                            <Link 
                              to={`/docs/${relatedDoc.path}`} 
                              className="text-sm flex items-center text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                            >
                              Read more <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )}
              </article>
              
              {/* Previous/Next navigation */}
              <div className="flex flex-col sm:flex-row justify-between mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
                {prevDoc ? (
                  <Link 
                    to={`/docs/${prevDoc?.path}`}
                    className="flex items-center text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 mb-4 sm:mb-0"
                  >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Previous</div>
                      <div>{prevDoc?.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div></div>
                )}
                
                {nextDoc && (
                  <Link 
                    to={`/docs/${nextDoc?.path}`}
                    className="flex items-center text-right text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 sm:ml-auto"
                  >
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Next</div>
                      <div>{nextDoc?.title}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocDetail;
