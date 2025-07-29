
import React from "react";
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "./types";
import { Link } from "react-router-dom";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-slate-200 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800 group">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-medium py-1 px-3 rounded-full shadow-sm">
            {post.category}
          </div>
        </div>
      </Link>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#006FEE] dark:group-hover:text-teal-400 transition-colors line-clamp-2">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 mt-2 text-slate-600 dark:text-slate-300">{post.excerpt}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="prose-sm text-slate-600 dark:text-slate-300 line-clamp-3">
          {post.content.slice(0, 120)}...
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1.5">
          <User size={14} className="text-teal-500" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar size={14} className="text-teal-500" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={14} className="text-teal-500" />
          <span>{post.readTime} min read</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
