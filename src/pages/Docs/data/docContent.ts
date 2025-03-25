// Documentation content types
export interface DocSection {
  title?: string;
  content?: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  codeBlock?: string;
  note?: string;
}

export interface RelatedDoc {
  title: string;
  description: string;
  path: string;
}

export interface Document {
  id: string;
  path: string;
  category: string;
  title: string;
  description: string;
  tags?: string[];
  updatedAt?: string;
  sections: DocSection[];
  relatedDocs?: RelatedDoc[];
}

// Sample documentation content
const documents: Document[] = [
  // Getting Started
  {
    id: "overview",
    path: "getting-started/overview",
    category: "getting-started",
    title: "CloudStick Overview",
    description: "An introduction to CloudStick and its core features",
    tags: ["Beginner", "Introduction"],
    updatedAt: "May 15, 2023",
    sections: [
      {
        title: "Introduction to CloudStick",
        content: [
          "CloudStick is a modern cloud storage and collaboration platform designed for individuals and teams who need secure, efficient access to their files from anywhere. Our platform combines the simplicity of traditional storage solutions with powerful collaboration features that help teams work together seamlessly.",
          "With CloudStick, you can store, sync, and share files across all your devices while maintaining enterprise-grade security and compliance."
        ],
        image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&auto=format&fit=crop&q=80",
        imageAlt: "CloudStick dashboard on laptop",
        imageCaption: "CloudStick's intuitive dashboard interface"
      },
      {
        title: "Key Features",
        content: [
          "CloudStick offers a comprehensive set of features designed to make file storage, sharing, and collaboration as simple and secure as possible:"
        ]
      },
      {
        title: "Secure Cloud Storage",
        content: [
          "At the core of CloudStick is our secure cloud storage system. All files are encrypted both in transit and at rest using AES-256 encryption, ensuring your data remains private and protected at all times.",
          "Our distributed storage architecture ensures high availability and redundancy, so your files are always accessible when you need them."
        ]
      },
      {
        title: "Cross-Platform Synchronization",
        content: [
          "CloudStick seamlessly synchronizes your files across all your devices - desktop, mobile, and web. Changes made on one device are instantly reflected across all others, ensuring you always have the most up-to-date version of your files.",
          "Our selective sync feature allows you to choose which folders are synchronized to specific devices, saving space on devices with limited storage."
        ],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
        imageAlt: "CloudStick sync across devices",
        imageCaption: "Seamless synchronization across all your devices"
      },
      {
        title: "Team Collaboration",
        content: [
          "CloudStick's collaboration features enable teams to work together effectively. Share folders with team members, set granular permissions, and track changes in real-time.",
          "Our commenting and notification systems keep everyone in the loop, reducing email clutter and ensuring important updates aren't missed."
        ]
      },
      {
        title: "Advanced Security",
        content: [
          "Security is at the heart of CloudStick. Beyond encryption, we offer:",
          "- Two-factor authentication",
          "- Single sign-on (SSO) integration",
          "- Detailed access logs",
          "- Remote device wiping",
          "- Compliance with major regulations like GDPR, HIPAA, and SOC 2"
        ],
        note: "CloudStick is SOC 2 Type II certified and GDPR compliant, making it suitable for organizations with strict compliance requirements."
      }
    ],
    relatedDocs: [
      {
        title: "Quick Start Guide",
        description: "Get up and running with CloudStick in minutes",
        path: "getting-started/quick-start"
      },
      {
        title: "Installation Guide",
        description: "How to install CloudStick on different platforms",
        path: "getting-started/installation"
      }
    ]
  },
  {
    id: "quick-start",
    path: "getting-started/quick-start",
    category: "getting-started",
    title: "Quick Start Guide",
    description: "Get up and running with CloudStick in minutes",
    tags: ["Beginner", "Setup"],
    updatedAt: "June 2, 2023",
    sections: [
      {
        title: "Getting Started with CloudStick",
        content: [
          "This quick start guide will help you set up and start using CloudStick in just a few minutes. Follow these simple steps to create your account, install the necessary applications, and begin storing and sharing your files securely."
        ]
      },
      {
        title: "Step 1: Create Your Account",
        content: [
          "1. Visit cloudstick.com and click on the 'Sign Up' button in the top right corner.",
          "2. Enter your email address, create a password, and click 'Create Account'.",
          "3. Check your email for a verification link and click it to activate your account.",
          "4. Complete your profile by adding your name and selecting your preferences."
        ],
        image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=800&auto=format&fit=crop&q=80",
        imageAlt: "CloudStick signup screen",
        imageCaption: "The CloudStick account creation page"
      },
      {
        title: "Step 2: Install CloudStick Applications",
        content: [
          "To get the most out of CloudStick, we recommend installing our applications on all your devices:",
          "- Desktop: Download the CloudStick desktop app for Windows, macOS, or Linux from our downloads page.",
          "- Mobile: Install the CloudStick mobile app from the Apple App Store or Google Play Store.",
          "- Web: Access CloudStick through any modern web browser at app.cloudstick.com."
        ],
        codeBlock: "# For Linux users, you can also install via command line:\n$ sudo apt-get update\n$ sudo apt-get install cloudstick"
      },
      {
        title: "Step 3: Set Up Your First Sync Folder",
        content: [
          "Once you've installed the desktop application:",
          "1. Launch the CloudStick desktop app and sign in with your account.",
          "2. The app will suggest a default location for your CloudStick folder, or you can choose a custom location.",
          "3. Click 'Set Up' to create your CloudStick folder.",
          "4. Any files you place in this folder will automatically sync to the cloud and your other devices."
        ]
      },
      {
        title: "Step 4: Upload and Share Your First File",
        content: [
          "Now that your account is set up, let's upload and share a file:",
          "1. Drag and drop a file into your CloudStick folder or use the web interface to upload a file.",
          "2. Right-click on the file (or select the sharing options in the web interface) and choose 'Share'.",
          "3. Enter the email address of the person you want to share with and set permissions (view or edit).",
          "4. Click 'Share' to send an invitation to the recipient."
        ],
        note: "When sharing sensitive files, consider setting an expiration date for the share link and requiring a password for access."
      },
      {
        title: "Next Steps",
        content: [
          "Congratulations! You've successfully set up CloudStick and shared your first file. Here are some next steps to explore:",
          "- Set up two-factor authentication for additional security",
          "- Create shared folders for team collaboration",
          "- Explore CloudStick's advanced features like file versioning and recovery",
          "- Configure backup settings for important folders on your computer"
        ]
      }
    ],
    relatedDocs: [
      {
        title: "CloudStick Overview",
        description: "Learn about CloudStick's core features and benefits",
        path: "getting-started/overview"
      },
      {
        title: "Installation Guide",
        description: "Detailed instructions for installing CloudStick on different platforms",
        path: "getting-started/installation"
      },
      {
        title: "First Project",
        description: "How to set up your first project in CloudStick",
        path: "getting-started/first-project"
      }
    ]
  },
  {
    id: "installation",
    path: "getting-started/installation",
    category: "getting-started",
    title: "Installation Guide",
    description: "How to install CloudStick on different platforms",
    tags: ["Setup", "Installation"],
    updatedAt: "July 10, 2023",
    sections: [
      {
        title: "CloudStick Installation Guide",
        content: [
          "This guide provides detailed instructions for installing CloudStick on various platforms including Windows, macOS, Linux, iOS, and Android. Follow the steps for your specific operating system to get started."
        ]
      },
      {
        title: "System Requirements",
        content: [
          "Before installing CloudStick, ensure your system meets these minimum requirements:",
          "- Windows: Windows 10 or newer, 2GB RAM, 500MB free disk space",
          "- macOS: macOS 10.13 (High Sierra) or newer, 2GB RAM, 500MB free disk space",
          "- Linux: Ubuntu 18.04+, Fedora 30+, or Debian 10+, 2GB RAM, 500MB free disk space",
          "- iOS: iOS 13 or newer",
          "- Android: Android 8.0 or newer"
        ]
      },
      {
        title: "Windows Installation",
        content: [
          "To install CloudStick on Windows:",
          "1. Download the installer from cloudstick.com/download",
          "2. Double-click the downloaded .exe file",
          "3. Follow the on-screen instructions in the installation wizard",
          "4. When prompted, choose whether to start CloudStick automatically at system startup",
          "5. Click 'Finish' to complete the installation and launch CloudStick"
        ],
        image: "https://images.unsplash.com/photo-1551116198-01d550c9809c?w=800&auto=format&fit=crop&q=80",
        imageAlt: "Windows installation screen",
        imageCaption: "CloudStick Windows installation wizard"
      },
      {
        title: "macOS Installation",
        content: [
          "To install CloudStick on macOS:",
          "1. Download the macOS installer from cloudstick.com/download",
          "2. Open the downloaded .dmg file",
          "3. Drag the CloudStick application to your Applications folder",
          "4. Launch CloudStick from your Applications folder or Launchpad",
          "5. When prompted, enter your system password to grant CloudStick the necessary permissions"
        ],
        note: "On macOS, you may need to modify your security settings to allow applications from identified developers. Go to System Preferences > Security & Privacy if you encounter any warnings."
      },
      {
        title: "Linux Installation",
        content: [
          "Install CloudStick on Linux using your distribution's package manager:"
        ],
        codeBlock: "# Ubuntu/Debian:\nsudo apt-get update\nsudo apt-get install cloudstick\n\n# Fedora:\nsudo dnf install cloudstick\n\n# Arch Linux:\nyay -S cloudstick"
      },
      {
        title: "Mobile Installation",
        content: [
          "Install CloudStick on your mobile devices:",
          "- iOS: Download CloudStick from the Apple App Store",
          "- Android: Download CloudStick from the Google Play Store",
          "After installation, open the app and sign in with your CloudStick account credentials."
        ]
      },
      {
        title: "Verifying Your Installation",
        content: [
          "To verify that CloudStick is installed correctly:",
          "1. Launch the CloudStick application",
          "2. Sign in with your account credentials",
          "3. Confirm that the CloudStick icon appears in your system tray or status bar",
          "4. Create or open your CloudStick folder and verify that you can add files",
          "5. Check that files added to your CloudStick folder appear in your online account"
        ]
      },
      {
        title: "Troubleshooting Common Installation Issues",
        content: [
          "If you encounter problems during installation:",
          "- Ensure you have administrator/root privileges when installing",
          "- Temporarily disable antivirus software which might block the installation",
          "- Check your internet connection",
          "- Verify that your system meets the minimum requirements",
          "- Clear your browser cache if downloading the installer repeatedly fails",
          "For additional help, visit our troubleshooting guide or contact support."
        ]
      }
    ],
    relatedDocs: [
      {
        title: "Quick Start Guide",
        description: "Get up and running with CloudStick in minutes",
        path: "getting-started/quick-start"
      },
      {
        title: "CloudStick Overview",
        description: "Learn about CloudStick's core features and benefits",
        path: "getting-started/overview"
      }
    ]
  },
  // Add more documents for other categories...
  {
    id: "architecture",
    path: "core-concepts/architecture",
    category: "core-concepts",
    title: "CloudStick Architecture",
    description: "Understanding the technical architecture behind CloudStick",
    tags: ["Technical", "Advanced"],
    updatedAt: "August 5, 2023",
    sections: [
      {
        title: "CloudStick Architecture Overview",
        content: [
          "This document provides an in-depth look at CloudStick's technical architecture, explaining how our platform ensures security, reliability, and performance at scale."
        ],
        image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&auto=format&fit=crop&q=80",
        imageAlt: "Architecture diagram",
        imageCaption: "High-level overview of CloudStick's architecture"
      },
      {
        title: "Distributed Storage System",
        content: [
          "CloudStick uses a distributed storage system that splits files into encrypted chunks and distributes them across multiple storage nodes. This approach offers several advantages:",
          "- Improved reliability through redundancy",
          "- Better performance through parallel operations",
          "- Enhanced security through data fragmentation",
          "- Efficient use of storage resources"
        ]
      },
      {
        title: "Security Layer",
        content: [
          "Security is implemented at multiple levels within the CloudStick architecture:",
          "1. Transport Layer: All communication uses TLS 1.3 to secure data in transit",
          "2. Authentication Layer: Handles user authentication, 2FA, and session management",
          "3. Authorization Layer: Enforces permissions and access controls",
          "4. Encryption Layer: Manages encryption/decryption of file chunks",
          "5. Audit Layer: Logs all system access and changes for compliance and security monitoring"
        ],
        codeBlock: "// Example of CloudStick's encryption implementation\nfunction encryptFileChunk(chunk, key) {\n  const iv = crypto.randomBytes(16);\n  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);\n  \n  let encrypted = cipher.update(chunk);\n  encrypted = Buffer.concat([encrypted, cipher.final()]);\n  \n  return {\n    encryptedData: encrypted,\n    iv: iv,\n    authTag: cipher.getAuthTag()\n  };\n}"
      }
    ],
    relatedDocs: [
      {
        title: "Security Features",
        description: "Detailed information about CloudStick's security features",
        path: "guides/security-features"
      }
    ]
  }
  // You can add more documents as needed
];

// Create categories array for sidebar navigation
export const categories = [
  {
    id: "getting-started",
    title: "Getting Started",
    articles: [
      { title: "CloudStick Overview", path: "getting-started/overview" },
      { title: "Quick Start Guide", path: "getting-started/quick-start" },
      { title: "Installation", path: "getting-started/installation" },
      { title: "First Project", path: "getting-started/first-project" },
    ]
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    articles: [
      { title: "Architecture", path: "core-concepts/architecture" },
      { title: "Project Structure", path: "core-concepts/project-structure" },
      { title: "Configuration", path: "core-concepts/configuration" },
      { title: "Deployment", path: "core-concepts/deployment" },
    ]
  },
  {
    id: "guides",
    title: "Guides",
    articles: [
      { title: "Deploying Applications", path: "guides/deploying" },
      { title: "Custom Domains", path: "guides/domains" },
      { title: "Environment Variables", path: "guides/environment-variables" },
      { title: "Scaling Applications", path: "guides/scaling" },
    ]
  },
  {
    id: "api-reference",
    title: "API Reference",
    articles: [
      { title: "Authentication", path: "api/authentication" },
      { title: "Projects", path: "api/projects" },
      { title: "Deployments", path: "api/deployments" },
      { title: "Users & Teams", path: "api/users" },
    ]
  },
  {
    id: "faq",
    title: "FAQ & Troubleshooting",
    articles: [
      { title: "Common Issues", path: "faq/common-issues" },
      { title: "Error Codes", path: "faq/error-codes" },
      { title: "Best Practices", path: "faq/best-practices" },
      { title: "Support Resources", path: "faq/support" },
    ]
  }
];

// Helper functions to retrieve document data
export const getDocumentByPath = (path: string): Document | undefined => {
  return documents.find(doc => doc.path === path);
};

export const getDocumentsByCategory = (category: string): Document[] => {
  return documents.filter(doc => doc.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(documents.map(doc => doc.category));
  return Array.from(categories);
};

export const getNextAndPreviousDocuments = (currentPath: string): { prevDoc?: { title: string; path: string }; nextDoc?: { title: string; path: string } } => {
  const index = documents.findIndex(doc => doc.path === currentPath);
  
  if (index === -1) return { prevDoc: undefined, nextDoc: undefined };
  
  const prevDoc = index > 0 ? { 
    title: documents[index - 1].title, 
    path: documents[index - 1].path 
  } : undefined;
  
  const nextDoc = index < documents.length - 1 ? { 
    title: documents[index + 1].title, 
    path: documents[index + 1].path 
  } : undefined;
  
  return { prevDoc, nextDoc };
};
