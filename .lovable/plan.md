

# Homepage Redesign: Idea-Led Platform

Shifts the homepage from "speaker brochure" to "idea platform" by reordering sections, reframing the hero, and updating navigation — while keeping all existing copy, routes, colors, and functional elements.

---

## What already exists (no changes needed)

The previous warmth upgrade already implemented: warm cream backgrounds, Plus Jakarta Sans, polaroid photo treatment on AboutBlock, dot badges, warm card backgrounds, pill buttons with hover scale, warm footer, scroll-reveal animations, and warm community gradient. These stay as-is.

---

## Changes

### 1. Navigation — reorder and rename
**Files:** `SiteHeader.tsx`, `IndexOverlay.tsx`

Update `NAV_ITEMS` array:

| Current | New |
|---------|-----|
| My Story \| The Idea \| On Stage \| Podcast \| Blog \| The Book | The Idea \| Writing \| Podcast \| Speaking \| The Book \| About |

Renames: "My Story" → "About", "On Stage" → "Speaking", "Blog" → "Writing". "Get in touch" CTA stays at the end, unchanged.

### 2. Hero section — reframe around the idea
**File:** `HeroVideo.tsx`

Keep the video background. Replace the chat-bubble content with:

- **Primary headline** (large, bold, white on video): "Technology is getting more powerful. Brands need to become more human."
- **Subheadline** (teal accent): "That's Brand Humanizing."
- **Body text** (existing copy from SpeakerSection): "From AI and the future of work to human-centered design and brand transformation. Talks that challenge assumptions, spark conversations, and leave audiences with actionable insights."
- **Two CTAs:**
  - Primary (coral filled, pill): "Explore Brand Humanizing →" — scrolls to `#brand-humanizing`
  - Secondary (ghost/outline): "Book Ferry to speak →" — links to Speakers Academy external URL
- **Polaroid photo** of Ferry on stage (reuse `ferry-speaking.jpg`): white frame, `-1.5deg` rotation, soft shadow, Caveat annotation: "Ferry — keynote speaker, Brand Humanizing"
- **H1 tag** preserved for SEO: "AI & Technology Keynote Speaker" (visually hidden or as the name line)

Layout: Two columns on desktop (text left, polaroid right). Stacked on mobile (text first, polaroid below).

### 3. Section reorder on homepage
**File:** `Index.tsx`

New order:
1. Hero (HeroVideo)
2. BrandHumanizingSection ("The Idea")
3. AboutBlock ("About Ferry")
4. SpeakerSection ("On Stage")
5. BookSection ("The Book")
6. PodcastSection ("The Podcast")
7. BlogSection ("Writing")
8. AboutFerryLLM (SEO text block)
9. CommunitySection ("Stay Connected")
10. Footer

Current order moves BrandHumanizing from position 3 to position 2 (right after hero), and AboutBlock stays at position 3.

### 4. Speaker section — add attribution line
**File:** `SpeakerSection.tsx`

Add below the CTAs, in muted small text:
"Ferry is exclusively represented by Speakers Academy. His full speaker profile is available there."
— with "Speakers Academy" linking to the external SA URL.

### 5. Blog section label rename
**File:** `BlogSection.tsx`

Change badge text from "The Blog" to "Writing".

### 6. Book section — warm gradient background
**File:** `BookSection.tsx`

Change `bg-secondary/90` to `bg-gradient-to-br from-[hsl(38,35%,94%)] to-[hsl(188,25%,92%)]`.

---

## Files changed summary

| File | Change |
|------|--------|
| `src/components/SiteHeader.tsx` | Reorder + rename nav items |
| `src/components/IndexOverlay.tsx` | Reorder + rename nav items |
| `src/components/sections/HeroVideo.tsx` | New idea-led hero with polaroid photo |
| `src/pages/Index.tsx` | Reorder sections |
| `src/components/sections/SpeakerSection.tsx` | Add Speakers Academy attribution |
| `src/components/sections/BlogSection.tsx` | Rename badge to "Writing" |
| `src/components/sections/BookSection.tsx` | Warm gradient background |

