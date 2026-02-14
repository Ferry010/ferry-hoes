
# Replace "Ask Ferry" AI Chat with a Contact Form

## Overview
Remove the AI-powered chat and replace it with a simple "Shoot me a message" contact form where visitors enter their name, email, and a message. Messages are stored in a new database table so Ferry can read and reply to them later.

## What Gets Removed
- `src/components/AskFerryChat.tsx` -- the AI chat component
- `supabase/functions/ask-ferry/index.ts` -- the AI edge function
- The `react-markdown` dependency (only used by the chat)

## What Gets Built

### 1. Database: `contact_messages` table
A new table to store incoming messages:
- `id` (uuid, primary key)
- `name` (text, required)
- `email` (text, required)
- `message` (text, required)
- `created_at` (timestamp, default now())
- `read` (boolean, default false -- for future admin use)

RLS: public INSERT (anyone can submit), admin-only SELECT/UPDATE/DELETE.

### 2. Rewrite `AskFerryBubble.tsx`
Keep the same floating bubble position and open/close animation, but replace the chat panel content with a contact form:

- Header changes to "Shoot me a message" with a Mail icon
- Subline: "I'll get back to you"
- Form fields: Name, Email, Message (textarea)
- Submit button: "Send"
- Success state after submission: brief "Message sent!" confirmation, then auto-close after a couple seconds
- Basic client-side validation with zod (name, valid email, non-empty message)

### 3. Update references
- Footer "Message" button continues to trigger the bubble (no change needed, same aria-label pattern)
- All other `openMessagePanel` references stay the same, just the aria-label text updates from "Open Ask Ferry" to "Send a message"

### 4. Cleanup
- Delete `src/components/AskFerryChat.tsx`
- Delete `supabase/functions/ask-ferry/index.ts`
- Can keep `react-markdown` since it's lightweight and may be used elsewhere, or remove if not referenced

## Technical Details

### Database migration
```sql
CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Anyone can submit
CREATE POLICY "Anyone can submit a message"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

-- Only admins can read
CREATE POLICY "Admins can view messages"
  ON public.contact_messages FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

-- Only admins can update (mark as read)
CREATE POLICY "Admins can update messages"
  ON public.contact_messages FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));

-- Only admins can delete
CREATE POLICY "Admins can delete messages"
  ON public.contact_messages FOR DELETE
  USING (has_role(auth.uid(), 'admin'));
```

### Form validation (zod)
```typescript
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});
```

### Files changed
- **New migration**: Create `contact_messages` table with RLS
- **Rewrite**: `src/components/AskFerryBubble.tsx` -- contact form panel instead of chat
- **Delete**: `src/components/AskFerryChat.tsx`
- **Delete**: `supabase/functions/ask-ferry/index.ts`
- **Edit**: `src/components/sections/Footer.tsx` -- update aria-label selector string
- **Edit**: All components with `openMessagePanel` -- update aria-label from "Open Ask Ferry" to "Send a message"
