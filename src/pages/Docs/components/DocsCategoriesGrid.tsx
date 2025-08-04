
import React, { useEffect, useState } from "react";
import { Book, File, Archive, HelpCircle, Star } from "lucide-react";
import DocsCategoryCard, { CategoryProps } from "./DocsCategoryCard";
import axios from "axios";

const DocsCategoriesGrid: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [doc, setDoc] = useState([]); // Renamed from 'Blogs' to 'blogs' for conventional naming
    console.log("doc:", doc);
    
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  const documentationCategories: CategoryProps[] = [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Learn the basics of CloudStick and get up and running quickly",
      icon: Book,
      articles: [
        { title: "CloudStick Overview", link: "/docs/getting-started/overview" },
        { title: "Quick Start Guide", link: "/docs/getting-started/quick-start" },
        { title: "Installation", link: "/docs/getting-started/installation" },
        { title: "First Project", link: "/docs/getting-started/first-project" },
      ]
    },
    {
      id: "core-concepts",
      title: "Core Concepts",
      description: "Understand the fundamental concepts behind CloudStick",
      icon: Star,
      articles: [
        { title: "Architecture", link: "/docs/core-concepts/architecture" },
        { title: "Project Structure", link: "/docs/core-concepts/project-structure" },
        { title: "Configuration", link: "/docs/core-concepts/configuration" },
        { title: "Deployment", link: "/docs/core-concepts/deployment" },
      ]
    },
    {
      id: "guides",
      title: "Guides",
      description: "Step-by-step guides for common tasks and workflows",
      icon: File,
      articles: [
        { title: "Deploying Applications", link: "/docs/guides/deploying" },
        { title: "Custom Domains", link: "/docs/guides/domains" },
        { title: "Environment Variables", link: "/docs/guides/environment-variables" },
        { title: "Scaling Applications", link: "/docs/guides/scaling" },
      ]
    },
    {
      id: "api-reference",
      title: "API Reference",
      description: "Complete reference for the CloudStick API",
      icon: Archive,
      articles: [
        { title: "Authentication", link: "/docs/api/authentication" },
        { title: "Projects", link: "/docs/api/projects" },
        { title: "Deployments", link: "/docs/api/deployments" },
        { title: "Users & Teams", link: "/docs/api/users" },
      ]
    },
    {
      id: "faq",
      title: "FAQ & Troubleshooting",
      description: "Solutions to common problems and frequently asked questions",
      icon: HelpCircle,
      articles: [
        { title: "Common Issues", link: "/docs/faq/common-issues" },
        { title: "Error Codes", link: "/docs/faq/error-codes" },
        { title: "Best Practices", link: "/docs/faq/best-practices" },
        { title: "Support Resources", link: "/docs/faq/support" },
      ]
    }
  ];

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {doc.map(doc => (
        <DocsCategoryCard key={doc.id} {...doc} />
      ))}
    </div>
  );
};

export default DocsCategoriesGrid;
