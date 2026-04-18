

## Copy + IA overhaul (no design changes)

Pure text/link/order work. Constants:
- `SPEAKERS_ACADEMY_URL` (already in code)
- `BOOK_RETAILER_URL = "https://brandhumanizingboek.nl"`
- `PITCH_EMAIL = "ferry@brandhumanizing.com"`

### 1. Homepage — `Index.tsx` (section reorder + SEO)

Reorder `<main>` to: BrandHumanizingSection (kept) is moved DOWN; new order:
1. Hero
2. TrustLine
3. **BlogSection** (Writing)
4. **BookSection**
5. **SpeakerSection** (On Stage)
6. **PodcastSection**
7. **BrandHumanizingSection** (The Idea)
8. **AboutBlock** (My Story)
9. AlsoByFerry
10. CommunitySection (Newsletter)

SEO meta description → "Ferry Hoes writes, speaks, and podcasts about one idea: technology should make us more human, not less. Essays, the book Brand Humanizing, The Human Era Podcast, and keynotes."

### 2. `Hero.tsx`

- Eyebrow unchanged.
- H1 → `Technology should make us more` `human,` (orange) ` not less` `.` (orange Period). Preserve current two-line `<br />` so wrapping reads naturally.
- Sub → "I'm Ferry Hoes. I write, speak, and podcast about one idea ten years in the making: technology that amplifies what's human instead of replacing it. Everything below is a way in."
- Primary CTA → `Read the latest essay →`. Use `useBlogPosts(1)` to fetch the most recent post; if a slug exists, link to `/blog/{slug}`, otherwise fallback to `/writing`. (Component supports `to` prop already.)
- Ghost CTA stays: `Book Ferry →` external to Speakers Academy.
- Polaroid + caption untouched.

### 3. `TrustLine.tsx`

- Replace sentence with: `Teams I've worked with: Vodafone, GSK, Toshiba, Atos, ASR, Chubb, and the Dutch Ministry of Finance.`

### 4. `BlogSection.tsx` (Writing — moved up)

- H2 → "The latest from my `desk`." (orange + Period).
- Add a sub paragraph under the headline: "Short essays on humans, technology, and the work in between. New ones when there's something worth saying."
- Empty state copy → "The first essays are being written. Check back soon."
- CTA stays: `All writing →`.

### 5. `BookSection.tsx` (moved up, more prominent)

- H2 → "The full argument, on `paper`." (orange + Period).
- Body paragraph (replaces current 2 paragraphs) → "Brand Humanizing — co-written with my best friend Jonathan Flores. Ten years of thinking, a framework, and case studies from the organisations actually getting it right. Available in Dutch now. English edition on the way."
- Case-studies row already exists ("Featuring case studies from a.s.r., Ben & Jerry's, Dove, Octopus Energy, Patagonia and more.") — keep as is, it satisfies the spec.
- Add ghost CTA `English waitlist` next to primary `See the book →`. Ghost links to `/the-book#waitlist`. (Anchor target lives on the homepage form too — using `/the-book` page anchor is consistent with spec; on the home page the form is right there so the anchor is purely for users who navigate first.)
- Waitlist form copy unchanged.

### 6. `SpeakerSection.tsx` (On Stage)

- H2 → "Want this in your `room`." (orange + Period).
- Sub → "I give around 40 keynotes a year to boards, leadership teams, and everyone trying to figure out what 'human' means in a tech-heavy world. My agent handles bookings."
- Three topic cards already in correct order (Brand Humanizing → Human Era of Work → AI without the noise). No changes.
- CTAs unchanged: primary `Book Ferry →` external, ghost `See talks & reel →` to /on-stage.

### 7. `PodcastSection.tsx`

- H2 → "Long conversations, no `soundbites`." (orange + Period).
- Sub → "I host The Human Era Podcast. Guests include CEOs, professors, artists, and entrepreneurs asking good questions about the balance between efficiency and meaning."
- Episode cards unchanged.
- CTAs: keep primary `Listen on Spotify` (external). Replace second pill `Listen on Apple` with ghost `All episodes →` linking to `/podcast`. (Spec asks for these two CTAs; the Apple link still lives on /podcast page itself.)

### 8. `BrandHumanizingSection.tsx` (The Idea)

- H2 → "One idea, ten years in the `making`." (orange + Period).
- Body → replace 3 paragraphs with: 
  1. "Technology should amplify what's human, not replace it. It sounds obvious. It isn't."
  2. "Most organisations are still racing in the wrong direction — using tech to do more of the same, faster. The brands that win in the long run do the opposite."
- Keep handwritten line: "Sounds obvious. Turns out it isn't."
- CTA stays: `Read the full idea →`.

### 9. `AboutBlock.tsx` (My Story)

- H2 → "How I got `here`." (orange + Period).
- Body → "Talkative kid from Delft. Introverted student. Teenager writing lyrics. IT sales account manager. Growth hacker. Then one lunch with my best friend Jonathan in 2017 and a term that stuck: Brand Humanizing. This is the long version."
- Polaroid caption stays "Mid-keynote, somewhere in 2025." (already matches).
- CTA label → `More about me` (was "More about Ferry").

### 10. `Speaking.tsx` (/on-stage page) — final CTA only

- Final CTA "Book Ferry" already external — no change.
- Spec also asks to update talk 02 to "Human Era of Work" — already done in previous pass. Verified.
- Hero, takeaways, all other content untouched.

### 11. `Podcast.tsx` page — small additions

- Hero H1 stays as the existing styled headline (page already exists; spec says "create if doesn't exist" → skip recreation). 
- Update only the bottom CTA: replace `<Link to="/contact" state={{ from: "podcast" }}>` "Got a topic suggestion?" with `<a href="mailto:ferry@brandhumanizing.com">` labelled `Pitch a guest →`. Everything else on this page stays.

### 12. `TheBook.tsx`

Already has the external `Get the Dutch edition` button to `brandhumanizingboek.nl`. No change needed.

### 13. Out of scope (unchanged)

- All visual styling, layout, components, fonts, colors, spacing, animations.
- Polaroid images and captions.
- AlsoByFerry, CommunitySection, Footer.
- /the-idea, /my-story, /writing pages (still placeholders/intentional).
- /book route (already redirects externally from previous pass).
- Header nav (already has /podcast).

### Files touched

`src/pages/Index.tsx`, `src/components/sections/Hero.tsx`, `src/components/sections/TrustLine.tsx`, `src/components/sections/BlogSection.tsx`, `src/components/sections/BookSection.tsx`, `src/components/sections/SpeakerSection.tsx`, `src/components/sections/PodcastSection.tsx`, `src/components/sections/BrandHumanizingSection.tsx`, `src/components/sections/AboutBlock.tsx`, `src/pages/Podcast.tsx`.

