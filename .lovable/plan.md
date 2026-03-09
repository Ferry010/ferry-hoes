

## Update Keynote Topics Section

**File: `src/pages/Speaking.tsx`**

Replace the `KEYNOTE_TOPICS` array and the card grid with a numbered vertical list layout.

### Data
Replace the 3 topics with the 5 new ones, each having a `title` and `subtitle`.

### Layout
- Keep section header ("Keynote topics") and subtext
- Replace `grid md:grid-cols-3` card layout with a vertical stack
- Each item: flexbox row with `01`–`05` number label (muted, monospace) on the left, bold title + muted subtitle on the right, separated by a bottom border
- Remove `Clock` icon, duration, and per-topic "Enquire" links
- Single "Book Ferry for your event" CTA button at the bottom, linking to `BOOKING_URL`

