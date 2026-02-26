

## Create Podcast Page

A dedicated `/podcast` page following the same structure and design patterns as the Speaking page.

### 1. Create `src/pages/Podcast.tsx`

- **Hero section**: Full-width header with video background (reuse the same hero video pattern from Speaking), podcast badge, title "The Human Era Podcast", subtitle about the show's mission, and CTA buttons for Spotify + Apple Podcasts.
- **Episodes section**: Full list of all episodes (reuse the `featuredEpisodes` data from PodcastSection, expanded with more episodes fetched from the RSS feed or hardcoded). Display as a grid or list of episode cards with title, guest, duration, and Spotify link — same card design as PodcastSection but laid out in a responsive grid rather than carousel.
- **About the podcast section**: Short description of what the show is about, who it's for, and what listeners can expect.
- **Platform CTAs**: Spotify and Apple Podcasts buttons (reuse from PodcastSection).
- **Footer + AskFerryBubble**: Same as other pages.

Extract shared components (SpotifyIcon, ApplePodcastsIcon, episode data, platform URLs) from `PodcastSection.tsx` into a shared location or import directly.

### 2. Add route in `src/App.tsx`

- Import `Podcast` page component
- Add `<Route path="/podcast" element={<Podcast />} />` before the catch-all

### 3. Update Footer link in `src/components/sections/Footer.tsx`

- Change the placeholder `<a href="#">Podcast</a>` to `<Link to="/podcast">Podcast</Link>`

