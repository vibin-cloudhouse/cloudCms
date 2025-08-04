import React, { useEffect, useState } from "react";
import axios from "axios";
import { HelpCategory } from "../types/helpTypes";
import KnowledgeBaseCategory from "@/pages/KnowledgeBase/KnowledgeBaseCategory";

const KnowledgeBaseHome: React.FC = () => {
  const [categories, setCategories] = useState<HelpCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
    console.log("KnowledgeBaseHome: useEffect initiated - Starting data fetch.");
    setLoading(true);
    setError(null); // Clear previous errors

    axios.get("https://strapnew.cloudstick.io/api/help-categories?populate[icon]=true&populate[help_articles][fields]&populate[seo][fields]&populate[help_articles][populate][seo][fields]&populate[help_articles][populate][seo][populate]=shareImage&sort=createdAt:asc")
        .then((res) => {
            console.log("KnowledgeBaseHome: API response received.", res.data);

            // Check if res.data.data exists and is an array
            if (res.data && Array.isArray(res.data.data)) {
                const formatted = res.data.data.map((item: any) => {
                    // Safely access description, assuming it's a rich text field
                    const descriptionText = item?.description?.[0]?.children?.[0]?.text || "No description available.";

                    // Safely access media field
                    const imageUrl = item?.media?.data?.attributes?.url ? `https://strapnew.cloudstick.io${item.media.data.attributes.url}` : null;
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

  if (loading) {
    return <div className="text-white text-center mt-10">Loading categories...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  }

  if (categories.length === 0) {
    console.log("KnowledgeBaseHome: No categories found to display.");
    return <div className="text-white text-center mt-10">No help categories found.</div>;
  }

  console.log("KnowledgeBaseHome: Rendering categories grid.");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {categories.map((category) => (
        <KnowledgeBaseCategory key={category.id} category={category} />
      ))}
    </div>
  );
};

export default KnowledgeBaseHome;