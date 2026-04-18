

## Copy tweak: "essay" → "thoughts" + remove all en/em dashes

Two small global copy passes. No design changes.

### 1. Replace "essay/essays" with "thought/thoughts"

Affected files (case-preserving):
- `Hero.tsx`: "Read the latest essay" → "Read the latest thought"
- `BlogSection.tsx`: 
  - Eyebrow stays "Writing"
  - "• Essay" pill → "• Thought"
  - "Read essay" → "Read thought"
  - "Short essays on humans..." → "Short thoughts on humans..."
  - Empty state "The first essays are being written." → "The first thoughts are being written."

I'll also scan the rest of the codebase for any other "essay" copy strings I missed and update them in the same pass.

### 2. Remove em/en dashes from copy

Replace `—` (em dash) and `–` (en dash) with either a comma, period, or colon depending on flow. Targeted strings I already know need fixing:

- `Hero.tsx` sub: "...one idea ten years in the making: technology that amplifies what's human instead of replacing it." (already a colon, fine)
- `BookSection.tsx`: "Brand Humanizing — co-written with my best friend Jonathan Flores. Ten years of thinking, a framework, and case studies..." → "Brand Humanizing, co-written with my best friend Jonathan Flores. Ten years of thinking..."
- `BookSection.tsx` case studies row: "Featuring case studies from a.s.r., Ben & Jerry's, Dove, Octopus Energy, Patagonia and more." (no dash, fine)
- `BrandHumanizingSection.tsx`: "Most organisations are still racing in the wrong direction — using tech to do more of the same, faster." → "Most organisations are still racing in the wrong direction, using tech to do more of the same, faster."
- `Speaking.tsx` (talk 02 body): "The AI hype has settled. The real question now is how to lead organisations where humans and machines work side by side without losing what makes work meaningful."  (no dash currently, fine)
- Any other section bodies (`AboutBlock`, `SpeakerSection`, `PodcastSection`, `TrustLine`, `Speaking.tsx`, `Podcast.tsx`, `TheBook.tsx`) — full grep, replace each `—`/`–` with a contextual comma or period.

I'll do a project-wide search for `—` and `–` in `src/**/*.{tsx,ts}` and fix every user-facing string. Code/comments untouched.

### Files likely touched

`src/components/sections/Hero.tsx`, `src/components/sections/BlogSection.tsx`, `src/components/sections/BookSection.tsx`, `src/components/sections/BrandHumanizingSection.tsx`, `src/components/sections/AboutBlock.tsx`, `src/components/sections/SpeakerSection.tsx`, `src/components/sections/PodcastSection.tsx`, `src/components/sections/TrustLine.tsx`, `src/pages/Speaking.tsx`, `src/pages/Podcast.tsx`, `src/pages/TheBook.tsx`, `src/pages/Index.tsx` (SEO meta).

### Out of scope

- No design, layout, or component changes.
- Blog post content stored in Supabase (DB) is not touched — only static UI copy in the codebase.

