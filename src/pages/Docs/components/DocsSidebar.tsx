
import React from "react";
import { Link, useParams } from "react-router-dom";
import { File, FolderOpen } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categories } from "../data/docContent";

const DocsSidebar: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-800 h-full">
      <ScrollArea className="h-[calc(100vh-10rem)]">
        <div className="py-4 px-3">
          <h3 className="font-medium text-sm uppercase text-gray-500 dark:text-gray-400 mb-3 px-3">
            Documentation
          </h3>
          
          <nav className="space-y-1">
            {categories.map((cat) => (
              <div key={cat.id} className="mb-4">
                <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium">
                  <FolderOpen className="h-4 w-4 text-teal-500" />
                  <span className="capitalize">{cat.title}</span>
                </div>
                
                <ul className="mt-1 pl-5">
                  {cat.articles.map((article) => (
                    <li key={article.path}>
                      <Link
                        to={`/docs/${article.path}`}
                        className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          article.path.startsWith(category || "") 
                            ? "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 font-medium"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <File className="h-3.5 w-3.5 flex-shrink-0" />
                        <span className="truncate">{article.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default DocsSidebar;
