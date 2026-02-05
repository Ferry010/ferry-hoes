

# Update Podcast Section with Real Data

Remove vanity stats and integrate real episode data from your RSS feed, with cards linking directly to Spotify.

---

## Changes Overview

| Change | Details |
|--------|---------|
| Remove vanity stats | Delete the "127 Episodes / 50K+ Downloads / 4.9 Rating" section |
| Real episode data | Use actual titles, guests, and durations from your RSS feed |
| Card behavior | Each card links to Spotify episode (no embed player) |
| Platform URLs | Update main buttons with your real Spotify and Apple Podcasts links |

---

## New Episode Cards Design

Each card will be clickable and link to Spotify:

```text
┌────────────────────────────────────────┐
│  Episode                    ~65 min    │
│                                        │
│  Not a Diversity Checkbox:             │
│  The Real Work of Inclusive Leadership │
│                                        │
│  with Simone Moissidis                 │
│                                        │
│  [Spotify icon]  Listen on Spotify  →  │
└────────────────────────────────────────┘
```

---

## Real Episode Data (from RSS)

| Episode | Title | Guest | Duration | Spotify Episode ID |
|---------|-------|-------|----------|-------------------|
| Latest | Not a Diversity Checkbox: The Real Work of Inclusive Leadership | Simone Moissidis | 65 min | e34fcs3 |
| 2nd | The Power of Talking to People You Disagree With | Ruben Treurniet | 73 min | e30mai6 |
| 3rd | From Local to Global: The New Era of Talent Acquisition | Marco Boomsma | 71 min | e2lthrj |

---

## File Changes

**`src/components/sections/PodcastSection.tsx`**

1. **Update `featuredEpisodes` array** (lines 26-48):
   - Replace placeholder titles with real episode names
   - Add real guest names
   - Use actual durations from RSS
   - Add Spotify episode URLs for linking

2. **Update platform URLs** (lines 51-52):
   - Spotify: `https://open.spotify.com/show/6eGkXe767cYZ5Rw627Xpgu`
   - Apple: `https://podcasts.apple.com/nl/podcast/the-human-era-podcast/id1598552331`

3. **Remove stats section** (lines 135-149):
   - Delete the entire vanity metrics block

4. **Replace iframe embed with link button** (lines 115-126):
   - Remove the Spotify iframe player
   - Add a "Listen on Spotify" button that links to the episode

---

## Technical Implementation

### Updated Episode Data Structure

```typescript
const featuredEpisodes = [
  {
    title: "Not a Diversity Checkbox: The Real Work of Inclusive Leadership",
    guest: "Simone Moissidis",
    duration: "65 min",
    spotifyUrl: "https://open.spotify.com/episode/...",
  },
  {
    title: "The Power of Talking to People You Disagree With",
    guest: "Ruben Treurniet",
    duration: "73 min",
    spotifyUrl: "https://open.spotify.com/episode/...",
  },
  {
    title: "From Local to Global: The New Era of Talent Acquisition",
    guest: "Marco Boomsma",
    duration: "71 min",
    spotifyUrl: "https://open.spotify.com/episode/...",
  },
];
```

### Card with Link Button

```typescript
<article className="group bg-background rounded-2xl p-8 ...">
  <div className="flex items-start justify-between mb-6">
    <span className="text-sm font-medium text-primary">Episode</span>
    <span className="text-sm text-muted-foreground">{episode.duration}</span>
  </div>
  
  <h3 className="font-display text-2xl font-semibold mb-3">
    {episode.title}
  </h3>
  
  <p className="text-base text-muted-foreground mb-6">
    with {episode.guest}
  </p>
  
  <a 
    href={episode.spotifyUrl}
    target="_blank"
    className="inline-flex items-center gap-2 text-[#1DB954] font-medium group-hover:underline"
  >
    <SpotifyIcon className="h-5 w-5" />
    Listen on Spotify
    <ArrowRight className="h-4 w-4" />
  </a>
</article>
```

---

## Result

- Cards display real episode titles, guests, and durations
- Clicking a card opens the episode on Spotify
- No embedded players (cleaner, faster loading)
- Vanity stats removed for a cleaner look
- Main platform buttons link to your actual show pages

