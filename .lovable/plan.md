

## Keynote Topics: Expandable Cards with Custom Topic

**File: `src/pages/Speaking.tsx`**

### Changes

1. **Add longer descriptions** to each topic in `KEYNOTE_TOPICS` array (a `description` field with 2-3 sentences expanding on the subtitle)

2. **Add a 6th "custom" topic** — something like:
   - Title: "Your topic, our expertise"
   - Subtitle: "Don't see what you're looking for?"
   - Description: "Ferry regularly develops custom keynotes tailored to specific industries, themes, or internal challenges. Let's explore how we can create something that fits your event perfectly."

3. **Replace the vertical list with a card grid** using the Accordion component (`@radix-ui/react-accordion`):
   - 2-column grid on desktop, single column on mobile
   - Each card shows the number, title, and subtitle
   - Clicking expands to reveal the full description with a smooth animation
   - The 6th "custom" card gets a slightly different accent style (dashed border or accent background) to distinguish it
   - Keep the single "Book Ferry" CTA button at the bottom

4. **Keep** the section header and subtext as-is

### Technical approach
- Use `Accordion` with `type="multiple"` so users can open several at once
- Each `AccordionItem` styled as a card with rounded corners, border, padding
- Number label stays as `01`–`06`

