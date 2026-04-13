

# Hero redesign + build error fixes

## Summary

Redesign the hero to match the Brand Humanizing Institute layout (two-column: chat bubbles left, polaroid with video right), add a client logos section below the hero, and wrap the SpeakerSection photo in a polaroid treatment. Also fix two build errors (Press.tsx broken img tag, StructuredData.tsx if still broken).

---

## Build error fixes (first priority)

**`src/pages/Press.tsx` line 163**: A corrupted `<img>` tag has a nested JSX element inside its `alt` attribute. Replace with a clean single `<img>` tag:
```tsx
<img src={img.src} alt={`Ferry Hoes, ${img.label}`} loading="lazy" width={400} height={533} className="w-full h-full object-cover" />
```

**`src/components/StructuredData.tsx`**: Verify line 117 renders correctly. The file content looks valid on inspection, so the error may be stale. Will re-check and fix if needed.

---

## Hero redesign

**File: `src/components/sections/HeroVideo.tsx`**

Replace the current full-screen video background + bottom-aligned chat with a two-column layout on a warm cream (`bg-background`) background, inspired by brandhumanizing.com:

- **Left column**: The existing chat bubbles (visitor question + Ferry's replies + CTA button), vertically centered. Keep the same animation delays and the "Continue the conversation" CTA. Add the H1 above the bubbles as a large headline.
- **Right column**: A polaroid-style card (white border, slight rotation, Caveat caption) containing the video playing inline (muted, looping, no controls). Caption text: "FERRY HOES" in bold, then "International keynote speaker. Author. Entrepreneur." and "Helping organizations stay powerfully human in a world full of AI." in Caveat font.
- No dark overlay, no full-bleed video background. Clean, editorial, warm.
- Mobile: stack vertically (polaroid on top, chat below).

## Client logos placement

**File: `src/pages/Index.tsx`**

Import `ClientLogos` and place it between the hero and the AboutBlock section. Change the intro text from "Trusted by organizations like" to "I've had the pleasure to work with great brands like:" to match the requested copy.

**File: `src/components/sections/ClientLogos.tsx`**

Update the intro text accordingly.

## Speaker section polaroid

**File: `src/components/sections/SpeakerSection.tsx`**

Wrap the left-column stage photo in the same polaroid treatment used in AboutBlock (white card, slight rotation, shadow, Caveat caption). Caption: "Ferry during his Woningbouwers 2025 keynote".

---

## Files changed

| File | Change |
|------|--------|
| `src/pages/Press.tsx` | Fix broken nested img tag on line 163 |
| `src/components/sections/HeroVideo.tsx` | Complete redesign: two-column layout with chat left, polaroid video right |
| `src/pages/Index.tsx` | Add ClientLogos import between hero and AboutBlock |
| `src/components/sections/ClientLogos.tsx` | Update intro copy |
| `src/components/sections/SpeakerSection.tsx` | Wrap photo in polaroid with caption |

