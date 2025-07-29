
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to add shadow and background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-slate-900/90 shadow-sm backdrop-blur-sm border-b border-slate-200 dark:border-slate-800" 
          : "bg-transparent backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/MainLogo.png" 
            alt="CloudStick Logo" 
            className="h-8" 
          />
        </Link>
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-6">
            {/* Rearranged menu items by priority */}
            <Link to="/features" className="text-slate-700 hover:text-[#006FEE] dark:text-slate-200 dark:hover:text-teal-400 transition-colors">Features</Link>
            <Link to="/pricing" className="text-slate-700 hover:text-[#006FEE] dark:text-slate-200 dark:hover:text-teal-400 transition-colors">Pricing</Link>
            <Link to="/blog" className="text-slate-700 hover:text-[#006FEE] dark:text-slate-200 dark:hover:text-teal-400 transition-colors">Blog</Link>
            <Link to="/about" className="text-slate-700 hover:text-[#006FEE] dark:text-slate-200 dark:hover:text-teal-400 transition-colors">About Us</Link>
            <Link to="/docs" className="text-slate-700 hover:text-[#006FEE] dark:text-slate-200 dark:hover:text-teal-400 transition-colors">Docs</Link>
            <Link to="/knowledgebase" className="text-slate-700 hover:text-[#006FEE] dark:text-slate-200 dark:hover:text-teal-400 transition-colors">Knowledge Base</Link>
          </nav>
          
          <div className="flex items-center ml-4 space-x-2 md:space-x-4">
            <Link to="https://dash.cloudstick.io/login" className="hidden md:block text-slate-700 hover:text-[#006FEE] dark:text-slate-200 dark:hover:text-teal-400 transition-colors">
              Log in
            </Link>
            <Link to="https://dash.cloudstick.io/register" className="hidden md:block">
              <button className="bg-gradient-to-r from-[#006FEE] to-cyan-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Sign up
              </button>
            </Link>
            <ThemeToggle />
            <MobileMenu />
          </div>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
