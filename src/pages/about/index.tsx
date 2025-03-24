
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "./AboutHero";
import StatsSection from "./StatsSection";
import VisionSection from "./VisionSection";
import StorySection from "./StorySection";
import TeamSection from "./TeamSection";
import teamMembers from "./data/teamMembers";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AboutHero />
          <StatsSection />
          <VisionSection />
          <StorySection />
          <TeamSection teamMembers={teamMembers} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
