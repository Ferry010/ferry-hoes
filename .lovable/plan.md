

## Plan: Create Premium Contact Page

### 1. Database migration — add columns to `contact_messages`

Add nullable columns to the existing table so the new form fields are stored without breaking the existing AskFerryBubble or AdminMessages functionality:

```sql
ALTER TABLE public.contact_messages
  ADD COLUMN IF NOT EXISTS organization text,
  ADD COLUMN IF NOT EXISTS inquiry_type text,
  ADD COLUMN IF NOT EXISTS inquiry_other text,
  ADD COLUMN IF NOT EXISTS timeline text,
  ADD COLUMN IF NOT EXISTS privacy_accepted boolean NOT NULL DEFAULT false;
```

No new RLS policies needed — existing anon-insert + admin-read policies cover this.

### 2. Create `src/pages/Contact.tsx`

New page with the full structure:

- **Header**: "Start a conversation." headline + calm subtext. Clean white space, no graphics.
- **Form** (single-column, Zod-validated):
  - Full Name (required)
  - Email Address (required, placeholder: `name@company.com`)
  - Organization / Company (optional)
  - "How can I help?" dropdown (required) with 6 options. Conditional "Tell me more" field when "Other" selected.
  - "Tell me about your request" textarea (required)
  - "Preferred timeline" dropdown (optional, 4 options)
  - Privacy checkbox (required) with subtext
  - "Send message" submit button with brand color, hover brightness, 120ms active press
- **Smart pre-selection**: Read `location.state?.from` to pre-select inquiry type if navigated from `/speaking` or `/podcast`
- **Submit behavior**: Insert into `contact_messages` via Supabase. On success, fade form out (200ms opacity transition), show calm confirmation: "Message received." + "Thank you for reaching out..."
- Includes `SEOHead`, `Footer`, `AskFerryBubble`

### 3. Add route in `src/App.tsx`

Add `/contact` route pointing to the new Contact page.

### 4. Update navigation

- **`src/components/SiteHeader.tsx`**: Update the CTA button from linking to `/conversation` to `/contact`
- **`src/components/sections/Footer.tsx`**: Add "Contact" to footer nav links

### 5. Update `src/pages/AdminMessages.tsx`

Display the new fields (organization, inquiry type, timeline) in the expanded message view so admins can see the richer context.

### 6. Update links from Speaking/Podcast pages

Where those pages have CTA buttons or links that could route to contact, pass `state: { from: "speaking" }` or `state: { from: "podcast" }` via React Router so the contact form can pre-select the inquiry type.

