import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cookie } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

// CookiePolicy component to display the cookie policy details
const CookiePolicy = () => {
  return (

    <>
    <Header/>
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
       
      <div className="flex items-center mt-16 mb-6">
        <Button asChild variant="ghost" className="p-2">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
        </Button>
      </div>
    <div className="flex justify-center">
 <div className="bg-white dark:bg-slate-800 shadow-md rounded-2xl max-w-5xl p-8 mb-8">
<div className="max-w-4xl m mx-auto">
   <div className="my-16 text-center">
            <Cookie className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated October 07, 2020</p>
          </div>

         <div className="min-h-screen">
      <div className="max-w-4xl mx-aut p-6 sm:p-8 lg:p-10">
        {/* Header Section */}
        

        {/* Introduction */}
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          This Cookie Policy explains how CloudStick ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize when you visit our websites at https://cloudstick.io/ (the "Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
          In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
        </p>

        {/* What are Cookies? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-6">WHAT ARE COOKIES?</h2>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
          Cookies set by the website owner (in this case, CloudStick) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
        </p>

        {/* Why do we use cookies? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-6">WHY DO WE USE COOKIES?</h2>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
        </p>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
        </p>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
          The specific types of first and third party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit).
        </p>

        {/* Essential Website Cookies */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-6">ESSENTIAL WEBSITE COOKIES:</h2>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
          These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.
        </p>

        {/* Cookie Table - _tbcgv */}
        <CookieTable
          name="__tbcgv"
          purpose="Used to record unique visitor views of the consent banner."
          provider="CloudStick.io"
          service="CloudStick View Service Privacy Policy"
          country="United States"
          type="http_cookie"
          expires="1 year"
        />

        {/* Cookie Table - __cfduid (Cloudflare) */}
        <CookieTable
          name="__cfduid"
          purpose="Used by Cloudflare to identify individual clients behind a shared IP address, and apply security settings on a per-client basis. This is a HTTP type cookie that expires after 1 year."
          provider="datatables.net"
          service="CloudStick View Service Privacy Policy"
          country="United States"
          type="server_cookie"
          expires="30 days"
        />

        {/* Cookie Table - __cfduid (Luckyorange) */}
        <CookieTable
          name="__cfduid"
          purpose="Used by Cloudflare to identify individual clients behind a shared IP address, and apply security settings on a per-client basis. This is a HTTP type cookie that expires after 1 year."
          provider="luckyorange.net"
          service="CloudStick View Service Privacy Policy"
          country="United States"
          type="server_cookie"
          expires="30 days"
        />

        {/* Cookie Table - _gid */}
        <CookieTable
          name="_gid"
          purpose="Keeps on entry of unique ID which is then used to come up with statistical data on website usage by visitors. It is a HTTP cookie type and expires after a browsing session."
          provider=".unclaimedfunds.com"
          service="Google Analytics View Service Privacy Policy"
          country="United States"
          type="http_cookie"
          expires="1 day"
        />

        {/* Cookie Table - _gat# */}
        <CookieTable
          name="_gat#"
          purpose="Enables Google Analytics regulate the rate of requesting. It is a HTTP cookie type that lasts for a session."
          provider=".unclaimedfunds.com"
          service="Google Analytics View Service Privacy Policy"
          country="United States"
          type="http_cookie"
          expires="1 minute"
        />

        {/* Cookie Table - _ga */}
        <CookieTable
          name="_ga"
          purpose="It records a particular ID used to come up with data about website usage by the user. It is a HTTP cookie that expires after 2 years."
          provider=".unclaimedfunds.com"
          service="Google Analytics View Service Privacy Policy"
          country="United States"
          type="http_cookie"
          expires="1 year 11 months 29 days"
        />

        {/* Unclassified Cookies */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-6">UNCLASSIFIED COOKIES:</h2>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
          These cookies are cookies that have not yet been categorized. We are in the process of classifying these cookies with the help of their providers.
        </p>

        {/* Cookie Table - XSRF-TOKEN */}
        <CookieTable
          name="XSRF-TOKEN"
          purpose="------------"
          provider="unclaimedfunds.com"
          service="------------"
          country="United States"
          type="http_cookie"
          expires="2 hours"
        />

        {/* Cookie Table - unclaimedfunds_session */}
        <CookieTable
          name="unclaimedfunds_session"
          purpose="------------"
          provider="unclaimedfunds.com"
          service="------------"
          country="United States"
          type="server_cookie"
          expires="2 hours"
        />

        {/* Other Tracking Technologies, Like Web Beacons? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-6">WHAT ABOUT OTHER TRACKING TECHNOLOGIES, LIKE WEB BEACONS?</h2>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Websites or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
        </p>

        {/* Do you use Flash cookies or local shared objects? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-6">DO YOU USE FLASH COOKIES OR LOCAL SHARED OBJECTS?</h2>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things, collect and store information about your use of our services, fraud prevention and for other site operations.
        </p>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to as "information" on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).
        </p>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
          Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.
        </p>

        {/* Do you serve targeted advertising? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-6">DO YOU SERVE TARGETED ADVERTISING?</h2>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
          Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details or other details that directly identify you unless you choose to provide these.
        </p>

        {/* How often will you update this cookie policy? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-6">HOW OFTEN WILL YOU UPDATE THIS COOKIE POLICY?</h2>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </p>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
          The date at the top of this Cookie Policy indicates when it was last updated.
        </p>

        {/* Where can I get further information? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-6">WHERE CAN I GET FURTHER INFORMATION?</h2>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          If you have any questions about our use of cookies or other technologies, please email us at info@cloudstick.io or try post to:
        </p>
        <p className="text-gray-700 dark:text-white mb-1 leading-relaxed">CloudHouse LLC</p>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">90 N Gould ST STE R Sheridan, Wyoming 82801, United States</p>
      </div>
    </div>
      </div>
    </div>
    </div>
   
      
    </div>
    <Footer/>
    </>
   
  );
};

// CookieTable component to render individual cookie details in a table format
const CookieTable = ({ name, purpose, provider, service, country, type, expires }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
      {/* Row for Name */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 bg-white dark:bg-slate-900 border-b border-gray-200 last:border-b-0">
        <span className="font-medium text-gray-700 dark:text-white w-full sm:w-1/4 lg:w-1/5 mb-1 sm:mb-0">Name:</span>
        <span className="text-gray-900 dark:text-white/70 flex-1">{name}</span>
      </div>
      {/* Row for Purpose */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 bg-white dark:bg-slate-900 border-b border-gray-200 last:border-b-0">
        <span className="font-medium text-gray-700 dark:text-white w-full sm:w-1/4 lg:w-1/5 mb-1 sm:mb-0">Purpose:</span>
        <span className="text-gray-900 dark:text-white/70 flex-1">{purpose}</span>
      </div>
      {/* Row for Provider */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 bg-white dark:bg-slate-900 border-b border-gray-200 last:border-b-0">
        <span className="font-medium text-gray-700 dark:text-white w-full sm:w-1/4 lg:w-1/5 mb-1 sm:mb-0">Provider:</span>
        <span className="text-gray-900 dark:text-white/70 flex-1">{provider}</span>
      </div>
      {/* Row for Service */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 bg-white dark:bg-slate-900 border-b border-gray-200 last:border-b-0">
        <span className="font-medium text-gray-700 dark:text-white w-full sm:w-1/4 lg:w-1/5 mb-1 sm:mb-0">Service:</span>
        <span className="text-gray-900 dark:text-white/70 flex-1">{service}</span>
      </div>
      {/* Row for Country */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 bg-white dark:bg-slate-900 border-b border-gray-200 last:border-b-0">
        <span className="font-medium text-gray-700 dark:text-white w-full sm:w-1/4 lg:w-1/5 mb-1 sm:mb-0">Country:</span>
        <span className="text-gray-900 dark:text-white/70 flex-1">{country}</span>
      </div>
      {/* Row for Type */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 bg-white dark:bg-slate-900 border-b border-gray-200 last:border-b-0">
        <span className="font-medium text-gray-700 dark:text-white w-full sm:w-1/4 lg:w-1/5 mb-1 sm:mb-0">Type:</span>
        <span className="text-gray-900 dark:text-white/70 flex-1">{type}</span>
      </div>
      {/* Row for Expires in */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 bg-white dark:bg-slate-900 last:border-b-0">
        <span className="font-medium text-gray-700 dark:text-white w-full sm:w-1/4 lg:w-1/5 mb-1 sm:mb-0">Expires in:</span>
        <span className="text-gray-900 dark:text-white/70 flex-1">{expires}</span>
      </div>
    </div>
  );
};

export default CookiePolicy;
