
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

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
import { toast } from "@/hooks/use-toast";
import { formSchema, MigrationFormValues } from "./migrationFormSchema";

interface MigrationRequestFormProps {
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const MigrationRequestForm = ({ 
  isSubmitted, 
  setIsSubmitted 
}: MigrationRequestFormProps) => {
  const form = useForm<MigrationFormValues>({
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

  function onSubmit(values: MigrationFormValues) {
    // In a real app, this would send data to your server
    console.log(values);
    
    toast({
      title: "Migration Request Submitted",
      description: "Our team will contact you shortly to discuss your migration.",
    });
    
    setIsSubmitted(true);
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
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
                <CheckCircle className="w-8 h-8 text-[#006FEE] dark:text-teal-400" />
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
  );
};

export default MigrationRequestForm;
