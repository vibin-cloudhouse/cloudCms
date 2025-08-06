import React, { useEffect, useState } from "react";
import { Book, File, Archive, HelpCircle, Star, Loader2 } from "lucide-react";
import DocsCategoryCard, { CategoryProps } from "./DocsCategoryCard";
import axios from "axios";

// A simple loading component with a spinning icon
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center gap-2 h-40">
            <span>loading </span><Loader2 className="h-6 w-6 animate-spin text-gray-500" />
          </div>
);

const DocsCategoriesGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [doc, setDoc] = useState([]);
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
        if (res.data && Array.isArray(res.data.data)) {
            const formatted = res.data.data.map((item: any) => {
                const descriptionText = item?.description || "No description available.";
                const icon = item?.icon?.url ? `https://strapnew.cloudstick.io${item.icon.url}` : null;
                const sub_docs = item?.sub_docs?.map((contentItem: any) => ({
                    id: contentItem.id,
                    heading: contentItem.heading || "Untitled Content",
                    content: contentItem.content || "",
                    keywords: contentItem.keywords,
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
                    createdAt: item?.createdAt,
                    updatedAt: item?.updatedAt,
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
        setError("Failed to fetch documentation categories. Please try again later.");
    })
    .finally(() => {
        setLoading(false);
    });
  }, []);

  if (loading) {
      return <LoadingSpinner />;
  }

  if (error) {
      return (
          <div className="text-center text-red-500 mt-12">
              <p>{error}</p>
          </div>
      );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {doc.map((doc: CategoryProps) => (
        <DocsCategoryCard key={doc.id} {...doc} />
      ))}
    </div>
  );
};

export default DocsCategoriesGrid;