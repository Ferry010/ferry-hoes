

## Remove "Now" from Header Navigation

**File: `src/components/SiteHeader.tsx`**

Remove the `{ label: "Now", route: "/now" }` entry from the `NAV_ITEMS` array (line 14). The "Now" link already exists in the Footer, so no other changes needed.

Single line deletion — keeps the header at 6 items + CTA.

