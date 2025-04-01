
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone, ArrowRight, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/ad1726d2-eef7-461b-bd63-0ff96cad4f84.png" 
                  alt="CloudStick" 
                  className="h-8 mr-2" 
                />
              </div>
            </Link>
            <p className="text-slate-600 mb-6">
              Secure cloud storage for your files. Access anywhere, anytime, with
              military-grade encryption.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors">
                {/* TikTok icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features/security" className="text-slate-600 hover:text-teal-600 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/features/sync" className="text-slate-600 hover:text-teal-600 transition-colors">
                  File Sync
                </Link>
              </li>
              <li>
                <Link to="/features/sharing" className="text-slate-600 hover:text-teal-600 transition-colors">
                  File Sharing
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-slate-600 hover:text-teal-600 transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-slate-600 hover:text-teal-600 transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="text-slate-600 hover:text-teal-600 transition-colors">
                  Change Log
                </Link>
              </li>
              <li>
                <a href="https://roadmap.cloudstick.io/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-teal-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-600 hover:text-teal-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-600 hover:text-teal-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://community.cloudstick.io/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-slate-600 hover:text-teal-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-slate-600 hover:text-teal-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@cloudstick.io" className="text-slate-600 hover:text-teal-600 transition-colors flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  info@cloudstick.io
                </a>
              </li>
              <li>
                <a href="tel:+15553334444" className="text-slate-600 hover:text-teal-600 transition-colors flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (555) 333-4444
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-teal-600 transition-colors flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Live Chat
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="font-medium text-slate-900 mb-4">Subscribe</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-white border border-slate-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent flex-grow"
                />
                <button className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} CloudStick. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <Link to="/legal/privacy" className="text-slate-500 hover:text-teal-600 transition-colors">
              Privacy
            </Link>
            <Link to="/legal/terms" className="text-slate-500 hover:text-teal-600 transition-colors">
              Terms
            </Link>
            <Link to="/legal/cookies" className="text-slate-500 hover:text-teal-600 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
