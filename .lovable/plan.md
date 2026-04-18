

## Fix-up pass: page copy + missing nav + hero check

Three issues. Tightly scoped. No homepage or design-system changes.

### Issue 1 — Restore full copy on /my-story, /the-idea, /writing

These three pages are currently `PlaceholderPage` stubs.

**`src/pages/MyStory.tsx`** — full rebuild as a real page (no longer uses PlaceholderPage):
- `<SiteHeader />` + `<SEOHead />` + `<Footer />`.
- Hero with eyebrow, H1 "I help brands become more **human**.", sub, and a portrait polaroid (`ferry-portrait.jpg`) with handwritten caption "Where it all started."
- Six narrative sections in editorial 2-column rhythm (eyebrow + H2 + body), with two pull quotes styled in Inter Tight large + orange period, and the "Mid-keynote, somewhere in 2025." polaroid mid-page using `ferry-on-stage.jpg`, plus "The book, finally on a shelf." polaroid using `ferry-bookstore.jpg`.
- Timeline section: vertical list, year + dash + milestone, ink type with orange year.
- Final CTA block: H2 "Want to work **together**.", body, primary `Book Ferry →` (external Speakers Academy, new tab), ghost `Read the idea →` to `/the-idea`.
- All copy verbatim from spec. No em/en dashes (already none in spec text except the timeline year separator "—" which I'll render as a comma per the no-dash rule).

**`src/pages/TheIdea.tsx`** — full rebuild:
- Same scaffolding (SiteHeader, SEOHead, Footer).
- Hero: eyebrow "• THE IDEA", H1 "Everyone can copy your technology. No one can copy your **people**.", sub.
- Three sections (The premise, The shift, The method) with eyebrow + H2 + body. Pull quote ("Efficiency is not a strategy. It's table stakes.") rendered as a handwritten Caveat block in navy, matching site treatment.
- The method's three numbered items rendered as a 3-column grid on desktop (each with `01.` orange numeral + bold question + body), stacking on mobile. Same pattern as `SpeakerSection` topic cards but no border (editorial restraint).
- Final CTA: primary `See the book →` to `/the-book`, ghost `Bring this talk to your team →` external to Speakers Academy.
- All "—" in spec body text replaced with commas (no dashes rule).

**`src/pages/Writing.tsx`** — replace placeholder with the real blog index:
- Reuse the existing `useBlogPosts()` hook and `BlogCard` component (already used by `/blog`).
- `<SiteHeader />`, `<SEOHead />` (canonical `/writing`), `<Footer />`.
- Hero: eyebrow "• WRITING", H1 "Short essays on humans, technology, and the work in **between**.", sub.
- Category filter row (pill buttons): All · Brand Humanizing · AI · Leadership · Future of Work. Client-side filter on post title/excerpt match (case-insensitive contains) since posts have no category column. "All" is default and active by default; this is a soft filter that gracefully shows everything when no posts match — meets spec without DB schema change.
- Grid: 3-column desktop, 2 tablet, 1 mobile. Uses `BlogCard` default variant.
- Empty state: "The first essays are being written. Check back soon."
- Loading skeleton matches `/blog` page.

The existing `/blog` route remains for back-compat; `/writing` becomes the canonical blog index per spec.

### Issue 2 — Missing global nav on /on-stage and /podcast

Both pages currently render `<Footer />` but no `<SiteHeader />`. Fix:

- **`src/pages/Speaking.tsx`**: import `SiteHeader` and render `<SiteHeader />` as the first element inside the returned fragment, before existing content. No other changes to this file.
- **`src/pages/Podcast.tsx`**: same — add `<SiteHeader />` as the first element. No other changes.

### Issue 3 — Hero "off-brand" feedback

I checked: the current `Hero.tsx` already follows the documented design system (Eyebrow + orange Period + polaroid + Caveat handwritten caption + Inter Tight display). The spec mentions Fraunces, but the project's typography memory (`mem://style/typography`) explicitly uses **Inter Tight + Inter + Caveat**, not Fraunces. The Hero matches every other page on the site.

I won't change the Hero. If the user wants Fraunces introduced site-wide, that's a separate, larger design-system change and should be raised explicitly. Calling it out here so the user can confirm or correct.

### Files touched

- **Rewritten**: `src/pages/MyStory.tsx`, `src/pages/TheIdea.tsx`, `src/pages/Writing.tsx`.
- **Edited (one-line nav add)**: `src/pages/Speaking.tsx`, `src/pages/Podcast.tsx`.
- **Untouched**: Hero, homepage, all other components and pages.

### Out of scope

- Homepage (Hero, CredentialsStrip, ThreeRoads, all sections).
- Design system, fonts, colors, spacing.
- Blog CMS / Supabase schema.
- Adding category column to `blog_posts` (filter is client-side).

