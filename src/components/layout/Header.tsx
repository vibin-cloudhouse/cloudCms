
import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-sm border-b border-transparent transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/1e9c8d72-fd3e-426d-aff4-3f96e3314af1.png" 
            alt="CloudStick Logo" 
            className="h-12" 
          />
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors">Features</Link>
            <Link to="/pricing" className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors">Pricing</Link>
            <Link to="/dashboard" className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors">Dashboard</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors">Log in</Link>
            <Link to="/signup">
              <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Sign up
              </button>
            </Link>
            <ThemeToggle />
          </div>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
