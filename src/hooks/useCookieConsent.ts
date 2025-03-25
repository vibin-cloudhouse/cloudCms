
import { useState, useEffect } from "react";

type ConsentStatus = "accepted" | "declined" | null;

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(null);
  
  useEffect(() => {
    const storedConsent = localStorage.getItem("cookie-consent") as ConsentStatus;
    setConsentStatus(storedConsent);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsentStatus("accepted");
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setConsentStatus("declined");
  };

  const resetCookiePreferences = () => {
    localStorage.removeItem("cookie-consent");
    setConsentStatus(null);
  };

  return {
    consentStatus,
    acceptCookies,
    declineCookies,
    resetCookiePreferences
  };
};
