

# English book waitlist — proper end-to-end flow

The waitlist form **already exists** (on the homepage `BookSection` and on `/the-book`) and writes to `email_subscribers` with `source: "english_waitlist"`. But it's incomplete: the "English waitlist" buttons open the contact panel instead of jumping to the form, there's no Slack notification, and there's no admin view to actually see who signed up. This makes it a real waitlist.

## What changes

### 1. Fix the "English waitlist" buttons
In `BookSection.tsx` and `TheBook.tsx`, the ghost button currently dispatches `open-contact` (opens the message panel — wrong). Change both to scroll to `#waitlist` (the email form already on the page). Same intent both for Dutch and English UI.

### 2. Slack notification on signup
New edge function `notify-waitlist` (mirrors `notify-contact` but simpler — just email + source). Posts to the same `#ferryhoes` Slack channel:

> 📚 *New English book waitlist signup* — `someone@example.com`  · Total: 42

Called from the form `onSubmit` in both `BookSection.tsx` and `TheBook.tsx` after the DB insert succeeds. Failure to notify never blocks the success state.

### 3. Admin view at `/admin/waitlist`
New page `src/pages/AdminWaitlist.tsx` listed in the admin sidebar (`AdminLayout.tsx`):
- Table: email, signed-up date, source
- Total count at top
- "Export CSV" button (client-side download — no backend needed)
- Sortable by date (newest first by default)

Requires the existing admin auth (same pattern as `AdminMessages.tsx`).

### 4. RLS policy for admin SELECT
The `email_subscribers` table currently has **no SELECT policy**, so even admins can't read it. Add:
```sql
CREATE POLICY "Admins can view subscribers"
  ON email_subscribers FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'));
```

### 5. Small polish on the form itself
- Trim + lowercase the email before insert (prevents duplicate-with-different-case rows).
- On duplicate, still show the success state (don't surprise returning users).
- Honeypot field (`website` input, hidden, must stay empty) to block bots — same trick used elsewhere in the project.

## Out of scope
- No double opt-in / confirmation email (can add later if deliverability becomes an issue).
- No separate `waitlists` table — `email_subscribers` with `source` filter is already the right shape.
- No changes to the Dutch book purchase flow.
- No public count / "join 200 others" social proof on the form.

## Files touched
- **New**: `supabase/functions/notify-waitlist/index.ts`, `src/pages/AdminWaitlist.tsx`
- **Edited**: `src/components/sections/BookSection.tsx`, `src/pages/TheBook.tsx`, `src/components/admin/AdminLayout.tsx`, `src/App.tsx` (route)
- **Migration**: SELECT policy on `email_subscribers`

