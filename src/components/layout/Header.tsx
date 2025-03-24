
import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">CloudStick</span>
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Features</Link>
            <Link to="/pricing" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Pricing</Link>
            <Link to="/dashboard" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Dashboard</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Log in</Link>
            <Link to="/signup">
              <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Sign up
              </button>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
