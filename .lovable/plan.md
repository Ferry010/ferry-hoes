

## Plan: Add Google Analytics with on-brand cookie consent bar

### 1. Google Analytics setup

You'll need a **Google Analytics Measurement ID** (format: `G-XXXXXXXXXX`). You can get one from [analytics.google.com](https://analytics.google.com) by creating a property for your site.

Once you have the ID, I'll:

- Add the GA4 `gtag.js` script to `index.html`, but **only load it after the user consents** (no tracking before consent)
- Create a small utility (`src/lib/analytics.ts`) that initializes GA and fires `gtag('consent', 'update', ...)` when the user accepts

### 2. Cookie consent bar component

Create `src/components/CookieConsent.tsx` — a slim, on-brand bar fixed to the bottom of the viewport:

- **Style**: Dark background (`bg-foreground`), white text, teal primary CTA button ("Accept"), ghost/outline "Decline" button — matching the existing footer and brand palette
- **Copy**: Short, friendly message: "This site uses cookies to improve your experience and analyze traffic."
- **Behavior**: Stores consent in `localStorage`. If already answered, the bar doesn't appear. On accept → load GA script dynamically. On decline → no tracking scripts loaded.
- **Animation**: Slides up on mount, slides out on dismiss

### 3. Integration

- Render `<CookieConsent />` in `src/App.tsx` (outside routes, visible on all pages)
- Add GA page-view tracking on route changes via a small `useEffect` in App that calls `gtag('event', 'page_view', ...)` when the pathname changes (only if consent was given)

### 4. What I'll need from you

Your **Google Analytics Measurement ID** (e.g. `G-XXXXXXXXXX`). I can hard-code it since it's a public/publishable key — no secret storage needed.

