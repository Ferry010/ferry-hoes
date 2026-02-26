

## Fix Broken Spotify Episode Links

The individual episode links use fake Spotify episode URLs constructed from Anchor IDs (e.g., `e34fcs3`). These won't resolve on Spotify. The RSS feed provides the correct links via `podcasters.spotify.com`.

### Changes in `src/components/sections/PodcastSection.tsx`

Update the `spotifyUrl` values in the `featuredEpisodes` array to use the actual links from the RSS feed:

- Episode 1 (Simone Moissidis): `https://podcasters.spotify.com/pod/show/thehumanerapodcast/episodes/Not-a-Diversity-Checkbox-The-Real-Work-of-Inclusive-Leadership-with-Simone-Moissidis-e34fcs3`
- Episode 2 (Ruben Treurniet): `https://podcasters.spotify.com/pod/show/thehumanerapodcast/episodes/The-Power-of-Talking-to-People-You-Disagree-With-with-Ruben-Treurniet-e30mai6`
- Episode 3 (Marco Boomsma): `https://podcasters.spotify.com/pod/show/thehumanerapodcast/episodes/From-Local-to-Global-The-New-Era-of-Talent-Acquisition-with-Marco-Boomsma-from-Bullhorn-e2lthrj`

The main show URL (`https://open.spotify.com/show/6eGkXe767cYZ5Rw627Xpgu`) and Apple Podcasts URL appear correct and should work as-is.

