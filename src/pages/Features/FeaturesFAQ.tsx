
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How does the white labeling feature work?",
    answer: "Our white labeling feature allows you to customize the branding, colors, logos, and domain to make CloudStick appear as your own product. This includes custom email templates, documentation, and user interfaces."
  },
  {
    question: "Is API integration available on all plans?",
    answer: "Basic API integration is available on all plans, but advanced API features, such as higher rate limits and custom endpoints, are available on our Pro and Enterprise plans."
  },
  {
    question: "Can I migrate my existing data to CloudStick?",
    answer: "Yes, we provide comprehensive data migration tools and professional services to help you seamlessly transfer your existing data to CloudStick."
  },
  {
    question: "What security measures does CloudStick implement?",
    answer: "CloudStick implements industry-standard security measures including end-to-end encryption, regular security audits, multi-factor authentication, and compliance with SOC 2, GDPR, and other regulatory standards."
  },
  {
    question: "How customizable are the workflows?",
    answer: "CloudStick's workflows are highly customizable. You can create complex automation, set conditions, triggers, and actions tailored to your specific business processes without coding knowledge."
  }
];

const FeaturesFAQ = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-center text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
          Get answers to commonly asked questions about CloudStick features.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-slate-900 dark:text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FeaturesFAQ;
