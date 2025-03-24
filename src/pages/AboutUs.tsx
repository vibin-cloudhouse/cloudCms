
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  photo: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO & Co-founder",
    photo: "/lovable-uploads/364865ac-6f23-478f-8edf-1750c969df74.png",
    bio: "Sarah leads our vision and strategy with over 15 years of experience in cloud security."
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CTO",
    photo: "",
    bio: "Michael oversees our technical architecture and ensures CloudStick remains at the cutting edge of cloud technology."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "VP of Product",
    photo: "",
    bio: "Elena shapes our product roadmap and ensures CloudStick meets the evolving needs of our customers."
  },
  {
    id: 4,
    name: "David Kim",
    title: "Head of Security",
    photo: "",
    bio: "David brings expertise from his background in cybersecurity to keep your data safe and secure."
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader className="p-6 pb-2">
                    <div className="flex justify-center mb-4">
                      <Avatar className="h-24 w-24">
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
                    <CardDescription className="text-center text-teal-600 font-medium">
                      {member.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-2">
                    <p className="text-slate-600 text-sm">{member.bio}</p>
                  </CardContent>
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
