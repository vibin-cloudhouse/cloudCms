
import React from "react";
import { Link } from "react-router-dom";
import { File, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface sub_docs {
  id: number;
  heading: string;
  description: string;
  keywords: any;
  slug: string;
  content : any;
  seo:any;
  updated_at:string;
}

export interface CategoryProps {
  id: number;
  heading: string;
  description: string;
  icon: string;
  sub_docs:sub_docs[];
  seo:{
    title: string;
    description: string;
    keywords: string[];
  };
  slug: string;
  ispopular:boolean;
}

const DocsCategoryCard: React.FC<CategoryProps> = ({ id, heading, description, icon, sub_docs,slug }) => {
  return (
    <Card className="hover:shadow-lg transition-all border border-slate-200 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg text-[#006FEE] dark:text-teal-400">
            <img src={icon} className="w-5 h-5" />
          </span>
          <Link to={`/docs/${slug}`} className="hover:text-[#006FEE] dark:hover:text-teal-400 transition-colors">
            {heading}
          </Link>
        </CardTitle>
        <CardDescription className="mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-1">
          {sub_docs.slice(0, 3).map((article, index) => (
            <li key={index} className="text-sm">
              <Link 
                to={`/docs/${slug}/${article.slug}`}
                className="hover:text-[#006FEE] dark:hover:text-teal-400 transition-colors flex items-center"
              >
                <File className="w-3 h-3 mr-2 inline flex-shrink-0" />
                <span>{article.heading}</span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DocsCategoryCard;
