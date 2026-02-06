
# Fix Title Color Combinations

Update sections that violate the design constraint: **never combine teal with orange in titles**. Permitted combinations are teal + black or black + orange.

---

## Sections Requiring Changes

| Section | Current | Fix To |
|---------|---------|--------|
| `BrandHumanizingSection` | "Brand" (teal) + "Humanizing" (orange) | "Brand" (black) + "Humanizing" (orange) |
| `BookSection` | "Brand" (teal) + "Humanizing" (orange) | "Brand" (black) + "Humanizing" (orange) |

---

## Implementation Details

### BrandHumanizingSection.tsx (Line 22-24)

Change from:
```tsx
<span className="text-primary">Brand</span>{" "}
<span className="text-accent">Humanizing</span>
```

To:
```tsx
<span className="text-foreground">Brand</span>{" "}
<span className="text-accent">Humanizing</span>
```

### BookSection.tsx (Line 38-40)

Change from:
```tsx
<span className="text-primary">Brand</span><br />
<span className="text-accent">Humanizing</span>
```

To:
```tsx
<span className="text-foreground">Brand</span><br />
<span className="text-accent">Humanizing</span>
```

---

## Sections Already Compliant

These sections already follow the black + orange pattern:
- IntroBlock: "This is my home base." (black + orange)
- SpeakerSection: "Keynotes that inspire action" (black + orange)
- PodcastSection: "Conversations that matter" (black + orange)
- BlogSection: "Ideas worth sharing" (black + orange)
- CommunitySection: "Don't follow. Build with me." (white + gold)
- AboutBlock: "Ferry Hoes" (teal) + mission statement (black)
- ThreePillars: Black titles with teal icons

---

## Summary

Only 2 files need modification. Both use the same pattern change: replacing `text-primary` (teal) with `text-foreground` (black) for the word "Brand" while keeping "Humanizing" in `text-accent` (orange).
