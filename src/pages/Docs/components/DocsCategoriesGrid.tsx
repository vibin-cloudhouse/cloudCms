
import React from "react";
import { Book, File, Archive, HelpCircle, Star } from "lucide-react";
import DocsCategoryCard, { CategoryProps } from "./DocsCategoryCard";

const DocsCategoriesGrid: React.FC = () => {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {documentationCategories.map(category => (
        <DocsCategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
};

export default DocsCategoriesGrid;
