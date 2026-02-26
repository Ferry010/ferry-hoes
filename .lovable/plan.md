

## Plan: Add manual blog post ordering

### 1. Database migration — add `sort_order` column

Add an integer column `sort_order` to `blog_posts` with a default of `0`. Lower values appear first.

```sql
ALTER TABLE public.blog_posts ADD COLUMN sort_order integer NOT NULL DEFAULT 0;
```

### 2. Update public queries to sort by `sort_order`

**`src/hooks/useBlogPosts.ts`**: Change `.order("published_at", { ascending: false })` to `.order("sort_order", { ascending: true }).order("published_at", { ascending: false })` so posts sort by manual order first, then by date as a tiebreaker.

**`src/components/sections/BlogSection.tsx`**: Uses the same hook — no changes needed.

### 3. Update admin queries

**`src/hooks/useAdminPosts.ts`**: Change `.order("updated_at", { ascending: false })` to `.order("sort_order", { ascending: true }).order("updated_at", { ascending: false })`.

### 4. Add up/down reorder buttons in admin dashboard

**`src/pages/AdminDashboard.tsx`**:
- Import `ChevronUp` and `ChevronDown` icons from lucide-react.
- Add a new mutation hook `useUpdatePostOrder` (in `useAdminPosts.ts`) that updates the `sort_order` of two posts (swap values) in a single call.
- Add up/down arrow buttons next to each post row. Clicking swaps the `sort_order` value with the adjacent post. First post hides "up", last post hides "down".

### 5. New hook: `useUpdatePostOrder` in `src/hooks/useAdminPosts.ts`

A mutation that takes two post IDs and their new `sort_order` values and performs two updates, then invalidates the admin-posts and blog-posts query keys.

