
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogHero from "./BlogHero";
import BlogList from "./BlogList";
import { blogPosts } from "./data/blogPosts";

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredPosts = searchTerm 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    : blogPosts;

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <BlogHero onSearch={handleSearch} />
            <BlogList posts={filteredPosts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
