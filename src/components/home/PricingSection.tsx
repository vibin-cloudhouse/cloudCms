
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for individuals and small personal projects.", // Description based on common free tier offerings, not explicitly in image
      features: [
        { text: "1 Server" },
        { text: "One Hosting Account" },
        { text: "Custom SSL Only" },
        { text: "Server Firewall" },
        { text: "Sub Domains" },
        { text: "EasyPHP" },
        { text: "User Quota" },
        { text: "Multiple PHP Versions" },
        { text: "Git Deployment" },
        { text: "SFTP & Additional FTP Accounts" }
      ],
      buttonText: "More",
      buttonVariant: "outline", // Assuming "More" button is similar to "Sign Up Free"
      animationDelay: "0s"
    },
    {
      name: "Basic",
      price: "$8.00",
      period: "/month",
      description: "For startups and growing projects with more needs.", // Description based on common basic tier offerings, not explicitly in image
      features: [
        { text: "1 Server" },
        { text: "Unlimited Hosting Accounts" },
        { text: "One-click Free SSL" },
        { text: "Server Firewall" },
        { text: "WordPress Manager" },
        { text: "EasyPHP" },
        { text: "User Quota" },
        { text: "Multiple PHP Versions" },
        { text: "Git Deployment" },
        { text: "Email" },
        { text: "SFTP & Additional FTP Accounts" },
        { text: "5GB Free Backup" },
        { text: "Web application Clone" }
      ],
      buttonText: "More",
      buttonVariant: "outline", // Assuming "More" button is similar to "Get Started"
      animationDelay: "0.1s"
    },
    {
      name: "Pro",
      price: "$15.00",
      period: "/month",
      description: "For growing businesses with multiple servers and advanced needs.", // Description based on common pro tier offerings, not explicitly in image
      features: [
        { text: "Unlimited" },
        { text: "Unlimited Hosting Accounts" },
        { text: "One-click Free SSL" },
        { text: "Server Firewall" },
        { text: "WordPress Manager" },
        { text: "EasyPHP" },
        { text: "User Quota" },
        { text: "Multiple PHP Versions" },
        { text: "Git Deployment" },
        { text: "Email" },
        { text: "SFTP & Additional FTP Accounts" },
        { text: "10GB Free Backup" },
        { text: "Web application Clone" }
      ],
      buttonText: "More",
      buttonVariant: "gradient", // Assuming the "More" button for Pro is the featured one
      isFeatured: true,
      animationDelay: "0.2s"
    },
    {
      name: "Business",
      price: "$45.00",
      period: "/month",
      description: "For organizations with large-scale infrastructure requirements.", // Description based on common business tier offerings, not explicitly in image
      features: [
        { text: "Unlimited Servers" },
        { text: "All features of Pro account" },
        { text: "White-label Solution" },
        { text: "Activepieces" },
        { text: "Server Firewall" },
        { text: "WordPress Manager" },
        { text: "EasyPHP" },
        { text: "User Quota" },
        { text: "Multiple PHP Versions" },
        { text: "Email" },
        { text: "SFTP & Additional FTP Accounts" },
        { text: "40GB Free Backup" },
        { text: "Web application Clone" },
        { text: "One-click WordPress login" }
      ],
      buttonText: "More",
      buttonVariant: "outline", // Assuming "More" button for Business is not the featured one
      animationDelay: "0.4s"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-700 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/30 rounded-full">
            Flexible Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Choose the Perfect Plan for Your Infrastructure
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            From startups to enterprises, we have tailored options to meet your server management needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant as any}
              isFeatured={plan.isFeatured}
              animationDelay={plan.animationDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
