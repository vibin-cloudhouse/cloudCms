import React from 'react';
import { Cloud, Database, BarChart2, Shield, Lock, Globe, Code, UserCheck, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Navbar Component - Adapted from previous immersive to match new screenshot
const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-md">
            <div className="flex items-center space-x-2">
                {/* CloudStick Logo */}
                <Cloud className="h-7 w-7 text-white" />
                <span className="text-2xl font-bold">CloudStick</span>
            </div>
            <div className="hidden md:flex space-x-8 text-white font-medium">
                <a href="#" className="hover:text-blue-200 transition-colors">Features</a>
                <a href="#" className="hover:text-blue-200 transition-colors">Pricing</a>
                <a href="#" className="hover:text-blue-200 transition-colors">Resources</a>
                <a href="#" className="hover:text-blue-200 transition-colors">Managed Hosting</a>
                <a href="#" className="hover:text-blue-200 transition-colors">Company</a>
                <a href="#" className="hover:text-blue-200 transition-colors">Contact Us</a>
            </div>
            <div className="flex items-center space-x-4">
                <a href="#" className="text-white hover:text-blue-200 transition-colors hidden md:block">Login</a>
                <button className="bg-white text-blue-800 px-5 py-2 rounded-full hover:bg-blue-100 transition-colors shadow-md font-semibold">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

// Hero Section Component - Adapted for Data Management page
const HeroSection = () => {
    return (
        <section className="relative 2xl:my-[220px] py-20 px-6 md:px-12 dark:text-white overflow-hidden rounded-b-lg">

            <div className="relative z-10 max-w-6xl mx-auto flex items-center justify-center text-center md:text-left">
                <div className=" mb-10 md:mb-0">
                    <div className='flex justify-center items-center'><h1 className="text-4xl md:text-7xl max-w-4xl text-center font-extrabold leading-tight mb-6">
                        Powerful and <p className="gradient-heading">Feature-rich Database</p> Management
                    </h1></div>

                    <p className="text-md text-center my-10 lg:text-md text-slate-800 mb-8">
                        With lots of research, going through multiple aspects of user experience and database management, we have come up with the most advanced Powerful and Database Management available in the market. You can create unlimited number of servers and databases and have easy access to every possible Database Management features. With CloudStick, you get much more than all existing cloud providers, with the best value for money.
                    </p>
                    <div className='w-ful flex justify-center items-center'>
                        <button className="bg-white border  px-8 py-2 rounded-sm text-md hover:bg-accent transition-all shadow-lg transform hover:scale-105">
                            <p className='flex gap-2 items-center'>Migrate now <span><ArrowRight size={16} /></span></p>
                        </button>
                    </div>

                </div>
                {/* <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-md h-64 bg-blue-600 rounded-xl flex items-center justify-center text-blue-200 text-xl font-bold opacity-80">
            <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="100" y="30" width="200" height="120" rx="10" fill="#E0F2F7"/>
              <rect x="110" y="40" width="180" height="100" rx="5" fill="#B3E0F2"/>
              <circle cx="200" cy="90" r="30" fill="#42A5F5"/>
              <path d="M200 90 L220 70 L220 110 Z" fill="#2196F3"/>
              <rect x="150" y="160" width="100" height="10" fill="#B0BEC5"/>
              <rect x="100" y="170" width="200" height="60" rx="5" fill="#607D8B"/>
              <rect x="110" y="180" width="180" height="10" fill="#90A4AE"/>
              <rect x="110" y="195" width="180" height="10" fill="#90A4AE"/>
              <rect x="110" y="210" width="180" height="10" fill="#90A4AE"/>
              <circle cx="80" cy="200" r="20" fill="#81C784"/>
              <rect x="70" y="220" width="20" height="30" fill="#81C784"/>
              <circle cx="320" cy="200" r="20" fill="#81C784"/>
              <rect x="310" y="220" width="20" height="30" fill="#81C784"/>
            </svg>
          </div>
        </div> */}
            </div>
        </section>
    );
};

// Feature Section Component with alternating layout
const FeatureSection = ({ title, description, imageSide, children }) => {
    return (
        <section className="py-16 px-6 md:px-12  border-b-2 border-gray-100 last:border-b-0">
            <div className={`max-w-6xl mx-auto flex flex-col items-center ${imageSide === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12`}>
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {description}
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    {children} {/* This will be the placeholder for the image/illustration */}
                </div>
            </div>
        </section>
    );
};

// Footer Component - Reused from previous immersive


// Main App Component for Data Management Page
const DataManagementPage = () => {
    return (
        <>
            <Header />
            <div className="font-inter antialiased">
                <div className="absolute inset-0 opacity-20">
                    {/* Abstract background shapes for visual appeal */}
                    <div className="absolute w-72 h-72 bg-blue-500 rounded-full -top-16 -left-16 blur-3xl opacity-50 animate-pulse"></div>
                    <div className="absolute w-96 h-96 bg-indigo-500 rounded-full -bottom-20 -right-20 blur-3xl opacity-50 animate-pulse-slow"></div>
                </div>
                <HeroSection />
                <div className='flex w-full justify-center items-center'>
                    <div className='max-w-7xl'>
                        <FeatureSection
                            title="Global database management making life easy."
                            description="CloudStick makes the entire database management activities effortless for any user. Unlike most of the SaaS platforms, CloudStick offers centralized management options. This is a lifesaver as users can now avoid going through the trouble of selecting each server individually to perform database activities."
                            imageSide="right"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-28-53.png */}
                            <div className="w-full max-w-sm h-64 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                                <svg width="465" height="433" viewBox="0 0 465 433" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_223_2)">
        <mask id="mask0_223_2" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="465" height="433">
            <path d="M0 0H465V433H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_223_2)">
            {/* ... rest of your SVG paths ... */}
        </g>
    </g>
    <defs>
        <clipPath id="clip0_223_2">
            <rect width="465" height="433" fill="white" />
        </clipPath>
    </defs>
</svg>

                            </div>
                        </FeatureSection>

                        <FeatureSection
                            title="Leverage Advanced Privilege Settings with minimal effort."
                            description="Existing SaaS platforms offer bare minimal options to create and assign permissions for databases and custom permissions can be assigned only over the command line. With CloudStick, it is hassle-free, users can easily assign custom privileges even for a remote host with just a few clicks."
                            imageSide="left"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-01.png (top) */}
                            <div className="w-full max-w-sm h-64 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                                <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Abstract shapes for person on laptop at a desk */}
                                    <rect x="50" y="120" width="200" height="50" rx="5" fill="#B0BEC5" /> {/* Desk */}
                                    <rect x="120" y="70" width="80" height="50" rx="5" fill="#90A4AE" /> {/* Laptop base */}
                                    <rect x="125" y="50" width="70" height="20" rx="3" fill="#607D8B" /> {/* Laptop screen */}
                                    <circle cx="160" cy="100" r="25" fill="#81C784" /> {/* Person's body */}
                                    <rect x="150" y="125" width="20" height="20" fill="#81C784" /> {/* Person's legs */}
                                </svg>
                            </div>
                        </FeatureSection>

                        <FeatureSection
                            title="Security is our top priority and we take it very seriously."
                            description="If a user wants to grant permission to a remote host, security threats should never be concern as CloudStick has multiple layers of defence built-in the application to effectively guard against all kinds of threats"
                            imageSide="right"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-01.png (bottom) */}
                            <div className="w-full max-w-sm h-64 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                                <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Abstract shapes for person with locks and document */}
                                    <circle cx="150" cy="100" r="30" fill="#81C784" />
                                    <rect x="130" y="130" width="40" height="50" fill="#81C784" />
                                    <Lock size={48} className="text-blue-600 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2" />
                                    <Lock size={48} className="text-blue-600 absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2" />
                                    <rect x="100" y="150" width="100" height="30" rx="5" fill="#B0BEC5" />
                                </svg>
                            </div>
                        </FeatureSection>

                        <FeatureSection
                            title="API access to automate the database activities."
                            description="We offer API access to users and they can use it for multiple purposes such as creating servers, databases and managing them in their own domain to automate database activities"
                            imageSide="left"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-09.png */}
                            <div className="w-full max-w-sm h-64 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                                <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Abstract shapes for person with world map and data visualization */}
                                    <circle cx="150" cy="100" r="30" fill="#81C784" />
                                    <rect x="130" y="130" width="40" height="50" fill="#81C784" />
                                    <Globe size={64} className="text-blue-600 absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
                                    <Code size={48} className="text-blue-600 absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2" />
                                    <BarChart2 size={48} className="text-blue-600 absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2" />
                                </svg>
                            </div>
                        </FeatureSection>

                        <FeatureSection
                            title="Easy access to the database manager"
                            description="Users can login to phpMyAdmin with a single secure link and administrate the database. This avoids the hassle to find the database credentials from the server"
                            imageSide="right"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-20.png */}
                            <div className="w-full max-w-sm h-64 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                                <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Abstract shapes for person with charts */}
                                    <circle cx="150" cy="100" r="30" fill="#81C784" />
                                    <rect x="130" y="130" width="40" height="50" fill="#81C784" />
                                    <BarChart2 size={64} className="text-blue-600 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2" />
                                    <Database size={48} className="text-blue-600 absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2" />
                                </svg>
                            </div>
                        </FeatureSection>

                    </div>
                </div>



                <Footer />
            </div>
        </>

    );
};

export default DataManagementPage;
