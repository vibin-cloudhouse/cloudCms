import React from "react";
import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FormattedBlog } from "./types";
import backgroundImage from "../../../public/lovable-uploads/40454896_8851051.jpg";


interface BlogPostCardProps {
  post: FormattedBlog;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      console.error("Error formatting date:", e);
      return "Invalid Date";
    }
  };

  const estimateReadTime = (content: FormattedBlog['blogContent']) => {
    const wordsPerMinute = 200;
    const totalWords = content.reduce((acc, block) => acc + (block.content ? block.content.split(/\s+/).length : 0), 0);
    return Math.ceil(totalWords / wordsPerMinute);
  };


  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-slate-200 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800 group">
      <Link to={`/blog/${post?.slug}`} className="block">
        <div className="relative h-52 overflow-hidden group">
  <img
    src={backgroundImage}
    alt=""
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  <img
    src={post?.bannerUrl || 'placeholder-image-url.jpg'}
    alt={post?.bannerAltText || post?.heading}
    className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
  />

  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

  {post?.category && (
    <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-medium py-1 px-3 rounded-full shadow-sm z-30">
      {post.category}
    </div>
  )}
</div>

      </Link>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#006FEE] dark:group-hover:text-teal-400 transition-colors line-clamp-2">
          <Link to={`/blog/${post?.slug}`}>{post?.heading}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 mt-2 text-slate-600 dark:text-slate-300">{post?.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="prose-sm text-slate-600 dark:text-slate-300 line-clamp-3">
          {post?.description.slice(0, 120)}...
        </div>
      </CardContent>

      <CardFooter className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1.5">
          <User size={14} className="text-teal-500" />
          <span>{post?.username || "Unknown Author"}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar size={14} className="text-teal-500" />
          <span>{formatDate(post?.createdAt)}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={14} className="text-teal-500" />
          <span>{estimateReadTime(post?.blogContent)} min read</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;