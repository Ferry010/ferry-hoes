

# Update Career Timeline

Replace the placeholder timeline in the About page with Ferry's real career milestones.

## Changes

**File: `src/pages/About.tsx`** (lines ~36-43)

Replace the current `timeline` array with:

```typescript
const timeline = [
  { year: "2016", title: "Went all in", description: "Quit my corporate job to start as freelance Growth Hacker with zero backup plan." },
  { year: "2018", title: "Brand Humanizing was born", description: "Published the first \"Brand Humanizing\" article with Jonathan Flores." },
  { year: "2019", title: "From article to institute", description: "Co-founded the Brand Humanizing Institute after a year of research." },
  { year: "2020", title: "AI Hackathon win", description: "Won a prestigious Government-hosted AI Hackathon based on Brand Humanizing principles." },
  { year: "2020", title: "First professional keynote", description: "Got contracted by Speakers Academy and delivered my first professional keynote." },
  { year: "2025", title: "The book drops", description: "Published our first book: \"Brand Humanizing\" — now available at all major retailers." },
];
```

This is a single-line change in one file. No other modifications needed.

