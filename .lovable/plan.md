

# Homepage Content Restructure

Redesigning the homepage to be authentically YOU - not a copy of GaryVee or Seth Godin. A clear, personal introduction that reflects where you are now.

---

## New Page Structure

```text
1. Hero (new format)
   - H1: "Public speaker, published author & entrepreneur"
   - H2: "Unleashing human potential with technology"
   - Micro-engagement: "Have a question? Just ask"

2. Three Pillars Section (NEW)
   - Ferry the Speaker → links to /speaking
   - Ferry the Entrepreneur → links to /entrepreneur  
   - Ferry the Human → links to /about

3. Podcast Section (keep, update copy)

4. Blog/Writing Section (keep, simplify)

5. Discord Community Section (change from Slack)

6. Footer with contact touchpoints
```

---

## Sections to Remove

| Section | Reason |
|---------|--------|
| IntroBlock | Replaced by cleaner three pillars section |
| BookSection | Fold into "Entrepreneur" page later |
| VideoSection | Content for Speaking/YouTube pages |
| SpeakingSection | Becomes a pillar card linking to full page |
| MiniAbout | Content moves to "Human" page |

---

## Hero Redesign

**Current**: Big statement headline ("Rebuilding the way the world works")  
**New**: Personal introduction that tells people who you are

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│          Public speaker, published author           │
│              & entrepreneur                         │
│                    (H1)                             │
│                                                     │
│   Unleashing human potential with technology        │
│                    (H2)                             │
│                                                     │
│     [ Explore my work ]   [ Get in touch ]          │
│                                                     │
│        Have a question? Just ask →                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Three Pillars Section (NEW)

A visual way to show the three dimensions of who you are, each linking to a dedicated page.

```text
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   🎤        │  │   🚀        │  │   🌱        │
│  SPEAKER    │  │ENTREPRENEUR │  │   HUMAN     │
│             │  │             │  │             │
│ Talks that  │  │ Building    │  │ Thoughts,   │
│ inspire     │  │ products &  │  │ passions &  │
│ action      │  │ brands      │  │ perspectives│
│             │  │             │  │             │
│  Learn more │  │  Learn more │  │  Learn more │
└─────────────┘  └─────────────┘  └─────────────┘
     ↓                 ↓                 ↓
  /speaking      /entrepreneur        /about
```

Each card:
- Icon or subtle visual
- Title: "Ferry the Speaker" etc.
- Short description (1-2 sentences)
- CTA linking to dedicated page

---

## Podcast Section Updates

Keep the existing design but add a micro-engagement:

- Add a small prompt: "Got a topic suggestion?" → opens chat
- Keep teal background with gold accents

---

## Blog Section Updates

- Simplify header: "What I'm thinking about"
- Keep grid of posts
- Keep inline chat prompt

---

## Discord Community Section

Change from Slack to Discord:
- Update icon (Discord logo)
- Update copy: "Discord community launching soon"
- Invite link will come later

---

## Chat Widget Enhancement

The chat currently can't receive replies (no email collection). Since you want it anonymous:

**Keep it as-is** for now - purely one-way thoughts. We could add context later:
- Show which page they were on
- Timestamp
- A unique session ID (not personal info)

Consider updating the copy to set expectations:
- "Drop a thought" → "Share a thought" 
- "I'll get back to you soon" → "I read everything" (more honest if you can't reply)

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/sections/ThreePillars.tsx` | New three-cards section |

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Remove 5 sections, add ThreePillars |
| `src/components/sections/Hero.tsx` | New H1/H2 structure |
| `src/components/sections/ContentGrid.tsx` | Simplified header |
| `src/components/sections/PodcastSection.tsx` | Add micro-engagement |
| `src/components/sections/CommunitySection.tsx` | Slack → Discord |
| `src/components/FloatingChatBubble.tsx` | Update copy for anonymous messages |

## Files to Keep (no changes)

| File | Reason |
|------|--------|
| `src/components/QuickMessage.tsx` | Works fine as-is |
| `src/components/sections/Footer.tsx` | Already has contact touchpoints |

---

## New Page Flow

```text
Homepage (Index.tsx)
├── Hero (who you are)
├── ThreePillars (what you do)
├── PodcastSection (listen)
├── ContentGrid (read)
├── CommunitySection (join Discord)
├── Footer
└── FloatingChatBubble
```

**5 sections removed**, **1 new section added** = cleaner, more focused.

---

## Technical Details

### Hero.tsx Changes
- H1: Use `text-4xl md:text-5xl lg:text-6xl` for readable subtitle sizing
- H2: Use `text-lg md:text-xl` for the tagline
- Keep the teal/coral background blurs
- Keep the floating chat trigger

### ThreePillars.tsx Structure
```typescript
const pillars = [
  {
    icon: Mic,
    title: "Ferry the Speaker",
    description: "Keynotes and talks that inspire action",
    link: "/speaking",
  },
  {
    icon: Rocket,
    title: "Ferry the Entrepreneur", 
    description: "Building products and humanizing brands",
    link: "/entrepreneur",
  },
  {
    icon: Heart,
    title: "Ferry the Human",
    description: "Thoughts, passions, and perspectives",
    link: "/about",
  },
];
```

### CommunitySection.tsx Changes
- Replace `Users` icon with custom Discord SVG or text
- Change "Slack community" → "Discord community"
- Keep the email waitlist (disabled for now)

### Index.tsx New Structure
```typescript
<main>
  <Hero />
  <ThreePillars />
  <PodcastSection />
  <ContentGrid />
  <CommunitySection />
  <Footer />
  <FloatingChatBubble />
</main>
```

---

## Micro-Engagement Points

The homepage will have these touchpoints for interaction:

1. **Hero**: "Have a question? Just ask" link
2. **Podcast**: "Got a topic suggestion?" (new)
3. **Blog Grid**: "Something on your mind?" (existing)
4. **Footer**: Message link (existing)
5. **Floating Bubble**: Always visible (existing)

---

## Expected Result

A focused homepage that:
- Immediately tells visitors who you are (speaker, author, entrepreneur)
- Shows your mission (unleashing human potential with technology)
- Provides clear paths to explore your different facets
- Maintains multiple low-friction ways to start a conversation
- Changes community from Slack to Discord
- Removes clutter from sections that belong on sub-pages

