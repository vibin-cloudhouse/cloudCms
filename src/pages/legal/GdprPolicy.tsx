import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Database } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const GDPRPolicy = () => {
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
          <Database className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">GDPR Policy</h1>
          <p className="text-muted-foreground">Last updated August 05, 2025</p>
        </div>

        <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-6 sm:p-8 lg:p-10">
        {/* Header Section */}
        {/* Introduction */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">INTRODUCTION</h2>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          Thank you for choosing to be part of our community at CloudHouse LLC. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at.
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          When you visit our website https://cloudstick.io and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our site and our services.
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          This privacy policy applies to all information collected through our website.
        </p>

        {/* Important Notice */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">PLEASE READ THIS PRIVACY POLICY CAREFULLY AS IT WILL HELP YOU MAKE INFORMED DECISIONS ABOUT SHARING YOUR PERSONAL INFORMATION WITH US.</h2>

        {/* Table of Contents */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">TABLE OF CONTENTS</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-white/80 mb-6 space-y-2">
          <li>What Information Do We Collect?</li>
          <li>How Do We Use Your Information?</li>
          <li>Will Your Information Be Shared With Anyone?</li>
          <li>Do We Use Cookies And Other Tracking Technologies?</li>
          <li>Is Your Information Transferred Internationally?</li>
          <li>What Is Our Stance On Third-Party Websites?</li>
          <li>How Long Do We Keep Your Information?</li>
          <li>How Do We Keep Your Information Safe?</li>
          <li>Do We Collect Information From Minors?</li>
          <li>What Are Your Privacy Rights?</li>
          <li>Do California Residents Have Specific Privacy Rights?</li>
          <li>Do We Make Updates To This Policy?</li>
        </ul>

        {/* What Information Do We Collect? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">WHAT INFORMATION DO WE COLLECT?</h2>
        <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-3">PERSONAL INFORMATION YOU DISCLOSE TO US</h3>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          We collect personal information that you voluntarily provide to us when registering for an account in our site, expressing an interest in obtaining information about us or our products and services, when participating in activities on the Sites, such as posting messages in our online forums or entering competitions, contests or giveaways) or otherwise contacting us.
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          The personal information that we collect depends on the context of your interactions with us and the Site, the choices you make and the products and features you use. The personal information we collect can include the following:
        </p>

        <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-3">Name and Contact Data:</h3>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          We collect your first and last name, email address, postal address, phone number, and other similar contact data.
        </p>

        <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-3">Credentials:</h3>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          We collect passwords and other similar security information used for authentication and account access.
        </p>

        <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-3">Payment Data:</h3>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), the security code associated with your payment instrument, PayPal address. Company name. Company address and tax information. All payment data is stored by our payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions.
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          All personal information you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
        </p>

        <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-3">Information automatically collected:</h3>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          We automatically collect certain information when you visit, use or navigate the Sites. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Site and other technical information. This information is primarily needed to maintain the security and operation of our Sites, and for our internal analytics and reporting purposes.
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookies Policy. <a href="#" className="text-blue-600 hover:underline">Click here</a>.
        </p>

        <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-3">Information collected from other Sources</h3>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          We may obtain information about you from other sources, such as public databases, social media platforms as well as from other third parties. Examples of the information we receive from other sources include your name, email, profile picture URL, and details from github.
        </p>

        {/* How Do We Use Your Information? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">HOW DO WE USE YOUR INFORMATION?</h2>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          We use personal information collected via our Site for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests ("Business Purposes") in order to enter into or perform a contract with you ("Contractual"), with your consent ("Consent"), and/or for compliance with our legal obligations ("Legal Reasons"). We indicate the specific processing grounds we rely on next to each purpose listed below. We use the information we collect or receive:
        </p>

        <ul className="list-disc list-inside text-gray-700 dark:text-white/80 mb-6 space-y-2">
          <li>To facilitate account creation and login process: With your consent we use the information you allowed us to collect from our Site to facilitate account creation and login process.</li>
          <li>To send you marketing and promotional communications: For our Business Purposes and/or with your Consent, we and/or our third party marketing partners may use the personal information you send to us for our marketing purposes. You can opt-out of our marketing emails at any time.</li>
          <li>To send administrative information to you: For Business Purposes, Legal Reasons and/or Contractual, we may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</li>
          <li>Fulfill and manage your orders: For Contractual reasons, we may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Sites.</li>
          <li>To post testimonials: With your Consent, we may post testimonials on our Site that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and testimonial. If you wish to update, or delete your testimonial, please contact us at info@cloudstick.io and be sure to include your name, profile picture, designation, company name, testimonial location, and contact information.</li>
          <li>Deliver targeted advertising to you: For our Business Purposes and/or with your Consent, we may use your information to develop and display content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.</li>
          <li>Request Feedback: For our Business Purposes and/or with your Consent, we may use your information to request feedback and to connect you about your use of our Site.</li>
          <li>To protect our Sites: For Business Purposes and/or Legal Reasons, we may use your information as part of our efforts to keep our Sites safe and secure (for example, fraud monitoring and prevention).</li>
          <li>To enable user-to-user communications: With your consent, we may use your information in order to enable user-to-user communications with each user's consent.</li>
          <li>To respond to legal requests and prevent harm: For Legal Reasons, if we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</li>
          <li>For other Business Purposes: We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Sites, products, services, marketing and your experience.</li>
        </ul>

        {/* Will Your Information Be Shared With Anyone? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          We only share and disclose your information in the following situations:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-white/80 mb-6 space-y-2">
          <li>Compliance with Laws: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
          <li>Vital Interests and Legal Rights: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
          <li>Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li>Third-Party Advertisers: We may use third-party advertising companies to serve ads when you visit the Sites. These companies may use information about your visits to our Website(s) and other websites that are contained in web cookies and other tracking technologies in order to provide advertisements about goods and services of interest to you.</li>
          <li>Business Partners: We may share your information with our business partners to offer you certain products, services or promotions.</li>
          <li>With your Consent: We may disclose your personal information for any other purpose with your consent.</li>
        </ul>

        {/* Do We Use Cookies And Other Tracking Technologies? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our <a href="#" className="text-blue-600 hover:underline">Cookie Policy</a>.
        </p>

        {/* Is Your Information Transferred Internationally? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          Our servers are located in US. If you are accessing our Site from outside US, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "Disclosure of Information") and to whom your information may be disclosed (see "Disclosure of Information").
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          If you are a resident in the European Economic Area, then these countries may not have data protection or other laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy policy and applicable law.
        </p>

        <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-3">EU-US PRIVACY SHIELD FRAMEWORK</h3>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          In particular Cloudstick complies with the EU-US Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information transferred from the European Union to the United States and has certified its compliance with it. As such, Cloudstick is committed to subjecting all personal information received from European Union (EU) member countries, in reliance on the Privacy Shield Framework, to the Framework's applicable Principles. To learn more about the Privacy Shield Framework, visit the U.S. Department of Commerce's Privacy Shield list.
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          Cloudstick is responsible for the processing of personal information it receives, under the Privacy Shield Framework, and subsequently transfers to a third party acting as an agent on its behalf.
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          With respect to personal information received or transferred pursuant to the Privacy Shield Framework, Cloudstick is subject to the regulatory enforcement powers of the U.S. FTC. In certain situations, we may be required to disclose personal information in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.
        </p>

        {/* What Is Our Stance On Third-Party Websites? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h2>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          The Sites may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy policy. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services or applications that may be linked to or from the Sites. You should review the policies of such third parties and contact them directly to respond to your questions.
        </p>

        {/* How Long Do We Keep Your Information? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your personal information except email address post the termination of your account.
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
        </p>

        {/* How Do We Keep Your Information Safe? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Sites is at your own risk. You should only access the services within a secure environment.
        </p>

        {/* Do We Collect Information From Minors? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          We do not solicit data like address, email, card/payment information and education institution details from or market to children under 18 years of age. By using the Sites, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Site.
        </p>

        {/* What Are Your Privacy Rights? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) to data portability; (v) to object to the processing of your personal information; and (vi) to make a complaint to a supervisory authority. To make such a request, please submit your request in writing to us using the contact information provided below.
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal.
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" className="text-blue-600 hover:underline">http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>
        </p>

        <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-3">Account Information</h3>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          You may at any time review or change the information in your account or terminate your account by:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-white/80 mb-6 space-y-2">
          <li>Logging into your account settings and updating your account</li>
          <li>Contacting us using <a href="mailto:support@cloudstick.io" className="text-blue-600 hover:underline">support@cloudstick.io</a></li>
          <li>Terminate account directly from CloudStick dashboard</li>
        </ul>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our terms of use and/or comply with legal requirements.
        </p>

        <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-3">Cookies and similar technologies:</h3>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Sites. To opt-out of interest-based advertising by advertisers on our Site visit <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline">http://www.aboutads.info/choices/</a>. For further information, please see our Cookie Policy.
        </p>

        <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-3">Opting out of email marketing:</h3>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list - however, we will still need to send you service-related emails that are necessary for the administration and use of your account. You can also opt-out by:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-white/80 mb-6 space-y-2">
          <li>Noting your preferences at the time you register your account with the Sites</li>
          <li>Logging into your account settings and updating your preferences.</li>
          <li>Contacting us using <a href="mailto:support@cloudstick.io" className="text-blue-600 hover:underline">support@cloudstick.io</a></li>
        </ul>

        {/* Do California Residents Have Specific Privacy Rights? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
        </p>
        <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
          If you are under 18 years of age, reside in California, and have a registered account with the Site, you have the right to request removal of unwanted data that you publicly post on the Site. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Site, but please be aware that the data may not be completely or comprehensively removed from our systems.
        </p>

        {/* Do We Make Updates To This Policy? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">DO WE MAKE UPDATES TO THIS POLICY?</h2>
        <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
          We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
        </p>
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

export default GDPRPolicy;
