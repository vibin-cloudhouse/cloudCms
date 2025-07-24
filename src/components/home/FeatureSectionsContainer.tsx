// FeatureSectionsContainer.tsx
import { useState, useEffect } from "react";
import FeaturesSection from "./FeaturesSection"; // Assuming FeaturesSection is in the same directory

interface Feature {
  id: number;
  title: string;
  description: string;
  linkText?: string;
  linkurl?: string;
  icon: {
    url: string;
  };
}

interface SectionData {
  id: number; // Add id for key prop
  sectionLabel: string;
  mainHeading: string;
  description: string;
  features: Feature[];
}

const STRAPI_URL = "https://great-basket-5458a3b3d3.strapiapp.com"; // replace if deployed

const FeatureSectionsContainer = () => {
  const [sectionsData, setSectionsData] = useState<SectionData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllSectionsData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${STRAPI_URL}/api/feature-sections?populate[features][populate]=icon`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      const data = json.data; // Get all data
      console.log("Fetched feature sections data:", data);
      

      if (!data || data.length === 0) {
        setSectionsData(null);
        return;
      }

      const formattedSections: SectionData[] = data.map((section: any) => ({
        id: section.id, // Make sure to capture the id
        sectionLabel: section.sectionLabel?.trim() || "Features",
        mainHeading: section.mainHeading,
        description:
          section.description?.[0]?.children?.[0]?.text || "",
        features: section.features?.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description?.[0]?.children?.[0]?.text || "",
          linkText: item.linkText || "Learn more →",
          linkurl: item.linkurl || "#",
          icon: {
            url:
              STRAPI_URL +
              (item.icon?.formats?.thumbnail?.url || item.icon?.url || ""),
          },
        })),
      }));
      setSectionsData(formattedSections);
    } catch (error: any) {
      console.error("Error fetching feature sections:", error);
      setError("Failed to load feature sections. Please try again later.");
      setSectionsData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllSectionsData();
  }, []);

  if (isLoading) {
    // You can adapt your skeleton loading from FeaturesSection.tsx here
    // or create a more generic loading skeleton.
    return (
      <section className="py-20 md:py-32 bg-white dark:bg-slate-800 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-50 to-white dark:from-slate-900 dark:to-slate-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Skeleton for main heading and description */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 animate-pulse">
            <div className="inline-block px-4 py-1.5 mb-4 w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-6"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full mx-auto"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mx-auto mt-2"></div>
          </div>

          {/* Skeletons for feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => ( // Render 3 skeleton cards
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md animate-pulse"
              >
                <div className="w-10 h-10 mb-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 md:py-32 bg-white dark:bg-slate-800 relative text-center text-red-500 dark:text-red-400">
        <p>{error}</p>
      </section>
    );
  }

  if (!sectionsData || sectionsData.length === 0) {
    return (
      <section className="py-20 md:py-32 bg-white dark:bg-slate-800 relative text-center text-slate-500 dark:text-slate-400">
        <p>No feature sections available at the moment.</p>
      </section>
    );
  }

  return (
    <>
      {sectionsData.map((section) => (
        <FeaturesSection key={section.id} sectionData={section} />
      ))}
    </>
  );
};

export default FeatureSectionsContainer;