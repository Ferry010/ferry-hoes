

## Comprehensive Site Improvements — 14 Items

This is a large set of changes spanning SEO, content, new pages, and a new database table. I'll group them into logical work units.

---

### 1. Fix site URL and canonical tags
**File: `src/config/site.ts`**
- Change `url` from `"https://yourdomain.com"` to `"https://ferryhoes.com"`
- This single change fixes all canonical tags site-wide since `SEOHead.tsx` builds canonical URLs from `siteConfig.url`

### 2. Improve page titles and OG meta
**Files: `src/pages/Index.tsx`, `src/pages/Speaking.tsx`, `src/pages/Podcast.tsx`, `src/pages/Blog.tsx`, `src/pages/BlogPost.tsx`, `src/pages/About.tsx`, `src/pages/Contact.tsx`**
- Homepage title: `"Ferry Hoes | Keynote Speaker on AI, Technology & Brand Humanizing"`
- Podcast title: `"The Human Era Podcast | Ferry Hoes – Conversations on Humans & Technology"` (already close, update slightly)
- Speaking: `"Speaking | Ferry Hoes"` → `"Keynote Speaking | Ferry Hoes – Inspiring Talks on AI & Brand Humanizing"`
- Blog: already `"Blog | Ferry Hoes"` → add more descriptive subtitle
- About: already `"About Ferry | Ferry Hoes"` → `"About Ferry Hoes | Speaker, Author & Brand Humanizing Pioneer"`
- Contact: already has title → `"Contact | Ferry Hoes – Get in Touch"`
- Update each page's `description` prop to be unique and descriptive

### 3. Add Schema.org structured data (JSON-LD)
**New file: `src/components/StructuredData.tsx`** — reusable component that injects `<script type="application/ld+json">` via Helmet
- Person schema on homepage + About
- Book schema on homepage (BookSection)
- PodcastSeries schema on Podcast page
- BreadcrumbList schema on all inner pages
- Event/SpeakerEvent schema on Speaking page

Inject into each page's render.

### 4. Fix homepage H1
**File: `src/components/sections/HeroVideo.tsx`**
- Change the H1 from `"Ferry Hoes"` to `"Most people make technology complicated. I make it human."`
- Make "Ferry Hoes" a styled `<p>` label above it (it's already somewhat structured this way, but the H1 needs to swap)

**File: `src/components/sections/AboutBlock.tsx`**
- Change the `<p>` "Ferry Hoes" label and `<h2>` quote — since the H1 now carries the quote on the hero, change AboutBlock's heading to an `<h2>` with different phrasing to avoid duplication. Keep the descriptive text but adjust so it doesn't repeat the hero verbatim.

### 5. Add email newsletter / waitlist capture
**Database migration**: Create `email_subscribers` table with columns: `id`, `email`, `source` (e.g. "newsletter", "english_waitlist"), `created_at`. RLS policy: allow anonymous inserts, no select.

**New file: `src/components/sections/NewsletterSection.tsx`**
- "Stay in the loop" heading
- Supporting copy: "Insights on technology, humanity, and Brand Humanizing — straight to your inbox. No noise."
- Email input + "Subscribe" button
- Insert into `email_subscribers` with `source: "newsletter"`

**File: `src/components/sections/BookSection.tsx`**
- Replace the "Request English edition" chat-bubble button with an inline form
- Heading: "Get notified when the English edition launches"
- Email input + "Join the waitlist" button
- Insert into `email_subscribers` with `source: "english_waitlist"`

**File: `src/pages/Index.tsx`**
- Import and place `NewsletterSection` between `BookSection` and `PodcastSection`

### 6. Replace homepage hero image in AboutBlock
**File: `src/components/sections/AboutBlock.tsx`**
- Change the image from `ferry-bookstore.jpg` to `ferry-speaking-audience.jpg` (on-stage photo already in assets)

### 7. Improve Speaking page "Meet Ferry" copy
**File: `src/pages/Speaking.tsx`** (lines 166-181)
- Replace the three paragraphs with the provided authentic copy about Ferry's decade at the intersection of technology/marketing/human behaviour, building Brand Humanizing from scratch, the provocation, and "Monday morning" takeaway.

### 8. Add keynote topics section to Speaking page
**File: `src/pages/Speaking.tsx`**
- Add a new section after the "Meet Ferry" article (before `SpeakingQA`)
- Title: "Keynote topics"
- Three cards:
  1. **Brand Humanizing** — premise, "45–60 min keynote", link to booking
  2. **The Human Side of AI** — premise, "45–60 min keynote", link to booking
  3. **The Future of Work is Human** — premise, "45–60 min keynote", link to booking

### 9. Fix footer navigation
**File: `src/components/sections/Footer.tsx`**
- Add "Blog" link to `/blog`
- Add "The Book" as anchor link to `/#book`
- Ensure nav matches header: My Story (About), The Idea (/#brand-humanizing), On Stage (Speaking), Podcast, Blog, The Book (/#book), Contact

### 10. Add /press page
**New file: `src/pages/Press.tsx`**
- Short approved bio (50-word + 150-word versions)
- Downloadable headshots section (link to existing images)
- Topics Ferry speaks about
- Contact prompt → link to `/contact` with `state={{ from: "press" }}`

**File: `src/App.tsx`** — Add `/press` route
**File: `src/components/sections/Footer.tsx`** — Add "Press" link

### 11. Improve About page readability
**File: `src/pages/About.tsx`**
- Break biography into sections with subheadings: "The early years", "Discovering the stage", "From tech sales to big ideas", "The birth of Brand Humanizing", "Where I am now"
- Add 1-2 pull quotes (styled with left border accent)
- Ensure short paragraphs with spacing between sections

### 12. Strengthen Community / Discord section
**File: `src/components/sections/CommunitySection.tsx`**
- Add social proof line: "Join 400+ builders, thinkers, and doers already in the community."
- Add 3-item bullet list of member benefits (early access, live Q&As, network)
- Keep Discord CTA prominent

### 13. Contact page — already exists
The `/contact` page already exists with full form fields, heading, and confirmation. The header CTA already links to `/contact`. The overlay (`AskFerryBubble`) remains as secondary. No changes needed.

### 14. Improve Twitter/OG meta per page
Handled as part of item #2 — each page already passes unique `title` and `description` to `SEOHead`, which generates both OG and Twitter meta. Updating those props fixes this.

---

### Files changed (summary)
- `src/config/site.ts` — fix URL
- `src/pages/Index.tsx` — title, structured data, newsletter section
- `src/pages/Speaking.tsx` — title, copy, keynote topics, structured data
- `src/pages/Podcast.tsx` — title tweak, structured data
- `src/pages/Blog.tsx` — title, structured data
- `src/pages/BlogPost.tsx` — structured data
- `src/pages/About.tsx` — title, biography restructure, structured data
- `src/pages/Contact.tsx` — title tweak
- `src/components/sections/HeroVideo.tsx` — H1 fix
- `src/components/sections/AboutBlock.tsx` — swap image, adjust heading
- `src/components/sections/BookSection.tsx` — English waitlist inline form
- `src/components/sections/CommunitySection.tsx` — social proof + benefits
- `src/components/sections/Footer.tsx` — add Blog, Book, Press links
- `src/components/StructuredData.tsx` — new, reusable JSON-LD component
- `src/components/sections/NewsletterSection.tsx` — new, email capture section
- `src/pages/Press.tsx` — new page
- `src/App.tsx` — add `/press` route
- **Database migration**: `email_subscribers` table with anonymous insert RLS

### Technical detail
- The `email_subscribers` table needs no auth since these are public signups. RLS: `INSERT` for `anon` role, no `SELECT`/`UPDATE`/`DELETE` for `anon`.
- Structured data uses `react-helmet-async` to inject `<script>` tags, same pattern as existing `SEOHead`.
- All existing images reused — no new assets needed.

