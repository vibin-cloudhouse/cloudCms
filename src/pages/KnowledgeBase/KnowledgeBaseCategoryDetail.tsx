import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { HelpArticle, HelpCategory } from "@/types/helpTypes";

const KnowledgeBaseCategoryDetail = () => {
  const  slug  = "api-1"
  const [category, setCategory] = useState<HelpCategory | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      if (!slug) return;

      try {
        const res = await axios.get(
          `https://strapnew.cloudstick.io/api/help-categories?populate[help_articles][fields]&populate[seo][fields]&populate[help_articles][populate]=media`
        );

        const data = res.data.data?.[0];
        if (data) {
          const attr = data.attributes;
          setCategory({
            id: data.id,
            title: attr.title,
            slug: attr.slug,
            description: attr.description,
            help_articles: attr.help_articles?.map((article: any) => ({
              id: article.id,
              title: article.title,
              slug: article.slug,
              updatedAt: article.updatedAt,
              content: article.content,
            })),
          });
        }
      } catch (err) {
        console.error("Failed to load category:", err);
      }
    };

    fetchCategory();
  }, [slug]);

  if (!category) return <div className="p-4">Loading or Invalid slug</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-teal-700">{category.title}</h1>
      <p className="text-gray-600 mt-1 mb-4">{category.description}</p>

      <ul className="space-y-4">
        {category.help_articles.map((article) => (
          <li key={article.id} className="border rounded p-4 bg-white shadow-sm">
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-500">
              Updated: {new Date(article.updatedAt).toLocaleDateString()}
            </p>
            <Link
              to={`/knowledge-base/article/${article.slug}`}
              className="text-teal-500 text-sm hover:underline"
            >
              Read article →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KnowledgeBaseCategoryDetail;
