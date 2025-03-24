
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogHero from "./BlogHero";
import BlogList from "./BlogList";
import { blogPosts } from "./data/blogPosts";

const Blog: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            <BlogHero />
            <BlogList posts={blogPosts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
