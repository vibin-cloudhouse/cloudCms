
import React, { useState, useEffect } from "react";
import { BlogPost } from "./types";
import BlogPostCard from "./BlogPostCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface BlogListProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 6;

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const categories = ["All", ...Array.from(new Set(posts.map(post => post.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  // Reset to page 1 when posts change (e.g., when search results change)
  useEffect(() => {
    setCurrentPage(1);
  }, [posts.length]);

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
