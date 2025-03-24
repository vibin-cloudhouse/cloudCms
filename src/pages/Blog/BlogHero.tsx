
import React from "react";

const BlogHero: React.FC = () => {
  return (
    <div className="relative py-8 mb-8">
      <div className="gradient-blob w-96 h-96 -top-20 -right-20 opacity-10"></div>
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-8 gradient-heading">
          CloudStick Blog
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          Stay updated with the latest cloud storage insights, security tips, and product updates from our team.
        </p>
      </div>
    </div>
  );
};

export default BlogHero;
