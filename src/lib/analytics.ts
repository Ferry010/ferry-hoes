/**
 * Analytics is intentionally disabled.
 *
 * Ferry doesn't use tracking cookies — see /no-cookies for the full story.
 * These functions are kept as no-ops so existing call sites (e.g. the page
 * tracker hook and old cookie-consent flows) continue to compile without
 * loading any third-party scripts or storing any state.
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function loadGoogleAnalytics() {
  // No-op. We don't load Google Analytics.
}

export function trackPageView(_path: string) {
  // No-op. We don't track page views.
}

export function hasConsented(): boolean {
  return false;
}
