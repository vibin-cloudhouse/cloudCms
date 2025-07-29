
import React from "react";
import { Link } from "react-router-dom";
import { File, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface ArticleLink {
  title: string;
  link: string;
}

export interface CategoryProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  articles: ArticleLink[];
}

const DocsCategoryCard: React.FC<CategoryProps> = ({ id, title, description, icon: Icon, articles }) => {
  return (
    <Card className="hover:shadow-lg transition-all border border-slate-200 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg text-[#006FEE] dark:text-teal-400">
            <Icon className="w-5 h-5" />
          </span>
          <Link to={`/docs/${id}`} className="hover:text-[#006FEE] dark:hover:text-teal-400 transition-colors">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-1">
          {articles.slice(0, 3).map((article, index) => (
            <li key={index} className="text-sm">
              <Link 
                to={article.link}
                className="hover:text-[#006FEE] dark:hover:text-teal-400 transition-colors flex items-center"
              >
                <File className="w-3 h-3 mr-2 inline flex-shrink-0" />
                <span>{article.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DocsCategoryCard;
