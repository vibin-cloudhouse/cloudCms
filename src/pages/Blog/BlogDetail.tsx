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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { FormattedBlog } from "./types";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import backgroundImage from "../../../public/lovable-uploads/40454896_8851051.jpg";
import Seo from "@/components/Seo";



const BASE_STRAPI_URL = "https://strapnew.cloudstick.io";

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { toast } = useToast();

  const [post, setPost] = useState<FormattedBlog | null>(null);
  console.log("post",post?.seo?.metaTitle,post);

  const [relatedPosts, setRelatedPosts] = useState<FormattedBlog[]>([]);
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      setError(null);
      axios.get(
        `${BASE_STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate[banner]=true&populate[blogcontent][fields]=heading,content,imageTagText&populate[blogcontent][populate]=image&populate[seo][fields]`
      )
      .then(res => {
        if (res.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
          const item = res.data.data[0];
          const formattedItem: FormattedBlog = {
            id: item.id,
            documentId: item.documentId,
            heading: item?.Heading || "Untitled Blog",
            slug: item?.slug,
            seo:item?.seo,
            description: item?.description || "No description available.",
            category: item?.category,
            username: item?.Username,
            bannerUrl: item?.banner?.url ? `${BASE_STRAPI_URL}${item.banner.url}` : null,
            bannerAltText: item?.banner?.alternativeText || "Blog banner image",
            blogContent: item?.blogcontent?.map((contentItem: any) => ({
              id: contentItem.id,
              heading: contentItem.heading || "Untitled Content",
              content: contentItem.content || "",
              imageTagText: contentItem.imageTagText || "",
              images: contentItem.image? contentItem?.image?.map((image)=>
                      `https://strapnew.cloudstick.io${image?.url}`
                      ) : null,
              imageAltText: contentItem.image?.[0]?.alternativeText || "Blog content image",
            })) || [],
            createdAt: item?.createdAt,
          };
          setPost(formattedItem);

          return axios.get(
            `${BASE_STRAPI_URL}/api/blogs?filters[category][$eq]=${formattedItem.category}&filters[id][$ne]=${formattedItem.id}&populate[banner]=true&pagination[limit]=3`
          );
        } else {
          setPost(null);
          setLoading(false);
          setError("Blog post not found.");
          console.warn("BlogDetail: No post found for slug:", slug, res.data);
        }
      })
      .then(relatedRes => {
        if (relatedRes && relatedRes.data && Array.isArray(relatedRes.data.data)) {
          const formattedRelated = relatedRes.data.data.map((item: any) => ({
            id: item.id,
            documentId: item.documentId,
            heading: item?.Heading || "Untitled Blog",
            slug: item?.slug,
            description: item?.description || "No description available.",
            category: item?.category,
            username: item?.Username,
            bannerUrl: item?.banner?.url ? `${BASE_STRAPI_URL}${item.banner.url}` : null,
            bannerAltText: item?.banner?.alternativeText || "Blog banner image",
            blogContent: [],
            createdAt: item?.createdAt,
          }));
          setRelatedPosts(formattedRelated);
        }
      })
      .catch(err => {
        console.error("BlogDetail: Error fetching data:", err);
        setError("Failed to fetch blog post. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
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
    const title = post?.heading || "Blog post";

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

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      return "Invalid Date";
    }
  };

  const estimateReadTime = (content: FormattedBlog['blogContent']) => {
    const wordsPerMinute = 200;
    const totalWords = content.reduce((acc, block) => acc + (block.content ? block.content.split(/\s+/).length : 0), 0);
    return Math.ceil(totalWords / wordsPerMinute);
  };

  if (loading) {
    return (
      <>
        <Header />
              <Seo title={post?.seo?.metaTitle} description={post?.seo?.metaDescription}/>

        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <p className="text-gray-600 dark:text-gray-300">Loading blog post...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
                    <Seo title={post?.seo?.metaTitle} description={post?.seo?.metaDescription}/>

        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold">Blog post not found</h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {error || "The article you're looking for doesn't seem to exist."}
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
                  <Seo title={post?.seo?.metaTitle} description={post?.seo?.metaDescription}/>

      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild className="pl-0">
              <Link to="/blog">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </Button>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.heading}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.username}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(post.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{estimateReadTime(post.blogContent)} min read</span>
              </div>
              {post.category && (
                <div className="flex items-center gap-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-400 px-2 py-1 rounded-full text-xs">
                  {post.category}
                </div>
              )}
            </div>
          </div>

          {post.bannerUrl && (
            <div className="rounded-xl overflow-hidden mb-10">
              <img
                src={post.bannerUrl}
                alt={post.bannerAltText || post.heading}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          )}

          <article className="prose prose-slate dark:prose-invert max-w-none mb-16">
            {post.blogContent.map((block,index) => {
                const content = block.content?.trim();
    const isIframe = content?.startsWith("<iframe");
              return(
              <div key={block.id}>
                {block.heading && <h3>{block.heading}</h3>}
                {block.content && <div key={index} className="">
                        {isIframe ? (
                          <div
                            className="w-full max-w-5xl"
                            dangerouslySetInnerHTML={{
                              __html: block.content.replace(
                                /<iframe /,
                                `<iframe class="w-full h-[400px]" `
                              ),
                            }}
                          />
                        ) : (
                          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {block.content}
                          </ReactMarkdown>
                        )}
                      </div>}
                {block.images && block.images?.map((image)=>(<div className="not-prose bg-slate-100 dark:bg-slate-800 rounded-lg p-4 my-6">
                    <img src={image} alt={block.imageAltText || block.heading} className="rounded-md w-full" />
                    {block.imageTagText && <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">{block.imageTagText}</p>}
                  </div>))}
              </div>
            )})}
             {post.blogContent.length === 0 && post.description && (
                <p>{post.description}</p>
             )}
          </article>

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

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>

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
                        src={relatedPost.bannerUrl || 'placeholder-image-url.jpg'}
                        alt={relatedPost.bannerAltText || relatedPost.heading}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold group-hover:text-[#006FEE] dark:group-hover:text-teal-400 transition-colors">
                      {relatedPost.heading}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {relatedPost.description.substring(0, 80)}...
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