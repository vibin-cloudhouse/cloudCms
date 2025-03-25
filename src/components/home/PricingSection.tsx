
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      description: "Perfect for individuals and small personal projects.",
      features: [
        { text: "Up to 3 servers" },
        { text: "Basic monitoring" },
        { text: "Email support" }
      ],
      buttonText: "Sign Up Free",
      buttonVariant: "outline",
      animationDelay: "0s"
    },
    {
      name: "Basic",
      price: "$19.99",
      period: "/month",
      description: "For startups and growing projects with more needs.",
      features: [
        { text: "Up to 10 servers" },
        { text: "Standard monitoring" },
        { text: "Web SSH terminal" },
        { text: "Priority email support" }
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      animationDelay: "0.1s"
    },
    {
      name: "Pro",
      price: "$49.99",
      period: "/month",
      description: "For growing businesses with multiple servers and advanced needs.",
      features: [
        { text: "Up to 25 servers" },
        { text: "Advanced monitoring" },
        { text: "Auto-scaling rules" },
        { text: "Database management" },
        { text: "API access" }
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "gradient",
      isFeatured: true,
      animationDelay: "0.2s"
    },
    {
      name: "Business",
      price: "$99.99",
      period: "/month",
      description: "For organizations with large-scale infrastructure requirements.",
      features: [
        { text: "Unlimited servers" },
        { text: "Enterprise security" },
        { text: "Custom integrations" },
        { text: "24/7 phone support" },
        { text: "Dedicated account manager" }
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
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
