

# Comprehensive SEO & LLM Optimization Plan

This is a large set of changes spanning meta tags, H1s, structured data, sitemap, image optimization, navigation, and speaking page content expansion. I'll break it into logical groups.

---

## 1. Meta Titles & Descriptions (all pages)

Update `<SEOHead>` props on every page:

| Page | File | New Title | New Description |
|------|------|-----------|-----------------|
| Homepage | `Index.tsx` | Keynote Speaker on AI & Brand Humanizing \| Ferry Hoes | Ferry Hoes is an international keynote speaker on AI, technology, and Brand Humanizing. Trusted by Vodafone, GlaxoSmithKline, and Toshiba. Book for your next conference or corporate event. |
| Speaking | `Speaking.tsx` | AI Keynote Speaker for Conferences & Corporate Events \| Ferry Hoes | Book Ferry Hoes for your next event. Keynote talks on AI, the future of work, human-centred leadership, and Brand Humanizing. Trusted by global organisations. Available internationally. |
| About | `About.tsx` | About Ferry Hoes \| International AI Keynote Speaker & Author | Ferry Hoes is an international keynote speaker, author of Brand Humanizing, and founder of the Brand Humanizing Institute. With over a decade in technology and marketing, he helps organisations stay human in an AI world. |
| Blog | `Blog.tsx` | Blog \| Ferry Hoes — Insights on AI, Technology & Brand Humanizing | Essays and perspectives on artificial intelligence, the future of work, human-centred leadership, and Brand Humanizing by keynote speaker Ferry Hoes. |
| Contact | `Contact.tsx` | Book Ferry Hoes \| Keynote Speaker Enquiries & Contact | Get in touch to book Ferry Hoes for your conference or corporate event. Available for keynotes, workshops, panel moderation, and hosting. International speaker based in the Netherlands. |
| Press | `Press.tsx` | Press & Media Kit \| Ferry Hoes \| Keynote Speaker | Media resources for journalists and event organisers. Download bios, headshots, and speaking topics for Ferry Hoes, international keynote speaker on AI and Brand Humanizing. |

**Blog posts**: In `BlogPost.tsx`, auto-generate meta description from first 155 chars of content (stripped of HTML) when `seo_description` is not set.

---

## 2. H1 Tag Fixes

| Page | File | Current H1 | New H1 |
|------|------|-----------|--------|
| Homepage | `HeroVideo.tsx` | "Speaker, author and brand humanizer" | "AI & Technology Keynote Speaker \| Ferry Hoes" |
| Speaking | `Speaking.tsx` | "Keynotes that inspire action" | "AI Keynote Speaker for Conferences & Corporate Events" |
| About | `About.tsx` | "My story" | "About Ferry Hoes — International AI Keynote Speaker" |
| Contact | `Contact.tsx` | "Contact" | Keep "Contact" + add H2 "Book Ferry for Your Event" |
| Now | `Now.tsx` | (no H1) | Add visually hidden H1 "What Ferry Is Doing Now" |

---

## 3. Structured Data Overhaul

### `src/components/StructuredData.tsx` — update/add schemas:

- **Replace `personSchema`** with the expanded version (nationality, address, hasOccupation, affiliation, expanded knowsAbout, expanded sameAs)
- **Replace `speakerEventSchema`** with new `speakingServiceSchema` (Service type with provider, areaServed, serviceType, audience, offers, aggregateRating)
- **Add `faqPageSchema`** — 5-question FAQ schema for the Speaking page
- **Add `reviewSchemas`** — array of 3 Review schemas from testimonials
- **Add `videoObjectSchema`** — for the speaker reel YouTube embed
- **Add `blogPostingSchema(post)` function** — generates BlogPosting JSON-LD dynamically from post data

### Usage updates:
- `Index.tsx`: use updated `personSchema`
- `Speaking.tsx`: use `speakingServiceSchema`, `faqPageSchema`, `reviewSchemas`, `videoObjectSchema`
- `BlogPost.tsx`: use `blogPostingSchema(post)`

---

## 4. Dynamic Sitemap

The static `public/sitemap.xml` cannot include dynamic blog posts. Solution:

- **Create a backend function** `supabase/functions/sitemap/index.ts` that queries published blog posts and generates XML dynamically
- **Add `/now` to the static pages** list with priority 0.3
- **Update `public/robots.txt`** to point sitemap to the edge function URL
- **Keep `public/sitemap.xml`** as fallback but also update it to include `/now`

Alternatively (simpler): since blog posts change infrequently, we can create a client-side sitemap page that's not ideal for crawlers. The edge function approach is better.

---

## 5. Lazy Loading Images

Add `loading="lazy"` to all `<img>` tags across the site except:
- Hero images get `loading="eager"` and `fetchPriority="high"`

Files to update: `HeroVideo.tsx` (video, not img — skip), `About.tsx`, `Speaking.tsx`, `BlogPost.tsx`, `BlogCard.tsx`, `SpeakerSection.tsx`, `Press.tsx`, and other components with images.

---

## 6. Navigation Aria Labels

In `SiteHeader.tsx`, add `aria-label` attributes to nav links with SEO-friendly descriptions (e.g., "My Story" gets `aria-label="About Ferry Hoes"`).

---

## 7. Speaking Page Content Expansion

This is the largest visual change. In `Speaking.tsx`:

### A. Geography Statement
Add after hero/ClientLogos: *"Based in the Netherlands. Speaking at conferences and corporate events across Europe, the US, and worldwide. Available in English and Dutch."*

### B. Expand Keynote Topics
Replace the Accordion with static content cards. Each topic gets:
- H3 title
- 3-4 sentence description (already have descriptions)
- Target audience line
- 3 bullet-point takeaways
- "Enquire about this talk" CTA linking to `/contact`

### C. Static Testimonials
Replace the Carousel with a responsive grid of all 9 testimonials as full-text static cards with name, org, and full quote. No JS hiding.

### D. "What to Expect" Section
Add a new section with clear expectations for event organizers (the user's message was cut off here, but I'll add a standard "what to expect when booking" section with 4-5 bullet points).

---

## Files Changed

| File | Changes |
|------|---------|
| `src/components/StructuredData.tsx` | Replace/expand all schemas, add new schema generators |
| `src/components/blog/SEOHead.tsx` | No changes needed (already flexible) |
| `src/pages/Index.tsx` | Update SEOHead props |
| `src/pages/Speaking.tsx` | Major rewrite: new SEO, H1, schemas, static topics, static testimonials, geography, "what to expect" |
| `src/pages/About.tsx` | Update SEOHead + H1 |
| `src/pages/Blog.tsx` | Update SEOHead props |
| `src/pages/BlogPost.tsx` | Update SEOHead fallback, add BlogPosting schema |
| `src/pages/Contact.tsx` | Update SEOHead + add H2 |
| `src/pages/Press.tsx` | Update SEOHead props |
| `src/pages/Now.tsx` | Add hidden H1 |
| `src/pages/Podcast.tsx` | No changes (already good) |
| `src/components/sections/HeroVideo.tsx` | Update H1 text |
| `src/components/SiteHeader.tsx` | Add aria-labels |
| `src/components/sections/SpeakerSection.tsx` | Add `loading="lazy"` to img |
| `src/pages/About.tsx` | Add `loading="lazy"` to images |
| `src/components/blog/BlogCard.tsx` | Add `loading="lazy"` to img |
| `public/sitemap.xml` | Add `/now`, update lastmod dates |
| `supabase/functions/sitemap/index.ts` | New — dynamic sitemap with blog posts |
| `public/robots.txt` | Update sitemap URL |

