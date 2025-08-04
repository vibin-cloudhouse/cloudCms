import { Card } from "@/components/ui/card";
import { HelpCategory } from "@/types/helpTypes";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  category: HelpCategory;
}
const baseUrl = import.meta.env.VITE_APP_DEV_URL || "https://strapnew.cloudstick.io";

const KnowledgeBaseCategory: React.FC<Props> = ({ category }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Normalize description
  const currentDescription = typeof category.description === "string"
    ? category.description.trim()
    : "";

  // Cutoff character length for "see more"
  const cutoffLength = 100;

  const isDescriptionLong = currentDescription.length > cutoffLength;

  const displayedText = showFullDescription
    ? currentDescription
    : currentDescription.slice(0, cutoffLength);

  return (
    <Card className="hover:shadow-lg transition-all border border-slate-200 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800 p-4 rounded-lg">
      <div className="flex gap-2 items-center">
        <img className=" w-5 h-5" src={`${baseUrl}${category.icon?.url}`} alt="" />
      <Link to={`/knowledgebase/${category.slug}`} className="hover:text-[#006FEE] text-2xl font-semibold dark:hover:text-teal-400 transition-colors">{category.title}</Link>

      </div>

      {/* <p className="text-sm text-gray-500 mt-1">
        {displayedText}
        {isDescriptionLong && !showFullDescription && "..."}
        {isDescriptionLong && (
          <span
            className="text-teal-500 cursor-pointer hover:underline ml-1"
            onClick={() => setShowFullDescription(prev => !prev)}
          >
            {showFullDescription ? "see less" : "see more"}
          </span>
        )}
      </p> */}

      <ul className="mt-3 text-sm space-y-1 font-">
        {category.help_articles && category.help_articles?.length > 0 ? (
          category.help_articles.slice(0, 2).map((article) => (
            <li>            <Link to={`/knowledgebase/${category.slug}/${article.slug}`} className="hover:text-teal-400 cursor-pointer" key={article.id}>➜ {article.title}</Link>
</li>
          ))
          
        ) : (
          <li className="text-gray-500">No articles in this category.</li>
        )}
        {category.help_articles?.length > 2 && (
          <li className="text-gray-500">
            + {category.help_articles?.length - 2} more articles
          </li>
        )}
      </ul>

      <a
        href={`/knowledgebase/${category.slug}`}
        className="inline-block mt-3 text-[#006FEE] hover:text-teal-700 text-sm hover:underline"
      >
        View all articles ({category.help_articles?.length}) →
      </a>
    </Card>
  );
};

export default KnowledgeBaseCategory;
