
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  company: z.string().min(1, { message: "Company name is required" }),
  currentProvider: z.string().min(1, { message: "Please specify your current provider" }),
  serverCount: z.string().min(1, { message: "Please select the number of servers" }),
  details: z.string().optional(),
  contactConsent: z.boolean().refine(val => val === true, {
    message: "You must agree to be contacted",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const MigrationPage = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      currentProvider: "",
      serverCount: "",
      details: "",
      contactConsent: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    // Here you would typically send this data to your backend
    toast({
      title: "Migration Request Received",
      description: "Our team will contact you shortly to discuss your migration.",
    });
    form.reset();
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading">Free Server Migration</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Let our experts handle your migration to CloudStick - completely free of charge.
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
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
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="currentProvider"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Hosting Provider</FormLabel>
                          <FormControl>
                            <Input placeholder="AWS, DigitalOcean, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="serverCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Servers</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select number of servers" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-5">1-5 servers</SelectItem>
                              <SelectItem value="6-20">6-20 servers</SelectItem>
                              <SelectItem value="21-50">21-50 servers</SelectItem>
                              <SelectItem value="50+">50+ servers</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your current setup and migration needs" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Include any specific requirements or questions you have about the migration process.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-slate-50 dark:bg-slate-900">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to be contacted about my migration request
                          </FormLabel>
                          <FormDescription>
                            We'll only use your information to process your migration request.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-center">
                    <Button type="submit" className="gradient-btn w-full md:w-auto px-8 py-3">
                      Submit Migration Request
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 dark:bg-slate-800/30">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center gradient-heading">How Our Migration Process Works</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Submit Your Request</h3>
                    <p className="text-slate-600 dark:text-slate-400">Fill out the form with your details and current server setup information.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Consultation Call</h3>
                    <p className="text-slate-600 dark:text-slate-400">Our migration experts will contact you to discuss your specific needs and develop a migration plan.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Migration Execution</h3>
                    <p className="text-slate-600 dark:text-slate-400">We handle the entire migration process with minimal to zero downtime for your services.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Verification & Support</h3>
                    <p className="text-slate-600 dark:text-slate-400">We ensure everything is working properly and provide assistance as you start using CloudStick.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MigrationPage;
