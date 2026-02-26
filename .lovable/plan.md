

## Fix: Blog post reordering not working

### Root cause
All existing posts have `sort_order = 0`. When swapping, the code sets post A to B's sort_order (0) and post B to A's sort_order (0) — no actual change.

### Solution

**1. Database migration — initialize sort_order values**

Run a migration to assign sequential sort_order values to existing posts based on their current `published_at` order:

```sql
WITH ordered AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY published_at DESC NULLS LAST) - 1 AS new_order
  FROM blog_posts
)
UPDATE blog_posts
SET sort_order = ordered.new_order
FROM ordered
WHERE blog_posts.id = ordered.id;
```

**2. Fix swap logic in `AdminDashboard.tsx`**

Change `handleMove` to use the array index as the sort_order value when posts have the same sort_order (fallback), and swap the index positions directly:

```ts
const handleMove = async (index: number, direction: "up" | "down") => {
  if (!posts) return;
  const targetIndex = direction === "up" ? index - 1 : index + 1;
  if (targetIndex < 0 || targetIndex >= posts.length) return;

  const a = posts[index];
  const b = posts[targetIndex];
  const aOrder = a.sort_order ?? index;
  const bOrder = b.sort_order ?? targetIndex;
  
  // If they have the same sort_order, use indices to differentiate
  await updateOrder.mutateAsync([
    { id: a.id, sort_order: aOrder === bOrder ? targetIndex : bOrder },
    { id: b.id, sort_order: aOrder === bOrder ? index : aOrder },
  ]);
};
```

**3. Remove `as any` cast in `useUpdatePostOrder`**

Since `sort_order` is now in the generated types, the cast is unnecessary:
```ts
.update({ sort_order: swap.sort_order })
```

