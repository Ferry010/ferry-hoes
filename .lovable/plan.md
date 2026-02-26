

## Podcast Page Layout & Copy Updates

### 1. Shorten "No scripts" copy (lines 157-171)
Replace the three paragraphs with one snappy paragraph:

```
Honest, unscripted conversations with fascinating people about technology, leadership, and what it means to be human. No pre-written questions. Just thinking out loud about the things that matter.
```

### 2. Reduce spacing between "No scripts" section and "Recent conversations" (lines 150, 178)
- Change "About" section padding from `py-24 md:py-32` to `py-16 md:py-20`
- Change "Episodes" section padding from `py-24 md:py-32` to `pt-12 md:pt-16 pb-24 md:pb-32`
- Reduce `mb-16` on the episodes header to `mb-10`

### 3. Add a 5th episode to `allEpisodes` (after line 49)
Need 5 total (1 featured + 4 smaller). Add one more episode entry with a generic Spotify URL.

### 4. Redesign episodes layout to side-by-side (lines 191-281)
Replace the vertical `space-y-8` layout with a 2-column grid:
- **Left**: Featured card (`allEpisodes[0]`) spanning full height, keep existing card content unchanged
- **Right**: 2x2 grid of 4 smaller cards (`allEpisodes[1-4]`), keep existing card content unchanged
- Use `grid md:grid-cols-2 gap-6` for outer, `grid grid-cols-2 gap-4` for the right side
- On mobile: stack vertically

