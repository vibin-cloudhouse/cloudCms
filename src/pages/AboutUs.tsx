
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Server, AppWindow, Globe } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  photo: string;
}

interface StatCounter {
  value: number;
  label: string;
  icon: React.ReactNode;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO & Co-founder",
    photo: "/lovable-uploads/364865ac-6f23-478f-8edf-1750c969df74.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CTO",
    photo: ""
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "VP of Product",
    photo: ""
  },
  {
    id: 4,
    name: "David Kim",
    title: "Head of Security",
    photo: ""
  },
  {
    id: 5,
    name: "Priya Patel",
    title: "Lead Developer",
    photo: ""
  },
  {
    id: 6,
    name: "James Wilson",
    title: "DevOps Engineer",
    photo: ""
  },
  {
    id: 7,
    name: "Olivia Martinez",
    title: "UX Designer",
    photo: ""
  },
  {
    id: 8,
    name: "Alex Thompson",
    title: "Cloud Architect",
    photo: ""
  },
  {
    id: 9,
    name: "Sophia Lee",
    title: "Marketing Director",
    photo: ""
  },
  {
    id: 10,
    name: "Nathan Brown",
    title: "Customer Success Lead",
    photo: ""
  },
  {
    id: 11,
    name: "Emma Johnson",
    title: "Data Scientist",
    photo: ""
  },
  {
    id: 12,
    name: "Carlos Diaz",
    title: "Security Specialist",
    photo: ""
  },
  {
    id: 13,
    name: "Aisha Khan",
    title: "QA Engineer",
    photo: ""
  },
  {
    id: 14,
    name: "Ryan Park",
    title: "Frontend Developer",
    photo: ""
  },
  {
    id: 15,
    name: "Lily Zhang",
    title: "Backend Developer",
    photo: ""
  },
  {
    id: 16,
    name: "Jordan Miller",
    title: "Sales Director",
    photo: ""
  }
];

const statCounters: StatCounter[] = [
  {
    value: 5782,
    label: "Servers Connected",
    icon: <Server className="h-8 w-8 text-teal-600" />
  },
  {
    value: 3149,
    label: "Databases Managed",
    icon: <Database className="h-8 w-8 text-teal-600" />
  },
  {
    value: 8634,
    label: "Applications Secured",
    icon: <AppWindow className="h-8 w-8 text-teal-600" />
  },
  {
    value: 2957,
    label: "Domains Protected",
    icon: <Globe className="h-8 w-8 text-teal-600" />
  }
];

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
              About Us
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-slate-600 mb-6">
                Secure cloud storage solutions for businesses and individuals.
              </p>
              <div className="p-4 bg-teal-50 rounded-lg border border-teal-100 inline-block">
                <p className="text-teal-700 font-medium">
                  We are proudly from <span className="font-bold">CloudHouse</span>
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statCounters.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-teal-600 dark:text-teal-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section - NEW */}
          <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">Our Vision</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                  <Globe className="h-24 w-24 text-teal-600 dark:text-teal-400" />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-700 dark:text-slate-200 mb-4 text-lg">
                  Our vision at CloudStick is to create a world where data is truly secure, 
                  private, and accessible only to those who should have access. We envision a 
                  future where individuals and organizations can collaborate freely without 
                  compromising on security.
                </p>
                <p className="text-slate-700 dark:text-slate-200 text-lg">
                  By 2030, we aim to become the global standard for secure cloud storage, 
                  protecting millions of users worldwide while pioneering new technologies 
                  that redefine what's possible in data privacy and security.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Our Story</h2>
            <p className="text-slate-600 mb-4">
              Founded in 2020, CloudStick emerged from our founders' shared vision to create a 
              secure, user-friendly cloud storage solution that prioritizes privacy without 
              compromising convenience.
            </p>
            <p className="text-slate-600 mb-4">
              As part of the CloudHouse family, we leverage decades of combined experience in cloud 
              infrastructure, security, and user experience design to build a product that meets the 
              highest standards of performance and protection.
            </p>
            <p className="text-slate-600">
              Today, we serve thousands of customers worldwide, from individual professionals to 
              large enterprises, all united by the need for reliable, secure file storage and 
              sharing in an increasingly digital world.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader className="p-6 pb-2">
                    <div className="flex justify-center mb-4">
                      <Avatar className="h-20 w-20">
                        {member.photo ? (
                          <AvatarImage src={member.photo} alt={member.name} />
                        ) : (
                          <AvatarFallback className="bg-teal-100 text-teal-800 text-xl">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        )}
                      </Avatar>
                    </div>
                    <CardTitle className="text-center text-xl">{member.name}</CardTitle>
                    <p className="text-center text-teal-600 font-medium mt-1">
                      {member.title}
                    </p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
