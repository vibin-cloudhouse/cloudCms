
export interface KBArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  createdAt: string;
  updatedAt: string;
  images: string[];
  relatedArticles?: string[];
  tags: string[];
}

export interface KBCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  articles: KBArticle[];
}

export const kbCategories: KBCategory[] = [
  {
    id: "1",
    name: "White-label",
    slug: "white-label",
    description: "Learn how to customize and rebrand CloudStick for your clients",
    icon: "palette",
    articles: [
      {
        id: "wl-1",
        title: "How to set up white-label for your clients",
        slug: "setup-white-label",
        excerpt: "Learn how to configure white-label settings for your client projects",
        content: `
# How to set up white-label for your clients

White-labeling allows you to customize the appearance of CloudStick to match your client's brand. This is perfect for agencies and consultants who want to provide a seamless branded experience.

## Prerequisites
- An active CloudStick Business or Enterprise account
- Admin access to the account
- Your client's branding assets (logo, colors, etc.)

## Step 1: Access White-Label Settings
Navigate to **Account Settings > White-Label** from your dashboard.

![White-label settings dashboard](https://images.unsplash.com/photo-1461749280684-dccba630e2f6)

## Step 2: Upload Client Logo
Click on the "Upload Logo" button and select your client's logo. Recommended dimensions are 200x60px.

- Supported formats: PNG, JPG, SVG
- Max file size: 2MB
- Transparent background recommended

## Step 3: Configure Brand Colors
Enter the hex codes for your client's brand colors:
- Primary Color: Used for buttons, links, and accents
- Secondary Color: Used for secondary elements
- Background Color: Used for the dashboard background

## Step 4: Customize Domain
To use a custom domain:
1. Go to **Domain Settings**
2. Enter your preferred subdomain
3. Update DNS records to point to CloudStick servers
4. Wait for DNS propagation (up to 48 hours)

## Step 5: Email Customization
Configure email templates with your client's branding:
1. Go to **Email Settings**
2. Upload header image
3. Customize email footer text
4. Preview and test emails

## Step 6: Testing
Test the white-labeled environment by accessing the client dashboard URL and verifying all branding elements appear correctly.

## Troubleshooting
- **Logo not appearing**: Ensure logo meets size requirements and file format
- **Custom domain not working**: Verify DNS settings are correct
- **Colors not updating**: Clear browser cache or try in incognito mode

For more advanced customization options, please contact our support team.
        `,
        category: "White-label",
        categorySlug: "white-label",
        createdAt: "2023-09-15",
        updatedAt: "2023-11-20",
        images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6"],
        relatedArticles: ["wl-2"],
        tags: ["white-label", "branding", "customization"]
      },
      {
        id: "wl-2",
        title: "Custom domain setup for white-label projects",
        slug: "custom-domain-setup",
        excerpt: "Configure custom domains for your white-labeled CloudStick instances",
        content: `
# Custom domain setup for white-label projects

Setting up custom domains for your white-labeled projects allows you to provide a fully branded experience for your clients. This guide walks you through the process of configuring custom domains for CloudStick.

## Prerequisites
- A Business or Enterprise CloudStick account
- A registered domain name
- Access to your domain's DNS settings

## Step 1: Add Custom Domain in CloudStick
1. Navigate to **Account Settings > White-Label > Domains**
2. Click "Add New Domain"
3. Enter your domain name (e.g., dashboard.clientname.com)

![Domain settings in CloudStick](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d)

## Step 2: Configure DNS Records
Add the following DNS records with your domain registrar:

**For subdomain (recommended):**
- Type: CNAME
- Name: dashboard (or your chosen subdomain)
- Value: proxy.cloudstick.com
- TTL: 3600 (or automatic)

**For apex domain:**
- Type: A
- Name: @
- Value: 123.456.789.10 (CloudStick IP address)
- TTL: 3600 (or automatic)

## Step 3: Verify Domain Ownership
1. Return to CloudStick domain settings
2. Click "Verify Domain"
3. CloudStick will check if DNS is properly configured

DNS changes can take up to 48 hours to propagate. If verification fails initially, try again later.

## Step 4: Set Up SSL Certificate
Once your domain is verified:
1. Go to **SSL Settings**
2. Choose "Auto-generate SSL" (recommended)
3. CloudStick will automatically issue and renew SSL certificates

## Step 5: Test the Custom Domain
1. Open your browser in incognito mode
2. Visit your custom domain URL
3. Verify that the CloudStick dashboard loads correctly
4. Check that SSL is working (look for the lock icon)

## Troubleshooting Common Issues
- **DNS validation fails**: Ensure records are entered correctly and wait for propagation
- **SSL certificate errors**: Verify that DNS is properly configured
- **Website not loading**: Check that your firewall isn't blocking the connection

## Advanced Configuration
For advanced setups like wildcard subdomains or multi-domain configurations, please contact our support team.
        `,
        category: "White-label",
        categorySlug: "white-label",
        createdAt: "2023-10-05",
        updatedAt: "2023-12-18",
        images: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"],
        relatedArticles: ["wl-1"],
        tags: ["white-label", "custom domain", "DNS", "SSL"]
      }
    ]
  },
  {
    id: "2",
    name: "Laravel",
    slug: "laravel",
    description: "Learn about Laravel integration and advanced features",
    icon: "code",
    articles: [
      {
        id: "laravel-1",
        title: "Setting up Laravel with CloudStick",
        slug: "setup-laravel",
        excerpt: "A complete guide to deploying Laravel applications on CloudStick",
        content: `
# Setting up Laravel with CloudStick

This guide provides step-by-step instructions for deploying a Laravel application on CloudStick's platform.

## Prerequisites
- A CloudStick account
- A Laravel application (5.8 or newer recommended)
- Git repository containing your Laravel code
- Basic knowledge of PHP and Laravel

## Step 1: Prepare Your Laravel Application
Ensure your Laravel application is ready for deployment:

1. Make sure your .env.example file contains all needed variables
2. Add a Procfile to your repository root with:
   \`\`\`
   web: vendor/bin/heroku-php-apache2 public/
   \`\`\`
3. Commit all changes to your git repository

## Step 2: Create a New CloudStick Project
1. Log in to CloudStick dashboard
2. Click "Create New Project"
3. Select "Laravel" from the project templates
4. Name your project and click "Create"

![Creating a new Laravel project](https://images.unsplash.com/photo-1518770660439-4636190af475)

## Step 3: Connect Your Git Repository
1. In your project dashboard, go to "Source Control"
2. Choose your git provider (GitHub, GitLab, or Bitbucket)
3. Authenticate with your git provider
4. Select the repository containing your Laravel code
5. Choose the branch you want to deploy

## Step 4: Configure Environment Variables
1. Go to "Project Settings > Environment Variables"
2. Add your Laravel environment variables:
   - APP_KEY: Your Laravel app key
   - APP_ENV: production
   - DB_CONNECTION: mysql
   - DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD

## Step 5: Database Setup
1. Go to "Database" in your project dashboard
2. Create a new MySQL database or connect an existing one
3. CloudStick will automatically update your environment variables with database credentials

## Step 6: Deploy Your Application
1. Go to "Deployments" in your project dashboard
2. Click "Deploy Now"
3. Wait for the build and deployment process to complete

## Step 7: Post-Deployment Tasks
After successful deployment, run necessary Laravel commands:

1. Go to "Console" in your project dashboard
2. Run migrations: \`php artisan migrate\`
3. Seed database if needed: \`php artisan db:seed\`
4. Clear cache: \`php artisan optimize:clear\`

## Troubleshooting
- **Build failures**: Check logs for errors in composer dependencies
- **Database connection issues**: Verify environment variables
- **500 errors**: Check Laravel logs in storage/logs/laravel.log

## Performance Optimization
For production applications, consider enabling:
1. Route caching: \`php artisan route:cache\`
2. Configuration caching: \`php artisan config:cache\`
3. CloudStick's built-in Redis cache

For more assistance, please contact our support team.
        `,
        category: "Laravel",
        categorySlug: "laravel",
        createdAt: "2023-05-10",
        updatedAt: "2023-11-28",
        images: ["https://images.unsplash.com/photo-1518770660439-4636190af475"],
        relatedArticles: [],
        tags: ["laravel", "deployment", "php", "setup"]
      }
    ]
  },
  {
    id: "3",
    name: "WordPress",
    slug: "wordpress",
    description: "WordPress installation, optimization and management guides",
    icon: "globe",
    articles: [
      {
        id: "wp-1",
        title: "How to install WordPress on CloudStick",
        slug: "install-wordpress",
        excerpt: "Step-by-step guide to installing WordPress on the CloudStick platform",
        content: `
# How to install WordPress on CloudStick

This comprehensive guide will walk you through installing WordPress on CloudStick's managed hosting platform.

## Prerequisites
- A CloudStick account
- A registered domain name (optional for testing)
- Basic understanding of WordPress concepts

## Step 1: Create a New WordPress Project
1. Log in to your CloudStick dashboard
2. Click "Create New Project"
3. Select "WordPress" from the application templates
4. Name your project and click "Create"

![WordPress installation dashboard](https://images.unsplash.com/photo-1461749280684-dccba630e2f6)

## Step 2: Configure Your WordPress Database
CloudStick automatically creates a MySQL database for your WordPress installation. You'll find the database credentials in your project settings.

1. Go to "Project Settings > Database"
2. Note the following information:
   - Database Name
   - Username
   - Password
   - Host
   
These credentials will be needed during the WordPress installation process.

## Step 3: WordPress Initial Setup
1. Once your project is created, click "Open Site"
2. You'll be redirected to the WordPress installation page
3. Select your preferred language and click "Continue"
4. Fill in the required information:
   - Site Title: Name of your WordPress site
   - Username: Admin username (avoid using "admin" for security)
   - Password: Secure password for admin account
   - Your Email: Used for admin notifications
5. Click "Install WordPress"

## Step 4: Connect Your Domain (Optional)
To use a custom domain with your WordPress site:

1. Go to "Project Settings > Domains"
2. Click "Add Domain"
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (up to 48 hours)

## Step 5: Install Essential Plugins
For optimal performance and security, we recommend installing these plugins:

1. Login to your WordPress admin panel
2. Go to "Plugins > Add New"
3. Search for and install:
   - Wordfence Security (security)
   - WP Super Cache (performance)
   - Yoast SEO (SEO optimization)
   - UpdraftPlus (backups)

## Step 6: Configure SSL
CloudStick provides free SSL certificates:

1. Go to "Project Settings > SSL"
2. Select "Auto-generate SSL certificate"
3. Click "Apply"

## Step 7: Enable Automatic Backups
1. Go to "Project Settings > Backups"
2. Enable daily automatic backups
3. Configure retention policy (how many backups to keep)

## Troubleshooting Common Issues
- **White screen of death**: Enable WP_DEBUG in wp-config.php
- **Database connection errors**: Verify database credentials
- **Slow loading times**: Check for plugin conflicts or enable caching

## Next Steps
Once your WordPress site is up and running, consider:
- Installing a theme
- Setting up essential pages (Home, About, Contact)
- Configuring permalinks for SEO
- Creating a content calendar

For more assistance, please contact our support team.
        `,
        category: "WordPress",
        categorySlug: "wordpress",
        createdAt: "2023-03-15",
        updatedAt: "2023-10-12",
        images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6"],
        relatedArticles: [],
        tags: ["wordpress", "installation", "setup", "cms"]
      }
    ]
  },
  {
    id: "4",
    name: "How to start",
    slug: "getting-started",
    description: "Getting started guides for CloudStick platform",
    icon: "play",
    articles: [
      {
        id: "gs-1",
        title: "Creating your first CloudStick project",
        slug: "first-project",
        excerpt: "Learn how to create and configure your first project on CloudStick",
        content: `
# Creating your first CloudStick project

This guide will walk you through creating your first project on the CloudStick platform, from signup to deployment.

## Prerequisites
- A CloudStick account (free trial or paid plan)
- Basic understanding of web development
- Source code for your application (optional)

## Step 1: Sign Up for CloudStick
If you haven't already:
1. Visit [cloudstick.com](https://cloudstick.com)
2. Click "Sign Up" or "Start Free Trial"
3. Enter your email and create a password
4. Verify your email address

## Step 2: Navigate to Dashboard
After logging in, you'll be taken to your dashboard.

1. Click "Create New Project" button
2. You'll see a list of project templates including:
   - Empty project
   - PHP/Laravel
   - Node.js
   - WordPress
   - Static site

![CloudStick dashboard](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d)

## Step 3: Choose a Project Type
For this guide, we'll select "Empty project":

1. Click on "Empty project"
2. Name your project (e.g., "My First Project")
3. Select a region closest to your users
4. Click "Create Project"

## Step 4: Set Up Your Project Environment
Once your project is created:

1. Go to "Project Settings" 
2. Configure basic settings:
   - Environment variables
   - PHP version (if applicable)
   - Node.js version (if applicable)
   - Memory and CPU allocation

## Step 5: Connect Your Code Repository
Connect your source code by:

1. Go to "Source Control"
2. Click "Connect Repository"
3. Choose your provider (GitHub, GitLab, or Bitbucket)
4. Authenticate with your account
5. Select the repository to connect
6. Choose branch to deploy

**Alternative**: If you don't have a repository, you can use SFTP or the built-in file manager.

## Step 6: Configure Build and Deploy Settings
1. Go to "Deployment Settings"
2. Configure build commands if needed:
   - For Node.js: \`npm install && npm run build\`
   - For PHP/Laravel: \`composer install\`
3. Set the public directory (e.g., "public" for Laravel, "dist" for Vue)

## Step 7: Deploy Your Project
1. Click "Deploy Now" button
2. CloudStick will pull your code, build it, and deploy it
3. You'll see build logs in real-time

## Step 8: Access Your Deployed Application
Once deployment is complete:
1. Click on "Open App" to view your live application
2. Your app is now accessible at \`yourproject.cloudstick.app\`

## Step 9: Configure Custom Domain (Optional)
To use your own domain:
1. Go to "Domains"
2. Click "Add Domain"
3. Enter your domain
4. Configure DNS settings as instructed

## Step 10: Monitoring and Logs
Start monitoring your application:
1. Go to "Monitoring" to see resource usage
2. Check "Logs" for application output and errors

## What's Next?
- Set up databases and storage
- Configure SSL certificates
- Set up CI/CD for automatic deployments
- Explore CloudStick's additional features

For more detailed documentation, visit our knowledge base or contact support.
        `,
        category: "How to start",
        categorySlug: "getting-started",
        createdAt: "2023-01-10",
        updatedAt: "2023-11-05",
        images: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"],
        relatedArticles: [],
        tags: ["getting started", "tutorial", "basics"]
      }
    ]
  },
  {
    id: "5",
    name: "Third-party integrations",
    slug: "integrations",
    description: "Guides for integrating CloudStick with other services and tools",
    icon: "puzzle",
    articles: []
  },
  {
    id: "6",
    name: "Mail",
    slug: "mail",
    description: "Setting up and configuring email services with CloudStick",
    icon: "mail",
    articles: []
  },
  {
    id: "7",
    name: "CloudFlare",
    slug: "cloudflare",
    description: "Configuring CloudFlare with CloudStick for enhanced security and performance",
    icon: "cloud",
    articles: []
  },
  {
    id: "8",
    name: "SSL",
    slug: "ssl",
    description: "SSL certificate management for your CloudStick applications",
    icon: "shield",
    articles: []
  },
  {
    id: "9",
    name: "Database",
    slug: "database",
    description: "Database setup, management and optimization guides",
    icon: "database",
    articles: []
  },
  {
    id: "10",
    name: "Backup",
    slug: "backup",
    description: "Setting up and managing backups for your CloudStick projects",
    icon: "save",
    articles: []
  },
  {
    id: "11",
    name: "Team",
    slug: "team",
    description: "Team collaboration and management features on CloudStick",
    icon: "users",
    articles: []
  },
  {
    id: "12",
    name: "Profile management",
    slug: "profile",
    description: "Managing your CloudStick profile and account settings",
    icon: "user",
    articles: []
  },
  {
    id: "13",
    name: "Firewall and security",
    slug: "security",
    description: "Security features and best practices for CloudStick projects",
    icon: "lock",
    articles: []
  },
  {
    id: "14", 
    name: "Server management",
    slug: "server",
    description: "Server configuration and management on CloudStick",
    icon: "server",
    articles: []
  },
  {
    id: "15",
    name: "Application management",
    slug: "application",
    description: "Managing your applications on the CloudStick platform",
    icon: "settings",
    articles: []
  }
];

// Helper function to get all articles across categories
export const getAllArticles = (): KBArticle[] => {
  return kbCategories.flatMap(category => category.articles);
};

// Helper function to get a specific category by slug
export const getCategoryBySlug = (slug: string): KBCategory | undefined => {
  return kbCategories.find(category => category.slug === slug);
};

// Helper function to get a specific article by slug and category
export const getArticleBySlug = (categorySlug: string, articleSlug: string): KBArticle | undefined => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.articles.find(article => article.slug === articleSlug);
};

// Helper function to get related articles
export const getRelatedArticles = (article: KBArticle): KBArticle[] => {
  if (!article.relatedArticles || article.relatedArticles.length === 0) {
    // If no specific related articles, get other articles from the same category
    return kbCategories
      .find(c => c.slug === article.categorySlug)?.articles
      .filter(a => a.id !== article.id)
      .slice(0, 3) || [];
  }
  
  const allArticles = getAllArticles();
  return article.relatedArticles
    .map(id => allArticles.find(a => a.id === id))
    .filter(a => a !== undefined) as KBArticle[];
};
