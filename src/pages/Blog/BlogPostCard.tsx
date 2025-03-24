
import React from "react";
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "./types";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-slate-200 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs py-1 px-2 rounded-full">
          {post.category}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors line-clamp-2">
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </CardTitle>
        <CardDescription className="line-clamp-2 mt-2">{post.excerpt}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="prose-sm text-slate-600 dark:text-slate-300 line-clamp-3">
          {post.content.slice(0, 120)}...
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1">
          <User size={14} />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{post.readTime} min read</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
