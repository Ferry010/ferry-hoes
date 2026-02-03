

# Fresh Typography & Color Overhaul

Converting all headlines to sentence case and replacing the warm golden book-inspired design with a cool, modern color palette featuring Archivo headlines.

---

## Typography Changes

### Font Swap
Replace **Bebas Neue** (all-caps only) with **Archivo** (supports lowercase, clean and modern).

### Headlines to Update

| Section | Current (ALL CAPS) | New (Sentence case) |
|---------|-------------------|---------------------|
| Hero | REBUILDING THE WAY<br/>THE WORLD WORKS | Rebuilding the way<br/>the world works |
| Intro | THIS IS MY HOME BASE. | This is my home base. |
| Book | BRAND<br/>HUMANIZING | Brand<br/>Humanizing |
| Content Grid | FRESH THOUGHTS | Fresh thoughts |
| Podcast | CONVERSATIONS<br/>THAT MATTER | Conversations<br/>that matter |
| Video | WATCH & LEARN | Watch & learn |
| Speaking | LET'S INSPIRE<br/>YOUR AUDIENCE | Let's inspire<br/>your audience |
| Community | DON'T FOLLOW.<br/>BUILD WITH ME. | Don't follow.<br/>Build with me. |
| Mini About | HI, I'M FERRY. | Hi, I'm Ferry. |
| Footer | FERRY HOES | Ferry Hoes |

### Section Labels
Remove `uppercase tracking-wider` from section labels (e.g., "Latest Writing", "Video Content", "Speaking").

---

## Color Palette: Cool Modern

Moving away from the warm golden/red/blue book aesthetic to a fresh, crisp design.

### New Colors

| Token | Value | Description |
|-------|-------|-------------|
| `--background` | `210 20% 98%` | Cool off-white |
| `--foreground` | `220 25% 12%` | Deep charcoal |
| `--primary` | `200 100% 45%` | Electric cyan (#00A3CC) |
| `--accent` | `280 70% 55%` | Vibrant violet (#9945FF) |
| `--muted` | `210 15% 94%` | Subtle cool grey |
| `--muted-foreground` | `220 15% 50%` | Medium grey |
| `--secondary` | `210 20% 96%` | Light cool grey |

### Hero Background
Replace warm golden with subtle cool gradient (light blues/purples).

### Section Backgrounds
Alternate between off-white, white, and subtle cool grey tones.

---

## Visual Simplifications

### Remove Book-Inspired Elements
- Remove `PixelHeart` component from Hero
- Remove floating pixel decorations from various sections
- Remove red/gold color references
- Remove `gradient-human-tech` utility

### New Background Elements
- Replace organic colored blobs with subtle geometric shapes or simple gradients
- Keep soft blur effects but in cool tones (cyan/violet)
- Maintain rounded shapes and soft shadows

### Keep the Book Section
The book cover itself stays (it's content), but update surrounding colors to work with new palette.

---

## Files to Modify

### CSS/Config
1. **src/index.css** - New color variables, remove brand-red/gold, change comment
2. **tailwind.config.ts** - Update brand colors, remove warm-grey

### Components (10 files)
1. **Hero.tsx** - Sentence case, remove PixelHeart, new bg colors
2. **IntroBlock.tsx** - Sentence case, remove pixel decorations
3. **BookSection.tsx** - Sentence case, update accent colors
4. **ContentGrid.tsx** - Sentence case, remove uppercase label
5. **PodcastSection.tsx** - Sentence case, new section colors
6. **VideoSection.tsx** - Sentence case, update bg color
7. **SpeakingSection.tsx** - Sentence case, remove uppercase label
8. **CommunitySection.tsx** - Sentence case, new accent colors
9. **MiniAbout.tsx** - Sentence case, remove pixel decorations
10. **Footer.tsx** - Sentence case for name

---

## Technical Details

### Google Fonts Update
```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
```

### CSS Variable Changes (Light Mode)
```css
:root {
  --background: 210 20% 98%;
  --foreground: 220 25% 12%;
  --primary: 200 100% 45%;
  --primary-foreground: 0 0% 100%;
  --accent: 280 70% 55%;
  --accent-foreground: 0 0% 100%;
  --muted: 210 15% 94%;
  --muted-foreground: 220 15% 50%;
  --secondary: 210 20% 96%;
  --secondary-foreground: 220 25% 20%;
  --border: 210 15% 90%;
  --soft-shadow: 220 30% 50%;
}
```

### Tailwind Font Config
```ts
fontFamily: {
  sans: ["Inter", "system-ui", "sans-serif"],
  display: ["Archivo", "system-ui", "sans-serif"],
}
```

---

## Expected Result

A crisp, modern, editorial website with:
- Clean sentence-case headlines in Archivo font
- Cool off-white background with electric cyan primary color
- Vibrant violet accent for pops of energy
- Simple, uncluttered design without book-cover mimicry
- The book section remains but fits naturally in the new palette

