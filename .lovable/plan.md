

## Redesign Podcast Section to Match Brand

The current podcast section has hardcoded fake episodes and a generic carousel layout. Here's the plan to make it on-brand and functional.

### 1. Fetch real episodes from RSS feed
- Parse the existing RSS feed (`https://anchor.fm/s/757f60b4/podcast/rss`) via a `useEffect` + fetch to get real episode titles, guests, durations, descriptions, and Spotify links
- Show a loading skeleton while fetching
- Fall back to a static message if the feed fails

### 2. Redesign layout to match brand pattern
- Switch from the current centered carousel to a **two-column layout** like the Speaker and Book sections:
  - **Left column**: Large podcast cover art or a branded visual with the show name "The Human Era Podcast" and platform buttons (Spotify, Apple)
  - **Right column**: Scrollable list of latest episodes (3-5), each as a compact card with title, guest, duration, and a "Listen" link
- Use the same visual language: badge pill at top ("The Podcast" with Headphones icon), large display heading, muted description, soft shadows, backdrop blur

### 3. Episode card styling
- Clean, minimal cards with left border accent in Spotify green
- Title + guest name + duration
- Hover state with subtle lift
- Direct Spotify link per episode

### 4. Keep existing CTAs
- Spotify and Apple Podcasts buttons stay
- "Got a topic suggestion?" micro-engagement link stays

### Files changed
- `src/components/sections/PodcastSection.tsx` — full redesign with RSS fetch + two-column layout

