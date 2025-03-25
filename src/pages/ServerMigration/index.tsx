
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MigrationHero from "./components/MigrationHero";
import MigrationProcess from "./components/MigrationProcess";
import MigrationRequestForm from "./components/MigrationRequestForm";
import MigrationFAQ from "./components/MigrationFAQ";

const ServerMigration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      
      <main>
        <MigrationHero />
        <MigrationProcess />
        <MigrationRequestForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
        <MigrationFAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServerMigration;
