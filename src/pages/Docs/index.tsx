
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DocsHero from "./components/DocsHero";
import DocsCategoriesGrid from "./components/DocsCategoriesGrid";
import PopularDocumentation from "./components/PopularDocumentation";
import VideoTutorials from "./components/VideoTutorials";
import AdditionalResources from "./components/AdditionalResources";

const DocsPage: React.FC = () => {

  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero section */}
        <DocsHero />
        
        <div className="container mx-auto max-w-7xl px-4 py-12">
          {/* Documentation categories */}
          <DocsCategoriesGrid />
          
          {/* Promoted Documentation */}
          <PopularDocumentation />
          
          {/* Documentation Resources - YouTube Style */}
          <VideoTutorials />
          
          {/* Community and Other Resources */}
          <AdditionalResources />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;
