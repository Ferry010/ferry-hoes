

## Transform /now into a Conversation Page

This replaces the static /now page with an interactive chat-bubble experience (same mechanic as /conversation), where Ferry's answers are pulled dynamically from the `now_page` database table.

### 1. Database Migration

Add new columns to `now_page` for the new content fields. Keep existing columns for backward compatibility with admin panel.

```sql
ALTER TABLE public.now_page
  ADD COLUMN IF NOT EXISTS next_gig text DEFAULT '',
  ADD COLUMN IF NOT EXISTS currently_reading text DEFAULT '',
  ADD COLUMN IF NOT EXISTS latest_podcast_guest text DEFAULT '',
  ADD COLUMN IF NOT EXISTS thinking_about text DEFAULT '';
```

The existing `working_on` and `last_updated` columns are reused. The old `on_stage`, `reading_thinking`, and `in_the_studio` columns stay but become unused.

### 2. Rewrite `/now` Page (`src/pages/Now.tsx`)

Replace the static layout with the conversation mechanic from `/conversation`. Key differences:

- **Data fetch**: On mount, fetch the `now_page` row from the database
- **Opener**: Ferry says "Hey. Glad you found this page." / "Most people don't." / "This is where I share what's actually going on. Right now." / "What do you want to know?"
- **Root options**: "Where are you speaking next?" / "What are you working on?" / "What are you reading?"
- **Responses**: Each option maps to a database field (`next_gig`, `working_on`, `currently_reading`), displayed as Ferry bubble(s)
- **Follow-up options** after each answer: "What are you thinking about lately?" / "Who was your last podcast guest?" / "Can I book you to speak?"
- **"Can I book you to speak?"** ends with a Ferry message + CTA button linking to Speakers Academy (same `CtaBalloon` pattern)
- **Already-asked tracking**: Options the visitor already picked are removed from subsequent option sets
- **Last updated note**: Small text at page bottom showing the date
- **Back to homepage**: Same exit sequence as /conversation (fade out, navigate to `/`)
- Reuses the same sub-components inline: `FerryBubble`, `VisitorBubble`, `OptionButton`, `CtaBalloon`, `TypingIndicator`
- Includes `SiteHeader` is NOT shown (matches /conversation's immersive style); footer is NOT shown

### 3. Update Admin Page (`src/pages/AdminNowPage.tsx`)

Replace the 4 old textarea fields with 6 new ones matching the new schema:
- Next gig (`next_gig`)
- Working on (`working_on` — already exists)
- Currently reading (`currently_reading`)
- Latest podcast guest (`latest_podcast_guest`)
- Thinking about (`thinking_about`)
- Last updated date picker (already exists)

Save updates all fields to the single row.

### 4. Footer Already Has /now Link

The footer already contains a "Now" link (line 24). No change needed.

### Technical Notes

- The conversation flow is self-contained in `Now.tsx` — no changes to `conversationPaths.ts`
- Field mapping is hardcoded in the component (option label → database column)
- Fallback text if a field is empty: "I haven't updated that one yet. Ask me something else."
- The page fetches data once on mount; all conversation logic runs client-side against the fetched data

