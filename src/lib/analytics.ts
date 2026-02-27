const GA_MEASUREMENT_ID = "G-039HEJE92H";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function loadGoogleAnalytics() {
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: true });
}

export function trackPageView(path: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", { page_path: path });
  }
}

export function hasConsented(): boolean {
  return localStorage.getItem("cookie-consent") === "accepted";
}
