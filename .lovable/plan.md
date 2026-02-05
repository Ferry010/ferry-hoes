
# Unified Section Styling

Apply the BookSection's background and color scheme to all sections (except Hero and Discord/Community) for a cohesive look.

---

## BookSection Reference Style

| Element | Style |
|---------|-------|
| Background | `bg-secondary/90 backdrop-blur-sm` |
| Main headings | `text-foreground` |
| Accent text | `text-primary` and `text-accent` |
| Body text | `text-muted-foreground` |
| Badges | `bg-accent/10 text-accent` |

---

## Files to Update

### 1. AboutBlock.tsx
- Remove the gradient background div
- Use `bg-secondary/90 backdrop-blur-sm`
- Change `text-primary-foreground` to `text-foreground`

### 2. BrandHumanizingSection.tsx
- Already uses `bg-secondary/90` - keep as is
- Text colors already use `text-foreground`, `text-primary`, `text-accent`, `text-muted-foreground`
- No changes needed

### 3. SpeakerSection.tsx
- Remove the gradient background
- Use `bg-secondary/90 backdrop-blur-sm`
- Change `text-primary-foreground` and `text-brand-gold` to match BookSection scheme

### 4. ContentGrid.tsx
- Change `bg-card` to `bg-secondary/90 backdrop-blur-sm`
- Text colors already compatible

### 5. PodcastSection.tsx
- Change `bg-card/95` to `bg-secondary/90 backdrop-blur-sm`
- Text colors already compatible

---

## Changes Summary

| File | Current Background | New Background |
|------|-------------------|----------------|
| AboutBlock.tsx | Gradient (white→teal→white) | `bg-secondary/90 backdrop-blur-sm` |
| BrandHumanizingSection.tsx | `bg-secondary/90` | No change |
| SpeakerSection.tsx | Gradient (white→teal→white) | `bg-secondary/90 backdrop-blur-sm` |
| ContentGrid.tsx | `bg-card` | `bg-secondary/90 backdrop-blur-sm` |
| PodcastSection.tsx | `bg-card/95` | `bg-secondary/90 backdrop-blur-sm` |

---

## Result

All sections will share the same warm secondary background with consistent text colors, creating a homogeneous "one-pager" feel where the Hero and Discord sections stand out as intentional contrast points.
