import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cookie, RotateCcw } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
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
            <RotateCcw className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Refund Policy</h1>
            <p className="text-muted-foreground">Last Modified: October 2020</p>
          </div>

         <div className="min-h-screen">
     <div className="min-h-screen">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800  p-6 sm:p-8 lg:p-10">
        {/* Header Section */}

        {/* Introduction */}
        <p className="text-gray-700 dark:text-white  mb-4 leading-relaxed">
          We believe in offering a flexible and friendly approach to enable and ensure long-term relationship with our clients and stakeholders.
        </p>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          We are here to ensure that our customers are well satisfied and delighted with CloudStick's product and services before they proceed with purchasing or subscribing to a paid plan. Customers can add their credit card details at any time point during the 10 days trial period.
        </p>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
          At CloudStick, our Refund Policy strictly emphasizes on following standardized industrial practices and norms. Initiation of refunds will be entertained only through CloudStick's official ticketing system.
        </p>

        {/* Coverage and Scope */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 mt-6">COVERAGE AND SCOPE</h2>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          After 10 days of free trial the account status will change to a limited or restricted mode where customers will be able to opt for a paid plan in order to enjoy the complete benefits of the product.
        </p>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          Customers are entitled to a full refund during the 10 days after the subscription of a paid plan begins. Note: This 10-day period begins when the subscription of paid service starts. For example: if you signed up for a 0-day free trial, the period begins on the first day of your initial payment. Even if you move to a paid subscription on the 5th day of initial 10-day trial period, you will be eligible for a refund for 10 days after your first payment to a paid subscription.
        </p>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          If a customer requests a refund, it will take around three to 5 business days to process the amount and all returns will be made through the same mode of payment the customer made payment initially.
        </p>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          Full subscription refunds for the products or services purchased from CloudStick will be granted for requests received by our billing team within 10 days of the payment. After 10 days, no refunds will be issued.
        </p>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          CloudStick has the right to deny a refund request from any customer, including but not limited to any evidence supporting an abuse to the CloudStick system or if the company believes a fraud is suspected.
        </p>
        <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
          Once the refund process is complete, the customer's account with CloudStick will automatically be downgraded to the Free plan.
        </p>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
          CloudStick shall not be liable with respect to any loss, damage, cost, or expense that you or any person may incur as a result of any delay in your financial institution, processing the said refund.
        </p>
      </div>
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

export default RefundPolicy;
