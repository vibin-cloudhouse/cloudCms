
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  coverImage: string;
}

export interface FormattedBlog {
  id: number;
  documentId: string;
  heading: string; // Corresponds to 'Heading' in API response
  slug: string;
  seo:any;
  description: string;
  category: string;
  username: string; // Corresponds to 'Username' in API response
  bannerUrl: string | null;
  bannerAltText: string;
  blogContent: Array<{
    id: number;
    heading: string;
    content: string;
    imageTagText: string;
    image: string | null; // This will be the full URL
    imageAltText: string;
  }>;
  createdAt?: string; // Add createdAt to be used for date display
}