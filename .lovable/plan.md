

## Rethink: Unified Community Building

**The problem**: Right now there are two heavy, separate sections (Newsletter with a bold teal background + Community/Discord) that feel bolted on. Plus the blog post CTA and footer also push Discord independently. It's fragmented.

**The approach**: Merge everything into one cohesive "Stay Connected" touchpoint and weave lighter CTAs throughout.

### Changes

**1. Remove `NewsletterSection` from the homepage**
- Delete it from `Index.tsx`. The standalone teal block is the main offender.

**2. Redesign `CommunitySection` as a unified "Stay Connected" section**
- Light background matching the rest of the site (no heavy colored block)
- Combine email signup + Discord into one clean section
- Left/right or stacked layout: email input on one side, Discord link on the other
- Concise copy, no bullet-point benefit lists — just a short line and two clear actions
- Matches the editorial, integrated feel of the rest of the site

**3. Add a subtle email capture to the Footer**
- Small inline email input in the footer (like many editorial sites do)
- Feels native, not promotional

**4. Keep `PostCTA` and `BookSection` waitlist as-is**
- These are contextual and already feel integrated

### Files to change

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Remove `NewsletterSection` import and usage |
| `src/components/sections/CommunitySection.tsx` | Redesign as unified "Stay Connected" — email + Discord, light bg, concise |
| `src/components/sections/Footer.tsx` | Add small inline newsletter input |
| `src/components/sections/NewsletterSection.tsx` | Can be deleted (no longer used) |

