// src/components/DefaultSeo.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const DefaultSeo: React.FC = () => (
  <Helmet>
    <title>Cloud Hosting cPanel | Cloud Server Management Panel | CloudStick</title>
    <meta name="description" content="CloudStick is an All-in-one cloud hosting cpanel designed to manage servers from Digital Ocean, Linode, AWS, Google Cloud, Vultr, or any dedicated servers." />
    {/*
      Add other default meta tags here, such as:
      <meta property="og:title" content="Your Website Name" />
      <meta property="og:description" content="This is the default description for your website." />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta name="twitter:card" content="summary_large_image" />
    */}
  </Helmet>
);

export default DefaultSeo;