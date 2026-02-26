

## Plan: Add copy blocks and press/media option to Contact page

### Changes to `src/pages/Contact.tsx`

**1. Update header copy**

Replace the current headline "Start a conversation." and subtext with:

- Headline: **"Contact"**
- Subtext: "Please find a way to connect with me or my team that suits you best."

**2. Add two info cards between header and form**

Insert two clean cards/blocks after the header section and before the form:

- **Press** card: "For all interviews, media opportunities, and anything else press-related, please use this option." with a CTA button linking to the contact form with press pre-selected (or a mailto/anchor).
- **Book Ferry To Speak** card: "I'm exclusively represented by Speakers Academy. Click here to book me to speak at your next event." with a link to `https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966` (opens in new tab).

Both cards styled minimally — border, generous padding, clean typography. No heavy shadows.

**3. Add "Press / media enquiry" to inquiry dropdown**

Add `{ value: "press", label: "Press / media enquiry" }` to `INQUIRY_OPTIONS` array (after podcast or near the top).

**4. Press card behavior**

The Press card CTA scrolls to the form and pre-selects "Press / media enquiry" in the dropdown.

