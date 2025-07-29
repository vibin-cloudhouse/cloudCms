
import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getDocumentByPath, getNextAndPreviousDocuments } from "./data/docContent";
import DocsSidebar from "./components/DocsSidebar";

const DocDetail: React.FC = () => {
  const { category, article } = useParams<{ category: string; article: string }>();
  const navigate = useNavigate();
  const docPath = `${category}/${article}`;
  
  const document = getDocumentByPath(docPath);
  const { prevDoc, nextDoc } = getNextAndPreviousDocuments(docPath);
  
  useEffect(() => {
    // Scroll to top when document changes
    window.scrollTo(0, 0);
  }, [docPath]);
  
  if (!document) {
    navigate("/docs");
    return null;
  }

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
                    <span className="font-normal text-foreground">{document.title}</span>
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
                <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">{document.title}</h1>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {document.tags?.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {document.updatedAt && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                    Last updated: {document.updatedAt}
                  </p>
                )}
                
                {/* Document content sections */}
                {document.sections.map((section, index) => (
                  <section key={index} className="mb-10">
                    {section.title && <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>}
                    
                    {section.content && (
                      <div className="space-y-4">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                    
                    {section.image && (
                      <div className="my-6 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                        <img 
                          src={section.image} 
                          alt={section.imageAlt || section.title || document.title} 
                          className="w-full"
                        />
                        {section.imageCaption && (
                          <div className="text-sm text-center text-slate-500 dark:text-slate-400 py-2 px-4 bg-slate-50 dark:bg-slate-800/50">
                            {section.imageCaption}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {section.codeBlock && (
                      <div className="bg-slate-900 text-slate-50 p-4 rounded-lg my-6 overflow-x-auto">
                        <pre><code>{section.codeBlock}</code></pre>
                      </div>
                    )}
                    
                    {section.note && (
                      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                        <p className="text-amber-800 dark:text-amber-300">{section.note}</p>
                      </div>
                    )}
                  </section>
                ))}
                
                {/* Related documentation cards */}
                {document.relatedDocs && document.relatedDocs.length > 0 && (
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
                    to={`/docs/${prevDoc.path}`}
                    className="flex items-center text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 mb-4 sm:mb-0"
                  >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Previous</div>
                      <div>{prevDoc.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div></div>
                )}
                
                {nextDoc && (
                  <Link 
                    to={`/docs/${nextDoc.path}`}
                    className="flex items-center text-right text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 sm:ml-auto"
                  >
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Next</div>
                      <div>{nextDoc.title}</div>
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
