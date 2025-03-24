
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
