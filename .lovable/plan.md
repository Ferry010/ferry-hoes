# AI Geletterdheid landing page (NL, hidden)

A standalone Dutch SEO landing page promoting AIGA (AI Geletterdheid Academy) — a Brand Humanizing × Speakers Academy collab — with strong link-building toward `aigeletterdheid.academy`. Reachable by direct URL and from sitemap, but absent from the main nav.

## Route & visibility

- New route: `/ai-geletterdheid` rendered by `src/pages/AIGeletterdheid.tsx`
- Add to `src/App.tsx` routes (above the catch-all)
- NOT added to `SiteHeader` `NAV_ITEMS` or mobile menu
- Included in `supabase/functions/sitemap/index.ts` STATIC_PAGES so Google can discover it
- Optional small footer link "AI Geletterdheid" so it's crawlable from the homepage (improves indexability without polluting nav). If you'd rather keep it fully orphaned from internal nav, we drop this.

## SEO setup

Page uses `<SEOHead>` with:
- `title`: "AI Geletterdheid — verplicht vanaf 2 augustus 2026 | Ferry Hoes"
- `description`: ~155 char Dutch summary mentioning EU AI Act Artikel 4, AIGA-certificaat en de deadline
- `keywords`: ai geletterdheid, ai literacy, eu ai act artikel 4, aiga, ai training, ai certificaat
- `canonicalUrl`: `/ai-geletterdheid`
- `ogType`: "article", `ogImage`: generated 1200×630 image (or reuse an existing hero — your call)
- Inline JSON-LD via `<StructuredData>`:
  - `Course` schema (provider: AIGA, in samenwerking met Speakers Academy & Brand Humanizing Institute, url → aigeletterdheid.academy)
  - `FAQPage` schema mirroring the on-page FAQ
  - `BreadcrumbList`: Home → AI Geletterdheid

All outbound links to `aigeletterdheid.academy` use `rel="noopener"` (no `nofollow` — we want the link equity to flow) and descriptive anchor text ("Start de AIGA-training", "Bekijk aigeletterdheid.academy", etc.) for link-building value.

## Page content (Dutch, Ferry voice)

Editorial-minimalist layout matching the rest of the site: cream bg, ink type, single orange accent, `<Eyebrow>` + `<Period />` per section, 1280px container, left-aligned.

Sections:

1. **Hero**
   - Eyebrow: `EU AI Act · Artikel 4 · AIGA`
   - H1: "AI Geletterdheid." (with `<Period />`)
   - Lede: 2 zinnen — wettelijke verplichting + waarom het meer is dan compliance
   - Twee `PillButton`s: primary → `https://aigeletterdheid.academy` ("Start de AIGA-training"), ghost → anchor naar FAQ

2. **Waarom nu — de EU AI-wet**
   - Deadline 2 augustus 2026, Artikel 4, boetes tot €35M
   - Korte uitleg waarom wachten geen optie is

3. **Wat AI geletterdheid écht is**
   - Niet voor IT, voor iedereen die met AI werkt
   - Begrip + kritisch oordeel + menselijk inzicht
   - Bruggetje naar het Brand Humanizing framework

4. **De vier vaardigheden** (2×2 grid, gebaseerd op het BH-raamwerk)
   - Creativiteit & organisatiebewustzijn
   - Gedragswetenschappen & onderzoek
   - Programmeren, automatisering & AI
   - Emotionele intelligentie & ethiek

5. **De training**
   - 3–4 uur, volledig online, certificaat geldig als EU AI Act Artikel 4 documentatie
   - Lijst van wat deelnemers meenemen
   - CTA → aigeletterdheid.academy

6. **De samenwerking**
   - AIGA = Brand Humanizing Institute × Speakers Academy
   - Ferry's rol kort genoemd, link naar `/my-story`
   - NL/BE nu beschikbaar, EN in ontwikkeling

7. **FAQ** (accordion via shadcn `Accordion`)
   - Wat is AI geletterdheid?
   - Wanneer wordt het verplicht?
   - Wat zegt Artikel 4 precies?
   - Voor wie is AIGA bedoeld?
   - Verschil AIGA vs. Brand Humanizing Institute?
   - Duur en kosten?

8. **Slot-CTA**
   - "De deadline is 2 augustus 2026."
   - Grote knop → aigeletterdheid.academy

Footer (shared `Footer` component) sluit de pagina af.

## Files

- **New**: `src/pages/AIGeletterdheid.tsx`
- **Edit**: `src/App.tsx` (route)
- **Edit**: `supabase/functions/sitemap/index.ts` (add `/ai-geletterdheid` to STATIC_PAGES)
- **Optional edit**: `src/components/sections/Footer.tsx` (subtle crawlable link)

## Open question

Do you want me to add a small, low-key footer link to `/ai-geletterdheid` for crawlability, or keep it completely orphaned from internal navigation (relying only on sitemap + the published URL you share externally)?
