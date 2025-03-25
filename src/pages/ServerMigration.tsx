import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  CheckCircle, 
  ArrowRight, 
  HelpCircle,
  Server,
  Monitor,
  ClipboardCheck,
  Database
} from "lucide-react";
import { Link } from "react-router-dom";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(6, {
    message: "Please enter a valid phone number.",
  }),
  country: z.string().min(2, {
    message: "Please select your country.",
  }),
  websitesCount: z.string().min(1, {
    message: "Please specify the number of websites.",
  }),
  controlPanel: z.string().min(2, {
    message: "Please specify your control panel.",
  }),
  websiteType: z.string().min(2, {
    message: "Please specify your website type.",
  }),
  sourceIp: z.string().min(2, {
    message: "Please enter the source server IP.",
  }),
  destinationIp: z.string().optional(),
  additionalInfo: z.string().optional(),
});

const ServerMigration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      websitesCount: "",
      controlPanel: "",
      websiteType: "",
      sourceIp: "",
      destinationIp: "",
      additionalInfo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to your server
    console.log(values);
    
    toast({
      title: "Migration Request Submitted",
      description: "Our team will contact you shortly to discuss your migration.",
    });
    
    setIsSubmitted(true);
  }

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
    <div className="min-h-screen flex flex-col dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-cyan-50/80 to-teal-50/80 dark:from-slate-900/90 dark:to-slate-800/90">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
                Migration to CloudStick is <span className="gradient-heading dark:text-teal-400">Totally Free</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
                Our experts handle your entire server migration process at no cost, 
                ensuring a smooth transition with minimal downtime.
              </p>
            </div>
          </div>
        </section>
        
        {/* Migration Process Flow Chart */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">
                  Our Migration Process
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  How we execute your server migration from start to finish
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 mb-12">
                <div className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="shrink-0 w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                    <ClipboardCheck className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">1. Migration Request</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      You submit a migration request with details about your server and websites. Our team reviews your requirements and contacts you to confirm details.
                    </p>
                  </div>
                </div>
                
                <div className="ml-8 h-12 w-0.5 bg-teal-200 dark:bg-teal-800 mx-auto"></div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="shrink-0 w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                    <Server className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">2. Server Assessment</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Our experts analyze your current server setup, identify potential challenges, and create a detailed migration plan tailored to your needs.
                    </p>
                  </div>
                </div>
                
                <div className="ml-8 h-12 w-0.5 bg-teal-200 dark:bg-teal-800 mx-auto"></div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="shrink-0 w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                    <Database className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">3. Data Migration</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      We transfer all your files, databases, and configurations to the destination server, ensuring everything is properly set up and optimized.
                    </p>
                  </div>
                </div>
                
                <div className="ml-8 h-12 w-0.5 bg-teal-200 dark:bg-teal-800 mx-auto"></div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="shrink-0 w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">4. Testing & Quality Check</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      We thoroughly test your websites to ensure they function correctly on the new server, verifying database connectivity, script functionality, and more.
                    </p>
                  </div>
                </div>
                
                <div className="ml-8 h-12 w-0.5 bg-teal-200 dark:bg-teal-800 mx-auto"></div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="shrink-0 w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">5. Go Live & Support</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Once you approve the migration, we switch your DNS to point to the new server. We monitor the transition and provide post-migration support to resolve any issues.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Our migration process typically takes 24-72 hours depending on the size and complexity of your websites.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Request Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Request Free Server Migration
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Let our experts migrate your websites with minimal downtime and maximum reliability.
              </p>
            </div>
            
            {!isSubmitted ? (
              <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800/50 shadow-lg rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 234 567 8900" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="au">Australia</SelectItem>
                                <SelectItem value="in">India</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="websitesCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Websites</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select count" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">1 website</SelectItem>
                                <SelectItem value="2-5">2-5 websites</SelectItem>
                                <SelectItem value="6-10">6-10 websites</SelectItem>
                                <SelectItem value="11-20">11-20 websites</SelectItem>
                                <SelectItem value="20+">More than 20 websites</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="controlPanel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Control Panel</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select control panel" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="cpanel">cPanel</SelectItem>
                                <SelectItem value="plesk">Plesk</SelectItem>
                                <SelectItem value="directadmin">DirectAdmin</SelectItem>
                                <SelectItem value="cyberpanel">CyberPanel</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                                <SelectItem value="unknown">I don't know</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="websiteType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website Type</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select website type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="wordpress">WordPress</SelectItem>
                              <SelectItem value="magento">Magento</SelectItem>
                              <SelectItem value="joomla">Joomla</SelectItem>
                              <SelectItem value="drupal">Drupal</SelectItem>
                              <SelectItem value="woocommerce">WooCommerce</SelectItem>
                              <SelectItem value="static">Static HTML</SelectItem>
                              <SelectItem value="other">Other CMS</SelectItem>
                              <SelectItem value="custom">Custom Website</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="sourceIp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Source Server IP</FormLabel>
                            <FormControl>
                              <Input placeholder="123.45.67.89" {...field} />
                            </FormControl>
                            <FormDescription>
                              IP address of your current server
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="destinationIp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Destination Server IP (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="98.76.54.32" {...field} />
                            </FormControl>
                            <FormDescription>
                              Leave blank if you need our hosting
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please share any specific requirements or concerns about your migration"
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full gradient-btn">
                      Submit Migration Request
                    </Button>
                  </form>
                </Form>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800/50 shadow-lg rounded-2xl p-8 border border-slate-200 dark:border-slate-700 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Your Request Has Been Submitted!
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Thank you for your migration request. Our team will review your details and contact you within 24 hours to discuss next steps.
                </p>
                <Link to="/">
                  <Button variant="outline" className="rounded-xl border-teal-200 text-teal-700 dark:border-teal-800 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
        
        {/* FAQ Section */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default ServerMigration;
