# Three fixes: Spotify button, fun 404, no-cookie policy

## 1. Keep "Listen on Spotify" on one line (mobile + up)

In `src/components/sections/PodcastSection.tsx`, the homepage CTA renders the Spotify icon + label as direct children of `PillButton`. The `PillButton` wraps everything in a single `<span>` with `whitespace-nowrap`, but on narrow viewports the icon + text can still break because the `flex` parent (`flex flex-wrap gap-3 md:gap-4`) lets the pill shrink and the SVG sits as an inline-flex item next to a text node.

Fix:
- Wrap the label in its own `<span className="whitespace-nowrap">` so the text never breaks mid-phrase.
- Ensure the same on the secondary "All episodes" button (it's already a single word, no risk).
- No design change — same orange pill, same icon, same copy. Just guarantees one line down to ~320px.

Same one-line guarantee added to the green Spotify button on the episode cards (`<a>` block, lines 122–130) by adding `whitespace-nowrap` to its className. This keeps the homepage buttons consistent.

No changes to `/podcast` page (out of scope unless user asks).

## 2. Fun, on-brand 404 page

Replace `src/pages/NotFound.tsx` with a humorous, editorial-minimalist version that fits the warm cream/ink/orange palette and the existing voice (Seth Godin / Rory Sutherland cadence).

Concept: **"You took a wrong turn. That's allowed."**

Layout (desktop, scaled responsively):
- Cream background, max-w-[1280px], same vertical rhythm as the rest of the site.
- Eyebrow: `• 404 — LOST IN THOUGHT`
- Massive display headline:
  > "You took a **wrong turn**.<br/>That's allowed**.**"
  (The orange Period component on the second line.)
- Sub-paragraph in conversational tone, e.g.:
  > "The page at `/whatever-they-typed` doesn't exist — or it did once and we tidied up. Either way, you're here now. Let's make it count."
- A handwritten Caveat note (per visual-direction memory), rotated -2deg, in ink-navy:
  > *"P.S. — getting lost is underrated."*
- A small **rotated polaroid** (using the existing `Polaroid` component) of Ferry, with caption "Ferry, also occasionally lost." — adds warmth and stays on-brand.
- Three "where to next" cards (keep the existing pattern but rewrite copy):
  - **Read** → `/the-idea` — "The one idea, ten years in the making."
  - **Listen** → `/podcast` — "Long conversations, no soundbites."
  - **Write back** → `/the-book` — "Or just say hi."
- Primary `PillButton` "Take me home" → `/`.
- Subtle Easter egg: a tiny line at the very bottom — `"Error code: ¯\_(ツ)_/¯"` in muted text.

Keep `<Helmet>` with `noindex, nofollow` and a witty title: `"Lost in thought. (404) | Ferry Hoes"`.

## 3. No-cookie policy + banner — Ferry Hoes brand

Port both pieces from the Brand Humanizing Institute project, restyled in the Ferry Hoes palette (cream background, ink type, orange accent, Caveat handwritten flourish — **not** the BHI dark "near-black" theme).

### a. Banner: `src/components/CookieBanner.tsx` (new, replaces unused `CookieConsent.tsx`)

- Fixed bottom-right card, rounded-3xl, **cream/ink** styling: `bg-foreground text-background` to mirror the footer's authority, with an orange accent line.
- Crossed-out cookie emoji 🍪 with an orange diagonal stroke (same SVG technique as BHI but using `hsl(var(--primary))`).
- Body copy (verbatim from BHI, it's already perfect):
  > "We don't use tracking cookies. We have no idea what you are doing on our website, as we cannot follow you around. This is a conscious decision made by us because if we would invite you to our office, we wouldn't follow your every move either."
- Two actions:
  - Link "Read the no-cookie policy" → `/no-cookies` (orange, underlined, dismisses on click).
  - Pill button "Fair enough" (orange, dismisses).
- Storage key: `fh-privacy-dismissed` (Ferry-Hoes-namespaced, distinct from existing `cookie-consent` key used by analytics opt-in).
- Animation: slides in from bottom after 1500ms (matches BHI).
- Mounted once in `App.tsx` next to `<ScrollToTop />`.

**Important interaction with existing analytics:** the project currently has `src/components/CookieConsent.tsx` which gates Google Analytics on `localStorage["cookie-consent"] === "accepted"`. Since this banner is never mounted, GA never loads today — so the new "no cookies" stance is already true in practice. To keep it honest:
- Delete `src/components/CookieConsent.tsx` (unused).
- In `src/lib/analytics.ts`, hard-code `hasConsent()` to `false` and short-circuit `loadGoogleAnalytics()` to a no-op, with a comment: *"We don't use tracking cookies. See /no-cookies."* This guarantees no future regression.

### b. Page: `src/pages/NoCookies.tsx` (new)

Same narrative structure as the BHI page, restyled:
- Cream background, ink text, orange accent. Editorial layout with `max-w-3xl`, generous vertical rhythm.
- Eyebrow `• POLICY` + display headline "The no-cookies cookie **policy.**" (orange Period).
- Sub-headline in handwritten Caveat: *"Yes, this is a real policy. No, there are no cookies."*
- Big crossed-out cookie 🍪 hero illustration (same SVG, orange stroke).
- Sections (copy adapted from BHI but rewritten in Ferry's first-person voice — Ferry is the author, not "we"):
  1. **The declaration** — accent-bordered pull quote (the main "no tracking cookies" paragraph, rephrased to "I don't…").
  2. **Visitor counter joke** — a card that says VISITOR COUNT, then a giant orange "?", subtitle: *"You could be my 10,000th visitor and I wouldn't have a clue."*
  3. **Where this comes from** — short story, adapted from BHI but credited to Ferry's growth-hacker past, mentioning Jonathan and the Brand Humanizing realization (Jonathan is the co-author of the book — already in the codebase context).
  4. **The realization** — big orange-tinted callout: *"We were optimizing datapoints. But datapoints were people."*
  5. **The decision** — short paragraph, conversational.
  6. **And thus: no cookies. 🚫🍪** — accent-bordered statement.
  7. **Sign-off** — "So see you around!" in orange, with shrug emoji subtitle.
- Standard `Footer` at the bottom. `<Helmet>` with title "The No-Cookies Cookie Policy | Ferry Hoes" and matching meta description.
- Add route in `App.tsx`: `<Route path="/no-cookies" element={<NoCookies />} />`.
- Add a footer link in `src/components/sections/Footer.tsx` bottom bar: "The No-Cookies Cookie Policy" linking to `/no-cookies`, alongside the existing copyright line.

## Files touched

- **New**:
  - `src/components/CookieBanner.tsx`
  - `src/pages/NoCookies.tsx`
- **Edited**:
  - `src/components/sections/PodcastSection.tsx` (add `whitespace-nowrap` to label spans)
  - `src/pages/NotFound.tsx` (full rewrite — humorous, on-brand)
  - `src/App.tsx` (mount `<CookieBanner />`, add `/no-cookies` route)
  - `src/components/sections/Footer.tsx` (add no-cookies link in bottom bar)
  - `src/lib/analytics.ts` (hard-disable GA loader to match the policy)
- **Deleted**:
  - `src/components/CookieConsent.tsx` (orphaned, replaced)

## Out of scope

- No changes to `/podcast` page Spotify buttons (those are `Button` components, not `PillButton`, and already render fine on the desktop-first podcast page — can revisit if user reports an issue).
- No analytics replacement (e.g., privacy-friendly Plausible) — the policy is "no tracking, period". If Ferry wants anonymized counts later, that's a separate decision.
- No translation of the no-cookies page to Dutch.
