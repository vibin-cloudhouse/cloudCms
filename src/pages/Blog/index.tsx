import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogHero from "./BlogHero";
import BlogList from "./BlogList";
// import { blogPosts } from "./data/blogPosts"; // No longer needed, BlogList fetches its own data

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // filteredPosts logic is now handled inside BlogList component
  // as it fetches and filters its own data based on category and search term.

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <BlogHero onSearch={handleSearch} />
            <BlogList searchTerm={searchTerm} /> {/* Pass searchTerm to BlogList */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;