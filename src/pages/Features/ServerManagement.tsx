import React from 'react';
import { Cloud, Database, BarChart2, Shield, Lock, Globe, Code, UserCheck, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import server1 from '../../../public/lovable-uploads/server-img-1.svg'
import server2 from '../../../public/lovable-uploads/server-img-2.svg'
import server3 from '../../../public/lovable-uploads/server-img-3.svg'
import server4 from '../../../public/lovable-uploads/server-img-4.svg'
import server5 from '../../../public/lovable-uploads/server-img-5.svg'
import server6 from '../../../public/lovable-uploads/server-img-6.svg'
import server7 from '../../../public/lovable-uploads/server-img-7.svg'
import server8 from '../../../public/lovable-uploads/server-img-8.svg'
import server9 from '../../../public/lovable-uploads/server-img-9.svg'
import server10 from '../../../public/lovable-uploads/server-img-10.svg'
import server11 from '../../../public/lovable-uploads/server-img-11.svg'
import server12 from '../../../public/lovable-uploads/server-img-12.svg'
import server13 from '../../../public/lovable-uploads/server-img-13.svg'

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
                    <div className='flex flex-col justify-center items-center'><p className="text-4xl md:text-7xl max-w-4xl text-center font-extrabold leading-relaxed">Server Management </p> <p className="text-4xl mt-6 md:text-7xl max-w-4xl text-center font-extrabold leading-relaxed">that makes<span className="gradient-heading">life easy</span></p></div>

                    <p className="text-md text-center my-10 lg:text-md text-slate-800 mb-8">
With CloudStick, we have made Server Management easy for all, offering peace of mind. Our unique and custom control panel offers an enhanced user experience and the power to manage extensively rich features and functionality available. CloudStick frees users from the complications of handling web server maintenance tasks, as our system does it for you.                    </p>
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
const ServerManagementPage = () => {
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
                            title="Managing PHP Extensions Now Made
Effortless"
                            description="Users can install/uninstall PHP extensions in just a single click. It’s so hassle-free that you do not have to Google and tinker with the PHP configuration to have them installed. Moreover, there is another upside to this – there is no down time during the installation at all, just one click will do the trick."
                            imageSide="right"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-28-53.png */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                               <img src={server1} alt="server1" />

                            </div>
                        </FeatureSection>

                        <FeatureSection
                            title="Effective and Advanced Service Management"
                            description="Users can easily and effectively manage the services running on the server, identify the service resource consumption and they can restart, start, stop, enable, and disable these services within a click, any time."
                            imageSide="left"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-01.png (top) */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                                <img src={server2} alt="server2" />
                            </div>
                        </FeatureSection>

                        <FeatureSection
                            title="Real Time Server Monitoring"
                            description="CloudStick monitors each and every server connected to our system and collects relevant time-series data. Users can analyze the server performance for the last 30 days, 7 days and 24 hours. We provide informative dashboards with graphs to derive actionable insights for users to identify."
                            imageSide="right"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-01.png (bottom) */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                               <img src={server3} alt="server3" />
                            </div>
                        </FeatureSection>

                        <FeatureSection
                            title="Multiple PHP Versions for Enhanced Control"
                            description="Users can create unlimited number of subdomains under each account/web application. They can also choose different PHP versions for these subdomains and install SSL certificates as well."
                            imageSide="left"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-09.png */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                                <img src={server4} alt="server4" />
                            </div>
                        </FeatureSection>

                        <FeatureSection
                            title="One-Click App Installer"
                            description="CloudStick offers this unique feature for users to create web applications with a single click. We have an array of popular applications at your disposal that users can deploy, such as WordPress, Joomla, phpMyAdmin, Nextcloud, among others. They are ready to go to production in just a few seconds."
                            imageSide="right"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-20.png */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                               <img src={server5} alt="server5" />
                            </div>
                        </FeatureSection>
                        <FeatureSection
                            title="Web Hosting Account Management"
                            description="We have made it super easy to manage and limit the resources for each system user. A very handy system of assigning user quota for web application users makes this happen perfectly. This will also allow the customers an additional benefit of reselling cloud hosting."
                            imageSide="left"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-20.png */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                               <img src={server6} alt="server6" />
                            </div>
                        </FeatureSection>
                        <FeatureSection
                            title="Unlock a Treasure Trove of Information usingTraffic Analyzer"
                            description="Using the analyzer, customers can easily identify and dive into a treasure trove of meaningful insights, such as where traffic is originating, what browsers and devices your website is being accessed from, how much data is being utilized by each and every web application, and more."
                            imageSide="right"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-20.png */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                               <img src={server7} alt="server7" />
                            </div>
                        </FeatureSection>
                        <FeatureSection
                            title="Advanced Server Firewall with Comprehensive Security Controls and Settings"
                            description="CloudStick offers a comprehensive set of security controls and settings, with an array of options such as country specific blocking, Connection Limit Protection, IP specific Port restriction, Anti DDOS Shield and more. You get much more than any existing cloud provider gives."
                            imageSide="left"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-20.png */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                               <img src={server8} alt="server8" />
                            </div>
                        </FeatureSection>
                        <FeatureSection
                            title="Traffic Analyser – Gain meaningful insights"
                            description="CloudStick offers a powerful traffic analyser and dashboards for users to easily identify and dive into meaningful insights such as from where the traffic is coming from, what browsers and devices your website is accessed from, how much data is being utilized by each and every web application, and more. Make data-driven decisions to grow your traffic"
                            imageSide="right"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-20.png */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                               <img src={server9} alt="server9" />
                            </div>
                        </FeatureSection>
                        <FeatureSection
                            title="Update Management Made Easy and Seamlessly"
                            description="Users can easily manage the server and security package updates with just one or two clicks from the CloudStick dashboard. It’s seamless and hassle free for users as we do this for all servers and we will take care of it for you."
                            imageSide="left"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-20.png */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                               <img src={server10} alt="server10" />
                            </div>
                        </FeatureSection>
                        <FeatureSection
                            title="Advanced MySQL Database Management"
                            description="CloudStick ensures that the entire database management activities are made easy and effortless for any user. Users can create unlimited number of servers and databases. With centralized management, users can avoid the trouble of selecting each server individually to perform database activities. Also, users can easily assign custom privileges."
                            imageSide="right"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-20.png */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                               <img src={server11} alt="server11" />
                            </div>
                        </FeatureSection>
                        <FeatureSection
                            title="Intuitive File Manager Making Life Easy for You"
                            description="Users can add/edit or maintain their code easily using our intuitive file manager. This will save a lot of time and you can avoid going through the trouble of finding the FTP or SFTP credentials and this will give you access to the code from any device – a definite lifesaver!"
                            imageSide="left"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-20.png */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                               <img src={server12} alt="server12" />
                            </div>
                        </FeatureSection>
                        <FeatureSection
                            title="Cost-effective Backup Solution to Save and Secure Your Data"
                            description="Backup is a super utility addon feature we offer users to save your data in AWS S3. Using our control panel, users can easily enable/disable backups. This is a very cost-effective solution for automatic backups, and for easy access to restore and download backups."
                            imageSide="right"
                        >
                            {/* Placeholder for illustration from Screenshot from 2025-08-06 15-29-20.png */}
                            <div className="w-full max-w-sm h-64  rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold opacity-80">
                               <img src={server13} alt="server13" />
                            </div>
                        </FeatureSection>
                        

                    </div>
                </div>



                <Footer />
            </div>
        </>

    );
};

export default ServerManagementPage;
