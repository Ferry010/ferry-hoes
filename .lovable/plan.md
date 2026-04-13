

# Redesign: Brand Humanizing Institute Style + Speaker-Focused Site

## Summary
Overhaul the site's visual identity to match brandhumanizing.com (navy headings, orange accent, warm off-white background, large bold typography) and refocus the entire site on positioning Ferry as a speaker worth booking. Remove all chat/conversation elements.

## What's Changing

### 1. Color System Overhaul (`src/index.css`)
Replace the teal + coral palette with the BHI color system:
- **Background**: warm off-white `#FAF9F6` (similar to BHI)
- **Foreground/headings**: dark navy `#1A1A2E` (BHI uses near-black)
- **Primary/accent**: orange `#E8712B` (BHI's signature orange)
- **Secondary**: light warm gray for cards/sections
- Remove `--brand-teal`, `--brand-coral` variables; replace with `--brand-orange`

### 2. Typography Update (`src/index.css`, `tailwind.config.ts`)
- Import the same font BHI uses (or keep Plus Jakarta Sans which is very close to BHI's style — both are geometric sans-serifs)
- Increase heading font weights to 700-800 for that bold BHI look
- Larger heading sizes across sections

### 3. New Hero Section (`src/components/sections/HeroVideo.tsx`)
Replace video + chat bubbles with a clean text hero matching BHI:
- Remove video background entirely
- Large bold headline: "Everyone can copy your technology. No one can copy your **people.**" (or a Ferry-specific equivalent focused on his speaker value)
- Subtitle text explaining what Ferry does
- Two CTA buttons: "Book a keynote →" (filled orange) + "See topics →" (outlined)
- Clean off-white background, no overlays
- Optional: polaroid-style photo of Ferry (reuse existing assets)

### 4. Remove Chat/Conversation Elements
**Delete files:**
- `src/pages/Conversation.tsx`
- `src/data/conversationPaths.ts`
- `src/components/conversation/ChatBubble.tsx`
- `src/components/conversation/TypingIndicator.tsx`
- `src/components/AskFerryBubble.tsx`

**Update files:**
- `src/App.tsx`: Remove Conversation route, AskFerryBubble import/usage
- `src/components/SiteHeader.tsx`: Remove any conversation-related nav items

### 5. Update Navigation (`src/components/SiteHeader.tsx`)
Match BHI nav style:
- Clean horizontal nav with the same link styling
- Orange "Book a session" CTA button (rounded, filled)
- Update nav items to speaker-focused: My Story, On Stage, The Book, Blog, Podcast
- "Get in touch" → "Book a keynote" or "Book a session"

### 6. Update All Section Components
Apply BHI styling patterns across existing sections:
- **Section labels**: orange uppercase tracking (already similar, update color)
- **Headings**: larger, bolder, with orange highlight on key word
- **Body text**: clean gray, good line height
- **CTAs**: orange filled buttons with arrow, outlined secondary buttons
- **Cards**: clean white with subtle shadow, no heavy borders

**Files to update styling in:**
- `src/components/sections/AboutBlock.tsx`
- `src/components/sections/BrandHumanizingSection.tsx`
- `src/components/sections/SpeakerSection.tsx`
- `src/components/sections/BookSection.tsx`
- `src/components/sections/PodcastSection.tsx`
- `src/components/sections/BlogSection.tsx`
- `src/components/sections/CommunitySection.tsx`
- `src/components/sections/Footer.tsx`
- `src/components/sections/ClientLogos.tsx`
- `src/components/SectionLabel.tsx`

### 7. Update Homepage Layout (`src/pages/Index.tsx`)
- Replace `HeroVideo` with new clean `Hero` component
- Keep: ClientLogos, AboutBlock, BrandHumanizingSection, SpeakerSection, BookSection, PodcastSection, BlogSection, CommunitySection, Footer
- Remove `AboutFerryLLM` section (SEO text block — can be merged into footer or removed)

### 8. Now Page Redesign (`src/pages/Now.tsx`)
The Now page currently uses the same chat interface. Convert it to a clean editorial layout (no chat bubbles) showing the same content in a readable format.

### 9. Update Other Pages
Apply the new color system to:
- About, Speaking, Contact, Blog, BlogPost, Podcast, Press pages
- All use `text-accent` and `bg-primary` which will automatically pick up new colors

## Technical Details

### CSS Variable Changes (`:root` in `index.css`)
```
--primary: 24 78% 53%        (BHI orange #E8712B)
--foreground: 240 20% 14%     (dark navy)
--background: 40 33% 98%      (warm off-white)
--accent: 24 78% 53%          (same orange — single accent)
--border: 30 10% 90%
```

### Files Modified (approx 18 files)
### Files Deleted (5 files)

The color system change via CSS variables will cascade automatically to most components. The main manual work is the hero redesign, removing conversation code, and updating section layouts to match BHI's bolder typography.

