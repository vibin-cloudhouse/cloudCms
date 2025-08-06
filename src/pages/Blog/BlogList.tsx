import React, { useState, useEffect, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import axios from "axios";
import BlogPostCard from "./BlogPostCard";
import { FormattedBlog } from "./types";
import { Loader2 } from "lucide-react";

const POSTS_PER_PAGE = 6;
const BASE_STRAPI_URL = "https://strapnew.cloudstick.io";

interface BlogListProps {
  searchTerm: string;
}

const BlogList: React.FC<BlogListProps> = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState<FormattedBlog[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("BlogList: useEffect initiated - Starting data fetch.");
    setLoading(true);
    setError(null);

    axios.get(
      "https://strapnew.cloudstick.io/api/blogs?populate[banner]=true&populate[blogcontent][fields]=heading,content,imageTagText&populate[blogcontent][populate]=image&populate[seo][fields]"
    )
      .then(res => {
        console.log("BlogList: API response received:", res.data);
        if (res.data && Array.isArray(res.data.data)) {
            const formatted = res.data.data.map((item: any) => {
                const descriptionText = item?.description || "No description available.";
                const bannerUrl = item?.banner?.url ? `https://strapnew.cloudstick.io${item.banner.url}` : null;
                const bannerAltText = item?.banner?.alternativeText || "Blog banner image";

                const blogContent = item?.blogcontent?.map((contentItem: any) => ({
                    id: contentItem.id,
                    heading: contentItem.heading || "Untitled Content",
                    content: contentItem.content || "",
                    imageTagText: contentItem.imageTagText || "",
                    images: contentItem.image? contentItem?.image?.map((image)=>
                      `https://strapnew.cloudstick.io${image?.url}`
                      ) : null,
                    imageAltText: contentItem.image?.[0]?.alternativeText || "Blog content image",
                })) || [];

                return {
                    id: item.id,
                    documentId: item.documentId,
                    heading: item?.Heading || "Untitled Blog",
                    slug: item?.slug,
                    description: descriptionText,
                    category: item?.category,
                    seo:item?.seo,
                    username: item?.Username,
                    bannerUrl: bannerUrl,
                    bannerAltText: bannerAltText,
                    blogContent: blogContent,
                    createdAt: item?.createdAt,
                };
            });

            console.log("BlogList: Formatted Blogs:", formatted);
            setBlogs(formatted);

            const uniqueCategories = ["All", ...Array.from(new Set(formatted.map(blog => blog.category)))];
            setCategories(uniqueCategories);

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

  // Filter and search logic
  const filteredAndSearchedBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearchTerm = searchTerm.toLowerCase() === "" ||
                              blog.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              blog.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              blog.blogContent.some(content => content.content.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearchTerm;
  });

  const totalPages = Math.ceil(filteredAndSearchedBlogs.length / POSTS_PER_PAGE);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredAndSearchedBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      {error && (
        <div className="text-center text-red-500 py-4">
          <p>{error}</p>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center gap-2 h-40">
          <span>loading </span><Loader2 className="h-6 w-6 animate-spin text-gray-500" />
        </div>
      ) : (
        <>
          <div className="mb-8">
            <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="w-full">
              <TabsList className="flex flex-wrap justify-center sm:justify-start gap-2">
                {categories.map(category => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {currentPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((blog) => (
                  <BlogPostCard
                    key={blog.id}
                    post={blog}
                  />
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
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">No articles found matching your criteria.</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogList;