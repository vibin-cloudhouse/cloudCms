
import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const MigrationFAQ = () => {
  const faqs = [
    {
      question: "How long does server migration usually take?",
      answer: "Server migration typically takes 24-72 hours depending on the size of your website, database complexity, and the number of websites being migrated."
    },
    {
      question: "Will my website experience downtime during migration?",
      answer: "We strive to minimize downtime. Typically, your website will experience 0-15 minutes of downtime during the final DNS switch phase."
    },
    {
      question: "Do you migrate all types of websites?",
      answer: "Yes, we migrate WordPress, Magento, Joomla, Drupal, and custom websites. Our team is experienced with all major CMS platforms and control panels."
    },
    {
      question: "What information do I need to provide for migration?",
      answer: "We need your source server credentials, destination server details (if you have one), and information about your websites such as domain names and control panel details."
    },
    {
      question: "Do I need to prepare my destination server before migration?",
      answer: "If you already have a destination server, we'll help you prepare it. If you don't have one, we can guide you through selecting the right hosting solution."
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Common questions about our server migration process
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-slate-900 dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Still have questions?
            </p>
            <Link to="/contact">
              <Button variant="outline" className="rounded-xl border-teal-200 text-teal-700 dark:border-teal-800 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30">
                Contact our migration team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationFAQ;
