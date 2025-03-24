
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/b6663b6d-31b3-4893-9cba-9af864ba5896.png" 
                alt="CloudStick" 
                className="h-10 mr-2" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="nav-link flex items-center">
                Features <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="glass-card p-4 space-y-2">
                  <Link to="/features/security" className="block px-4 py-2 text-slate-700 hover:text-teal-600 rounded-lg hover:bg-slate-50 transition-colors">
                    Security
                  </Link>
                  <Link to="/features/sync" className="block px-4 py-2 text-slate-700 hover:text-teal-600 rounded-lg hover:bg-slate-50 transition-colors">
                    File Sync
                  </Link>
                  <Link to="/features/sharing" className="block px-4 py-2 text-slate-700 hover:text-teal-600 rounded-lg hover:bg-slate-50 transition-colors">
                    File Sharing
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="rounded-xl px-6 border-teal-200 text-teal-700 hover:bg-teal-50">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="gradient-btn">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <div className="py-2">
              <button className="flex justify-between items-center w-full py-2 text-left text-slate-700">
                Features
                <ChevronDown className="w-5 h-5" />
              </button>
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-100">
                <Link to="/features/security" className="block py-2 text-slate-700">
                  Security
                </Link>
                <Link to="/features/sync" className="block py-2 text-slate-700">
                  File Sync
                </Link>
                <Link to="/features/sharing" className="block py-2 text-slate-700">
                  File Sharing
                </Link>
              </div>
            </div>
            <Link to="/pricing" className="block py-2 text-slate-700">
              Pricing
            </Link>
            <Link to="/about" className="block py-2 text-slate-700">
              About
            </Link>
            <Link to="/contact" className="block py-2 text-slate-700">
              Contact
            </Link>
            <Link to="/blog" className="block py-2 text-slate-700">
              Blog
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link to="/login">
                <Button variant="outline" className="w-full rounded-xl border-teal-200 text-teal-700 hover:bg-teal-50">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full gradient-btn">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
