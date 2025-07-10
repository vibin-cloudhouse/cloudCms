
export interface HelpArticle {
  id: number;
  title: string;
  slug: string;
  updatedAt: string;
  content: any;
}

export interface HelpCategory {
  id: number;
  title: string;
  slug: string;
  description: any;
  help_articles: HelpArticle[];
}
