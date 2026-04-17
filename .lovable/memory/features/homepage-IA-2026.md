---
name: Homepage IA 2026
description: New section order and routing for the 2026 editorial redesign
type: feature
---
**Homepage section order (`src/pages/Index.tsx`):**

1. `<SiteHeader />` (sticky, cream, hairline border on scroll)
2. `<Hero />` — polaroid + editorial H1, no video, no chat
3. `<TrustLine />` — plain text "Trusted by..." sentence (replaces ClientLogos)
4. `<BrandHumanizingSection />` — The Idea (hook), CTA → /the-idea
5. `<AboutBlock />` — My Story (short)
6. `<SpeakerSection />` — On Stage + 3 talk-topic cards
7. `<BookSection />` — The Book + English waitlist
8. `<PodcastSection />` — Conversations carousel
9. `<BlogSection />` — Writing (editorial cards)
10. `<AlsoByFerry />` — BHI navy card + AIGA purple card (outbound)
11. `<CommunitySection />` — The Letter (newsletter only, no Discord)
12. `<Footer />`

**Removed from homepage:** `HeroVideo`, `QuickFacts`, `ClientLogos`, `AboutFerryLLM`, `AskFerryBubble`, `CookieConsent` mount.

**Routes (`src/App.tsx`):**
- New IA: `/the-idea`, `/my-story`, `/on-stage`, `/writing`, `/the-book`, `/book` (placeholder pages via `PlaceholderPage.tsx`)
- Legacy redirects: `/about` → `/my-story`, `/speaking` → `/on-stage`, `/contact` → `/book`
- Kept: `/blog`, `/blog/:slug`, `/podcast`, `/now`, `/press`, `/conversation` (easter egg)
- Old pages reachable at `/about-legacy`, `/speaking-legacy`, `/contact-legacy`
