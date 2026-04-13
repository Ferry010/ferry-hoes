

# Consistent accent colour, wordmark, section pills, and dark closing section

## Summary

Five coordinated changes: (1) commit to coral/salmon as the primary accent for highlights and interactive elements, teal as the calmer secondary; (2) give the nav wordmark more personality; (3) ensure every homepage section has a pill label; (4) merge CommunitySection + Footer into a single dark closing panel.

---

## 1. Commit to coral as the single accent colour

Currently some sections use `text-primary` (teal) for highlighted heading words and some use `text-accent` (coral). Standardise so **coral is always the highlight colour** for heading spans, badge pills, and interactive links. Teal stays only for the nav CTA button and subtle secondary elements.

**Files & changes:**

| Section | Current | Change to |
|---------|---------|-----------|
| `SpeakerSection.tsx` | `"text-primary"` on "inspire action" | `"text-accent"` |
| `SpeakerSection.tsx` | badge uses `bg-accent/10 text-accent` | keep (already coral) |
| `PodcastSection.tsx` | badge + heading highlight use `text-primary` | `text-accent`, badge `bg-accent/10 text-accent` |
| `BlogSection.tsx` | heading highlight `text-primary` | `text-accent` |
| `BlogSection.tsx` | CTA button `bg-primary` | `bg-accent` |
| `BrandHumanizingSection.tsx` | already coral | keep |
| `BookSection.tsx` | already coral | keep |
| `AboutBlock.tsx` | "Ferry Hoes" name `text-primary` | `text-accent` |
| `CommunitySection.tsx` | newsletter/discord labels `text-primary` | `text-accent` |
| `AboutFerryLLM.tsx` | links `text-accent` | keep |

## 2. Strengthen the wordmark

Replace the plain logo `<img>` in `SiteHeader.tsx` with a typographic treatment: keep the logo image but add a subtle vertical bar separator and "FH" monogram or simply style the existing logo with a slight scale-up. **Simpler approach**: keep the existing logo PNG (it's already a designed wordmark image), but add a small coral dot accent after it — a 6px filled circle in `bg-accent` positioned as a superscript — to give it more brand personality. This is lightweight and distinctive.

**File:** `SiteHeader.tsx` — after the `<img>` tag, add a `<span className="w-1.5 h-1.5 rounded-full bg-accent inline-block ml-1 mb-3" />` dot.

## 3. Section-label pills on every section

Currently missing from: `AboutBlock`, `AboutFerryLLM`, `CommunitySection`, `HeroVideo`.

Add pills to:
- **AboutBlock.tsx**: Add `"My Story"` pill before the "Ferry Hoes" name
- **AboutFerryLLM.tsx**: Add `"About"` pill before the heading
- **CommunitySection.tsx**: Add `"Stay Connected"` pill before the heading

Skip HeroVideo (it's a full-bleed video hero, pill doesn't fit).

**Pattern** (consistent with existing):
```tsx
<span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
  <span className="w-2 h-2 rounded-full bg-accent" />
  Label
</span>
```

## 4. Dark closing section

Merge `CommunitySection` into the footer's dark background to create one strong visual landing panel.

**File:** `CommunitySection.tsx`
- Change background from the warm gradient to dark: `bg-[hsl(25,15%,13%)] text-white`
- Update all text colours to light variants matching the footer palette
- Headings → `text-white`, body → `text-[hsl(38,30%,82%)]`, labels → `text-[hsl(38,30%,88%)]`
- Input/button styles: match footer's dark input style (`bg-white/5 border-white/10 text-white`)

**File:** `Footer.tsx` — remove the top `py-16` and border-t to make it flow seamlessly from the Community section. Or keep a subtle `border-t border-white/10` as a divider.

**File:** `Index.tsx` — wrap `<CommunitySection />` and `<Footer />` in a single `<div>` with the dark background so they share the same visual panel (or just let each component set its own matching dark bg).

---

## Files changed

| File | Change |
|------|--------|
| `src/components/sections/SpeakerSection.tsx` | Heading highlight → coral |
| `src/components/sections/PodcastSection.tsx` | Badge + heading highlight → coral |
| `src/components/sections/BlogSection.tsx` | Heading highlight + CTA → coral |
| `src/components/sections/AboutBlock.tsx` | Name colour → coral, add pill |
| `src/components/sections/AboutFerryLLM.tsx` | Add pill |
| `src/components/sections/CommunitySection.tsx` | Dark bg, light text, add pill |
| `src/components/sections/Footer.tsx` | Minor spacing tweak for seamless dark panel |
| `src/components/SiteHeader.tsx` | Add coral dot accent to logo |

