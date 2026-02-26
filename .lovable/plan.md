

## Changes

### 1. Copy logo assets to project
- Copy `user-uploads://Ferry_Hoes_logo_2026_black.png` → `src/assets/ferry-hoes-logo-black.png` (for header)
- Copy `user-uploads://Ferry_Hoes_logo_2026.png` → `src/assets/ferry-hoes-logo-white.png` (for footer)

### 2. `src/components/SiteHeader.tsx`
- Rename "Ideas" to "Podcast" in `NAV_ITEMS` (line 10)
- Replace text logo "Ferry Hoes" (lines 76-81) with `<img>` using the black logo, sized appropriately (~h-6 md:h-7)

### 3. `src/components/sections/Footer.tsx`
- Replace text "Ferry Hoes" (line 18) with `<img>` using the white logo, sized appropriately (~h-8 md:h-10)
- Add import for the white logo asset

