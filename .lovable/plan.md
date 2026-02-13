
# About Page - "About Ferry"

A dedicated `/about` page matching the homepage's editorial, magazine-like style with full-bleed sections, split layouts, badges, and the alternating teal/orange title pattern.

---

## Page Structure

The page will follow the same immersive scrolling pattern as the homepage and Speaking page, with the fixed gradient stripe, floating orbs, and section-by-section storytelling.

### Section Breakdown

| # | Section | Layout | Title Color |
|---|---------|--------|-------------|
| 1 | Hero | Centered text, no video | Black + Orange |
| 2 | The Story | Split layout (photo left, text right) | Teal + Black |
| 3 | What I Believe | Centered, 3-column values grid | Black + Orange |
| 4 | Career Timeline | Vertical timeline with milestones | Teal + Black |
| 5 | Fun Facts / Off-Stage | Split layout (text left, photo right) | Black + Orange |
| 6 | CTA / Connect | Dark bg, centered (like CommunitySection) | White + Gold |

---

### 1. Hero Section
- Badge: "About" with a User icon
- Headline: "The human behind the **brand**" (orange on "brand")
- Subtext: A short one-liner about Ferry's mission
- Reuses the bookstore photo (`ferry-bookstore.jpg`) as a subtle background or below the text

### 2. The Story
- Split layout matching `AboutBlock` and `SpeakerSection` patterns
- Left: `ferry-bookstore.jpg` full-bleed
- Right: Multi-paragraph bio covering Ferry's background, what drives him, and his journey from entrepreneur to speaker/author
- Badge: "My Story" with a BookOpen icon

### 3. What I Believe (Values)
- Centered header with badge
- 3 cards in a grid, each with an icon, title, and short description:
  - "Technology should serve people" 
  - "Brands must stay human"
  - "Real change starts with conversation"
- Uses the same card pattern as Speaking page topics

### 4. Career Highlights / Timeline
- A clean vertical timeline showing key milestones
- Items like: "Founded [company]", "Published Brand Humanizing", "First keynote at [event]", "Launched The Human Era Podcast"
- Alternating left/right alignment on desktop

### 5. Off-Stage / Personal Side
- Split layout (reversed from section 2)
- Text about hobbies, music, AI experiments, coffee conversations
- Right side: `ferry-on-stage.jpg` (or a placeholder for a personal photo)
- Keeps the human, non-corporate feel

### 6. Final CTA
- Dark background section (matching CommunitySection / Speaking final CTA style)
- "Want to work together?" headline
- Buttons: "Book as speaker" (links to Speakers Academy) and "Send a message" (opens chat bubble)

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/pages/About.tsx` | Create - the full About page |
| `src/App.tsx` | Modify - add `/about` route |
| `src/components/sections/Footer.tsx` | Modify - update nav link for "About" (currently missing) |

---

## Technical Notes

- Reuses existing photo assets (`ferry-bookstore.jpg`, `ferry-on-stage.jpg`)
- Includes `SEOHead` with canonical URL `/about`
- Uses the fixed gradient stripe and floating orb decorative elements (same as homepage/Speaking)
- Semantic HTML: `<header>`, `<main>`, `<article>`, `<section>`, `<footer>`
- Follows the alternating teal+black / black+orange title color pattern
- Includes `FloatingChatBubble` and `Footer` components
- The "About Ferry" link in `AboutBlock.tsx` on the homepage already points to `/about`, so it will work automatically
