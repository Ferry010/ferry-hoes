import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { loadGoogleAnalytics } from "@/lib/analytics";

const CONSENT_KEY = "cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Small delay so it slides in after page load
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
    if (stored === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const dismiss = () => {
    setExiting(true);
    setTimeout(() => setVisible(false), 300);
  };

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadGoogleAnalytics();
    dismiss();
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    dismiss();
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ease-out ${
        exiting ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ animation: exiting ? undefined : "slideUp 0.4s ease-out" }}
    >
      <div className="bg-foreground text-background px-6 py-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl">
          <p className="text-sm text-background/80 text-center sm:text-left">
            This site uses cookies to improve your experience and analyze traffic.
          </p>
          <div className="flex gap-3 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={decline}
              className="text-background/60 hover:text-background hover:bg-background/10"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={accept}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
