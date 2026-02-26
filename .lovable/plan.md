

## Add Blog to Navigation

### Change in `src/components/SiteHeader.tsx`

Update the `NAV_ITEMS` array (line 6-12) to rename "Ideas" to "Ideas" and split it, or simply add a "Blog" entry. Based on the current structure, the cleanest approach is to add a "Blog" item after "Ideas":

**Updated `NAV_ITEMS`:**
```
{ label: "On Stage", route: "/speaking" },
{ label: "The Idea", route: "/#brand-humanizing" },
{ label: "The Book", route: "/#book" },
{ label: "Ideas", route: "/podcast" },
{ label: "Blog", route: "/blog" },
{ label: "The Story", route: "/about" },
```

Single file change, one line addition.

