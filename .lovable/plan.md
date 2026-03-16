

# SEO & LLM Optimization — Remaining Items (8–15)

Items 1–7 from your list were already implemented in the previous round. This plan covers the remaining items.

---

## 8. Contact Page: Dedicated Booking Form

**File: `src/pages/Contact.tsx`**

- Add `ContactPage` schema via `StructuredData`
- Replace the current generic form with a tabbed or sectioned layout:
  - **"Book Ferry To Speak"** section at the top with specific fields: Name, Organisation, Event name, Event date, Event location, Expected audience size, Topic of interest (dropdown with 5 keynote titles + "Other"), Message
  - Add response time promise: "I respond to all speaking enquiries within 2 business days"
  - Keep existing general contact form below as a secondary section
- The booking form submits to the same `contact_messages` table (the existing columns cover name, email, organization, message, inquiry_type, timeline)
- Add new `contactPageSchema` to `StructuredData.tsx`

**Database**: The existing `contact_messages` table columns are sufficient — event-specific fields (event name, location, audience size, topic) can be included in the `message` field via structured formatting, avoiding a migration.

---

## 9. LLM/AI Search Optimization Content on Homepage

**File: `src/pages/Index.tsx`** + new component `src/components/sections/AboutFerryLLM.tsx`

- Add a new section below BlogSection and above CommunitySection
- Title: "About Ferry Hoes" — factual, third-person prose
- Content covers: who he is, what he does, core topics, credentials, book, podcast, booking info
- Clean semantic HTML with proper heading hierarchy

---

## 10. OG Images Per Page

**File: `src/components/blog/SEOHead.tsx`** + page files

- Set unique `ogImage` prop on each page's `<SEOHead>`:
  - Homepage: existing social image URL (already in index.html)
  - Speaking: `ferry-on-stage.jpg` asset
  - About: `ferry-portrait.jpg` asset
  - Blog listing: `ferry-presenting.jpg` asset
  - Blog posts: already use `post.header_image_url` (done)
  - Press: `ferry-speaking.jpg`
- Since these are local assets bundled by Vite, they won't have absolute URLs at build time. Solution: use the existing storage image URL for homepage, and for other pages reference the same base URL pattern or use a consistent `ferryhoes.com` prefix

Given the constraint that Vite-bundled assets don't produce absolute URLs usable in meta tags, the pragmatic approach is to reference the existing external social image for all pages until proper OG images are uploaded to storage. I'll set distinct `ogImage` values where absolute URLs are available.

---

## 11. Expand Press Page

**File: `src/pages/Press.tsx`**

- Add "As Featured In" section with placeholder logos/text for future media appearances
- Add explicit download buttons for headshots (using `download` attribute on `<a>` tags)
- Add "Media enquiries" section with a direct CTA to the contact form with `press` pre-selected
- Add `ItemList` schema for downloadable assets in `StructuredData.tsx`

---

## 12. Now Page

Already has H1 ("What Ferry Is Doing Now"), meta description, and interactive content. No changes needed — it's already Option B.

---

## 13. Upcoming Speaking Events on Speaking Page

**File: `src/pages/Speaking.tsx`**

- Add "Upcoming Events" section after the geography statement
- Initially show a placeholder: "Dates announced regularly — follow Ferry on LinkedIn for the latest schedule"
- Include a link to LinkedIn
- Later this could be backed by a database table, but for now static content is sufficient for SEO signals

---

## 14. Blog Content Improvements

**Files: `src/pages/BlogPost.tsx`**, `src/components/blog/PostCTA.tsx`

- Add author byline with link to `/about` below the title/date area
- Replace current PostCTA (Discord-focused) with a speaking-focused CTA: "Interested in bringing these ideas to your organisation? Ferry speaks about [topic] at conferences and corporate events. Book Ferry for your event."
- Add "You might also like" section at the bottom linking to `/speaking` and other blog posts (fetch 2-3 related posts)
- Blog post URLs are already in the dynamic sitemap (done)

---

## 15. Technical Fixes

**File: `index.html`**
- Add `<link rel="preconnect">` for the Supabase storage domain and fonts
- OG image URLs already use external URLs

**Files: various components**
- Add `width` and `height` attributes to key `<img>` tags to prevent CLS (About, Speaking, Press, BlogCard)
- Hero images already have `fetchpriority="high"` (done)
- FAQ on Speaking page is already rendered as static DOM content, not JS-injected accordion (done)

---

## Files to Change

| File | Change |
|------|--------|
| `src/pages/Contact.tsx` | Booking form with event-specific fields, ContactPage schema, response time promise |
| `src/components/StructuredData.tsx` | Add `contactPageSchema`, `itemListSchema` |
| `src/pages/Index.tsx` | Add AboutFerryLLM section |
| `src/components/sections/AboutFerryLLM.tsx` | New — LLM-optimized about content |
| `src/pages/Speaking.tsx` | Add upcoming events placeholder section, OG image |
| `src/pages/Press.tsx` | Expand with featured-in, download buttons, media enquiry section, ItemList schema |
| `src/pages/BlogPost.tsx` | Author byline, related posts, updated CTA |
| `src/components/blog/PostCTA.tsx` | Rewrite as speaking-focused CTA |
| `index.html` | Add preconnect links |
| `src/pages/About.tsx` | Add width/height to images, OG image |
| `src/components/blog/BlogCard.tsx` | Add width/height to img |

