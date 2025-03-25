
import React from "react";
import { Link } from "react-router-dom";
import { File, Book, Archive, HelpCircle, Star, Play, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DocsPage: React.FC = () => {
  const documentationCategories = [
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

  const videoResources = [
    {
      title: "Getting Started with CloudStick",
      description: "Learn the basics in under 10 minutes",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "/resources/videos/getting-started",
      duration: "9:47"
    },
    {
      title: "Advanced Security Features",
      description: "Protect your data with enterprise-grade encryption",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "/resources/videos/security-features",
      duration: "12:35"
    },
    {
      title: "Custom Domain Setup",
      description: "Connect CloudStick to your own domain in minutes",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "/resources/videos/domain-setup",
      duration: "7:23"
    },
    {
      title: "Team Collaboration Tips",
      description: "Best practices for working with multiple users",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      link: "/resources/videos/collaboration",
      duration: "14:08"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-16 px-4 text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">CloudStick Documentation</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Everything you need to know about building and deploying applications with CloudStick
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link 
                to="/docs/getting-started/quick-start" 
                className="bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Quick Start Guide
              </Link>
              <Link 
                to="/docs/api/authentication" 
                className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                API Reference
              </Link>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto max-w-7xl px-4 py-12">
          {/* Documentation categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {documentationCategories.map(category => (
              <Card key={category.id} className="hover:shadow-lg transition-all border border-slate-200 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg text-teal-600 dark:text-teal-400">
                      <category.icon className="w-5 h-5" />
                    </span>
                    <Link to={`/docs/${category.id}`} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      {category.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-1">
                    {category.articles.slice(0, 3).map((article, index) => (
                      <li key={index} className="text-sm">
                        <Link 
                          to={article.link}
                          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center"
                        >
                          <File className="w-3 h-3 mr-2 inline flex-shrink-0" />
                          <span>{article.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Promoted Documentation */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Popular Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started with CloudStick</CardTitle>
                  <CardDescription>Learn how to create your first project and deploy it</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><Link to="/docs/getting-started/overview" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">CloudStick Overview</Link></li>
                    <li><Link to="/docs/getting-started/quick-start" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">Quick Start Guide</Link></li>
                    <li><Link to="/docs/getting-started/installation" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">Installation Guide</Link></li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Deployment & Scaling</CardTitle>
                  <CardDescription>Take your application to production</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><Link to="/docs/guides/deploying" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">Deploying Applications</Link></li>
                    <li><Link to="/docs/guides/domains" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">Setting Up Custom Domains</Link></li>
                    <li><Link to="/docs/guides/scaling" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">Scaling Your Application</Link></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Documentation Resources - YouTube Style */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Video Tutorials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoResources.map((video, index) => (
                <Link 
                  to={video.link} 
                  key={index}
                  className="group flex flex-col hover:transform hover:scale-[1.01] transition-all"
                >
                  <div className="relative rounded-lg overflow-hidden aspect-video mb-3 bg-slate-200 dark:bg-slate-800">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-95 transition-opacity">
                      <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <h3 className="font-medium text-base text-slate-900 dark:text-white mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {video.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {video.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link 
                to="/resources/videos" 
                className="flex items-center gap-2 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium"
              >
                View all video tutorials
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </section>
          
          {/* Community and Other Resources */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Community Forums</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">Connect with other CloudStick users to share knowledge</p>
                </CardContent>
                <div className="p-4 pt-0 mt-auto">
                  <Link to="/community" className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                    Join our community →
                  </Link>
                </div>
              </Card>
              
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Sample Projects</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">Download and explore example applications built with CloudStick</p>
                </CardContent>
                <div className="p-4 pt-0 mt-auto">
                  <Link to="/resources/examples" className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                    Browse examples →
                  </Link>
                </div>
              </Card>
              
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Developer Blog</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">Tips, tricks and best practices from our engineering team</p>
                </CardContent>
                <div className="p-4 pt-0 mt-auto">
                  <Link to="/blog" className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                    Read our blog →
                  </Link>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;
