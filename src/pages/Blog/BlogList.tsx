
import React, { useState, useEffect } from "react";
import { BlogPost } from "./types";
import BlogPostCard from "./BlogPostCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import axios from "axios";

interface BlogListProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 6;

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const categories = ["All", ...Array.from(new Set(posts.map(post => post.category)))];
  const [activeCategory, setActiveCategory] = useState("All");
   const [Blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

  // Reset to page 1 when posts change (e.g., when search results change)
  useEffect(() => {
    setCurrentPage(1);
  }, [posts.length]);

  useEffect(() => {
    console.log("KnowledgeBaseHome: useEffect initiated - Starting data fetch.");
    setLoading(true);
    setError(null); // Clear previous errors

    axios.get("https://strapiss.cloudstick.io/api/blogs?populate[banner]=true&populate[blogcontent][fields]&populate[blogcontent][populate]=image")
        .then((res) => {
            console.log("KnowledgeBaseHome: API response received.", res.data);

            // Check if res.data.data exists and is an array
            if (res.data && Array.isArray(res.data.data)) {
                const formatted = res.data.data.map((item: any) => {
                    // Safely access description, assuming it's a rich text field
                    const descriptionText = item?.description?.[0]?.children?.[0]?.text || "No description available.";

                    // Safely access media field
                    const imageUrl = item?.media?.data?.attributes?.url ? `https://strapiss.cloudstick.io${item.media.data.attributes.url}` : null;
                    const imageAltText = item?.media?.data?.attributes?.alternativeText || "Category image";
                    // Safely map help_articles
                    const helpArticles = item?.help_articles?.map((article: any) => ({
                        id: article.id,
                        title: article.title,
                        slug: article.slug,

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
                setBlogs(formatted);
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

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="relative space-y-12">
      {posts.length > 0 ? (
        <>
          <Tabs defaultValue="All" className="w-full max-w-3xl mx-auto">
            <TabsList className="mx-auto mb-12 flex flex-wrap justify-center">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => handleCategoryChange(category)}
                  className="px-5 py-2 text-sm"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination className="mt-12">
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                      </PaginationItem>
                    )}
                    
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink 
                          isActive={currentPage === index + 1}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">No articles found in this category</h3>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-300 mb-2">No articles found</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
