// src/components/Seo.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?:string;

  // Add more props for open graph, etc.
}

const Seo: React.FC<SeoProps> = ({ title, description,keywords }) => {
    console.log("metaTitle",title);
    
    const defaultTitle = 'Cloud Hosting cPanel | Cloud Server Management Panel | CloudStick'; // Your default title
  const defaultDescription = 'CloudStick is an All-in-one cloud hosting cpanel designed to manage servers from Digital Ocean, Linode, AWS, Google Cloud, Vultr, or any dedicated servers.'; // Your default description

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords&&<meta name='keywords' content={keywords}/>}
      {/* Add other meta tags here */}
    </Helmet>
  );
};

export default Seo;