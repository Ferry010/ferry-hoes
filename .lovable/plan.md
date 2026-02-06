

# Update Speaker Section CTAs and Create Speaking Page

This plan covers updating the CTA links in the Speaker section and creating a dedicated speaking/speaker kit page.

---

## Changes Overview

### 1. SpeakerSection.tsx - Update CTAs

| Element | Current | New |
|---------|---------|-----|
| "Speaker enquiries" button | Links to `/speaking` (internal) | Links to `https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966` (external) |
| "Want to discuss an event?" link | Opens message panel | Text: "More about Ferry as speaker" → Links to `/speaking` (internal page) |

### 2. New Speaking Page (`/speaking`)

Create a full speaker kit page with sections for:
- Hero with speaker tagline
- Bio/About as a speaker
- Speaking topics
- Video reel placeholder
- Testimonials section (placeholder)
- Event photos (placeholder)
- CTA to book via Speakers Academy

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/sections/SpeakerSection.tsx` | Update both CTAs |
| `src/pages/Speaking.tsx` | **New file** - Speaker kit page |
| `src/App.tsx` | Add `/speaking` route |

---

## Technical Implementation

### SpeakerSection.tsx Changes

**Speaker enquiries button:**
- Change from `<Link to="/speaking">` to `<a href="https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966" target="_blank" rel="noopener noreferrer">`

**Micro-engagement link:**
- Remove `openMessagePanel` function
- Change from `<button onClick={...}>` to `<Link to="/speaking">`
- Update text from "Want to discuss an event?" to "More about Ferry as speaker"

### Speaking.tsx - New Page Structure

```text
┌─────────────────────────────────────────┐
│  Hero: "Ferry Hoes - Keynote Speaker"   │
│  Tagline + Book Now CTA                 │
├─────────────────────────────────────────┤
│  About Section                          │
│  Bio as a speaker, photo                │
├─────────────────────────────────────────┤
│  Speaking Topics                        │
│  Cards for each topic with descriptions │
├─────────────────────────────────────────┤
│  Video Reel (placeholder)               │
├─────────────────────────────────────────┤
│  Testimonials (placeholder)             │
├─────────────────────────────────────────┤
│  CTA: Book via Speakers Academy         │
└─────────────────────────────────────────┘
```

### App.tsx Route Addition

Add route before the catch-all:
```tsx
<Route path="/speaking" element={<Speaking />} />
```

---

## Design Notes

- The page will follow the existing design system (colors, typography, spacing)
- Uses the Coral accent color (#E86A4A) for CTAs to match the Speaker section
- Includes the FloatingChatBubble and Footer components
- Responsive layout matching other pages

