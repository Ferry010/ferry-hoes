import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, hasConsented } from "@/lib/analytics";

export function usePageTracking() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (hasConsented()) {
      trackPageView(pathname);
    }
  }, [pathname]);
}
