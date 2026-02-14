
# Redesign Community Section to Match Site Style

## Problem
The Community section uses a solid `bg-primary` (teal) background with white text, creating a heavy, corporate block that clashes with the rest of the site's light, editorial, semi-transparent aesthetic.

## Design Approach
Align with the patterns used across other sections: light backgrounds with `backdrop-blur`, soft shadows, brand accent badges, and the same typographic hierarchy.

## Changes

**File: `src/components/sections/CommunitySection.tsx`**

1. **Background**: Replace `bg-primary text-primary-foreground` with `bg-secondary/90 backdrop-blur-sm` to match sections like BookSection and the overall light, open feel.

2. **Remove dot-grid pattern**: Drop the radial-gradient dot background -- no other section uses this pattern.

3. **Badge**: Add a pill badge at the top (like other sections) with a Users/Sparkles icon and "Community" label, using `bg-primary/10 text-primary` styling.

4. **Headline**: Change from white-on-teal to the standard section heading style:
   - "Don't follow." in `text-foreground` (dark)
   - "Build with me." in `text-primary` (teal) instead of `text-brand-gold`
   - Scale down slightly from `text-8xl` to match other sections (`text-5xl md:text-6xl lg:text-7xl`)

5. **Body text**: Switch from `text-white/70` to `text-muted-foreground` for consistency.

6. **Discord badge**: Restyle from `bg-brand-gold/20` with gold icon to a softer `bg-primary/10` pill with the Discord icon in `text-primary`, matching the editorial tone.

7. **Email input + button**: 
   - Input: Switch from dark glass (`bg-white/10 border-white/20`) to light style (`bg-background border-border`) with standard focus states
   - Button: Change from `bg-brand-gold` to `bg-primary text-primary-foreground hover:bg-primary/90` to match the site's CTA pattern
   - Keep both disabled with the "Coming soon" note

8. **"Coming soon" text**: Change from `text-white/40` to `text-muted-foreground` with slightly smaller sizing.

This brings the section fully in line with the rest of the page while keeping the emotional headline and community message intact.
