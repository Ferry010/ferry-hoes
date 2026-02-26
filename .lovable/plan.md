

## Podcast Page: Show Notes Snippet + Brand Color Update

### 1. Add `description` field to episode data (lines 25-48)

Add a `description` string to the first episode in `allEpisodes`:

```
{
  title: "Not a Diversity Checkbox...",
  guest: "Simone Moissidis",
  duration: "65 min",
  description: "Simone Moissidis shares what inclusive leadership really looks like beyond checkboxes and quotas. We explore how organizations can move from performative diversity to genuine belonging, and why the hardest conversations are often the most important ones.",
  spotifyUrl: "...",
}
```

### 2. Change "Latest Episode" badge to brand Coral/orange (line 213)

Replace the green Spotify color on the badge:
- From: `text-[#1DB954] bg-[#1DB954]/10`
- To: `text-accent bg-accent/10`

This uses the brand Coral (`#E86A4A`) defined in the theme.

### 3. Add show notes snippet below guest name in featured card (after line 228)

Insert a `<p>` with the description text, styled as a readable snippet with muted color and smaller text:

```tsx
<p className="text-base text-muted-foreground/80 leading-relaxed">
  {allEpisodes[0].description}
</p>
```

