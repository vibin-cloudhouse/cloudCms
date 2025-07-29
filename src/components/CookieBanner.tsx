
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieChoice = localStorage.getItem("cookie-consent");
    if (!cookieChoice) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    toast({
      title: "Cookies accepted",
      description: "Thank you for accepting cookies",
    });
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
    toast({
      title: "Cookies declined",
      description: "You can change your preferences anytime",
    });
  };

  const resetCookiePreferences = () => {
    localStorage.removeItem("cookie-consent");
    setShowBanner(true);
    toast({
      title: "Cookie preferences reset",
      description: "Please choose your cookie preferences",
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Cookie className="h-5 w-5 text-[#006FEE] mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                We use cookies
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-3xl">
                We use cookies to improve your experience and analyze website traffic. 
                By clicking "Accept", you agree to our website's cookie use as described in our{" "}
                <Link to="/legal/cookies" className="text-[#006FEE] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                  Cookie Policy
                </Link>.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 ml-0 md:ml-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">Cookie settings</Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle>Cookie Settings</SheetTitle>
                  <SheetDescription>
                    Customize how we use cookies on this device
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Cookie className="h-5 w-5 text-[#006FEE] mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium">Essential Cookies</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          These cookies are necessary for the website to function and cannot be disabled.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Cookie className="h-5 w-5 text-[#006FEE] mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium">Analytics Cookies</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          These cookies help us understand how visitors interact with our website.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Cookie className="h-5 w-5 text-[#006FEE] mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium">Marketing Cookies</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          These cookies are used to track visitors across websites to display relevant advertisements.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 space-x-2 flex justify-end">
                    <Button variant="outline" onClick={declineCookies}>
                      Decline All
                    </Button>
                    <Button onClick={acceptCookies}>
                      Accept All
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <Button variant="outline" size="sm" onClick={declineCookies}>
              Decline
            </Button>
            
            <Button size="sm" onClick={acceptCookies}>
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
