
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { 
  Facebook, 
  Linkedin, 
  Mail, 
  Bookmark, 
  MessageSquare, 
  Calendar, 
  Clock, 
  User,
  Share2,
  ThumbsUp,
  ChevronLeft
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { blogPosts } from "./data/blogPosts";
import { BlogPost } from "./types";

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<{
    id: number;
    name: string;
    text: string;
    date: string;
    avatar: string;
  }[]>([
    {
      id: 1,
      name: "Alex Johnson",
      text: "This is really helpful information! I've been struggling with WordPress installation for a while.",
      date: "2 days ago",
      avatar: "AJ"
    },
    {
      id: 2,
      name: "Sarah Miller",
      text: "Great article! The screenshots made the process so much clearer to follow.",
      date: "1 week ago",
      avatar: "SM"
    }
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(15);

  useEffect(() => {
    if (slug) {
      // Find the post with matching slug
      const foundPost = blogPosts.find(p => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
        
        // Find related posts (same category, excluding current post)
        const related = blogPosts
          .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
        
        // Scroll to top
        window.scrollTo(0, 0);
      }
    }
  }, [slug]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !commentText.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to post a comment.",
        variant: "destructive"
      });
      return;
    }
    
    // Add new comment
    const newComment = {
      id: comments.length + 1,
      name: name,
      text: commentText,
      date: "Just now",
      avatar: name.split(' ').map(n => n[0]).join('').toUpperCase()
    };
    
    setComments([newComment, ...comments]);
    setCommentText("");
    setName("");
    setEmail("");
    
    toast({
      title: "Comment posted",
      description: "Your comment has been added successfully!",
    });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || "Blog post";
    
    let shareUrl = "";
    
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`;
        break;
      default:
        shareUrl = url;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
    
    toast({
      title: "Shared!",
      description: `Shared via ${platform}`,
    });
  };

  const handleLike = () => {
    if (!liked) {
      setLikeCount(prev => prev + 1);
    } else {
      setLikeCount(prev => prev - 1);
    }
    setLiked(!liked);
  };

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold">Blog post not found</h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                The article you're looking for doesn't seem to exist.
              </p>
              <Button asChild className="mt-6">
                <Link to="/blog">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to all articles
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation back to all blogs */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="pl-0">
              <Link to="/blog">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </Button>
          </div>
          
          {/* Article header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-400 px-2 py-1 rounded-full text-xs">
                {post.category}
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="rounded-xl overflow-hidden mb-10">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
          
          {/* Article content */}
          <article className="prose prose-slate dark:prose-invert max-w-none mb-16">
            {/* Sample content for a WordPress installation tutorial */}
            <h2>Introduction to WordPress</h2>
            <p>WordPress is a powerful content management system that powers over 40% of all websites on the internet. In this tutorial, we'll walk through the complete installation process step by step.</p>
            
            <h3>What You'll Need</h3>
            <ul>
              <li>A domain name</li>
              <li>Web hosting that meets WordPress requirements</li>
              <li>Access to your web server (via FTP or file manager)</li>
              <li>A database for WordPress</li>
            </ul>
            
            <h3>Step 1: Download WordPress</h3>
            <p>First, download the latest version of WordPress from the official website. You'll get a zip file containing all the necessary files.</p>
            
            <div className="not-prose bg-slate-100 dark:bg-slate-800 rounded-lg p-4 my-6">
              <img src={post.coverImage} alt="WordPress download page" className="rounded-md w-full" />
              <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">Screenshot: WordPress download page</p>
            </div>
            
            <h3>Step 2: Create a Database</h3>
            <p>Log in to your hosting control panel and create a new MySQL database and user. Make sure to note down the database name, username, password, and host as you'll need these later.</p>
            
            <div className="not-prose bg-slate-100 dark:bg-slate-800 rounded-lg p-4 my-6">
              <img src={post.coverImage} alt="Creating MySQL database" className="rounded-md w-full" />
              <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">Screenshot: Creating a MySQL database in cPanel</p>
            </div>
            
            <h3>Step 3: Upload WordPress Files</h3>
            <p>Extract the WordPress zip file you downloaded and upload all files to your web server using FTP or your hosting file manager.</p>
            
            <h3>Step 4: Run the Installation</h3>
            <p>Navigate to your domain in a web browser to start the installation process. WordPress will guide you through setting up your database connection, creating an admin account, and configuring basic site settings.</p>
            
            <div className="not-prose bg-slate-100 dark:bg-slate-800 rounded-lg p-4 my-6">
              <img src={post.coverImage} alt="WordPress installation screen" className="rounded-md w-full" />
              <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">Screenshot: WordPress installation wizard</p>
            </div>
            
            <h3>Step 5: Log In and Start Building</h3>
            <p>Once installation is complete, you can log in to your WordPress admin dashboard and start building your website.</p>
            
            <h2>Common Issues and Troubleshooting</h2>
            <p>Sometimes you might encounter issues during installation. Here are solutions to the most common problems:</p>
            
            <h3>Database Connection Errors</h3>
            <p>Double-check your database credentials in the wp-config.php file. Make sure the database server is running and that the user has proper permissions.</p>
            
            <h3>Permission Issues</h3>
            <p>WordPress needs specific file permissions to work correctly. Generally, directories should be set to 755 and files to 644.</p>
            
            <div className="not-prose bg-slate-100 dark:bg-slate-800 rounded-lg p-4 my-6">
              <img src={post.coverImage} alt="File permissions" className="rounded-md w-full" />
              <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">Screenshot: Setting file permissions via FTP</p>
            </div>
            
            <h2>Conclusion</h2>
            <p>WordPress installation is straightforward once you know the steps. With your new WordPress site up and running, you can now explore themes, plugins, and start creating content for your audience.</p>
            
            <p>If you have any questions or run into issues not covered in this guide, feel free to leave a comment below!</p>
          </article>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Share and engagement */}
          <div className="flex items-center justify-between py-6 border-t border-b border-slate-200 dark:border-slate-800 mb-10">
            <div className="flex items-center gap-6">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-2 ${liked ? 'text-[#006FEE] dark:text-teal-400' : 'text-slate-600 dark:text-slate-400'}`}
              >
                <ThumbsUp size={20} className={liked ? 'fill-[#006FEE] dark:fill-teal-400' : ''} />
                <span>{likeCount}</span>
              </button>
              <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MessageSquare size={20} />
                <span>{comments.length}</span>
              </button>
              <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Bookmark size={20} />
                <span>Save</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleShare("facebook")}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400"
                >
                  <Facebook size={16} />
                </button>
                <button 
                  onClick={() => handleShare("linkedin")}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400"
                >
                  <Linkedin size={16} />
                </button>
                <button 
                  onClick={() => handleShare("email")}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400"
                >
                  <Mail size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Comments section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>
            
            {/* Comment form */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl mb-8">
              <h4 className="text-lg font-semibold mb-4">Leave a comment</h4>
              <form onSubmit={handleCommentSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <Input 
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input 
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Your email (won't be published)"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-sm font-medium mb-1">Comment</label>
                  <Textarea 
                    id="comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Share your thoughts..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit">Post Comment</Button>
              </form>
            </div>
            
            {/* Comment list */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <Avatar>
                    <AvatarFallback>{comment.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="font-semibold">{comment.name}</h5>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{comment.date}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div className="h-40 overflow-hidden rounded-lg mb-3">
                      <img 
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold group-hover:text-[#006FEE] dark:group-hover:text-teal-400 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {relatedPost.excerpt.substring(0, 80)}...
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;
