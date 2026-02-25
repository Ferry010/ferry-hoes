

## Replace Speaking Hero Background with Video

Swap the AI-generated abstract image for the same hero video used on the homepage (`/videos/Ferry_Hero_vid_2026.webm`), with a teal-tinted overlay to visually differentiate it.

### Changes

| File | Change |
|---|---|
| `src/pages/Speaking.tsx` | Replace the `<img>` background with a `<video>` element (autoPlay, muted, loop, playsInline) pointing to `/videos/Ferry_Hero_vid_2026.webm`. Change the overlay from `bg-foreground/60` to a teal-tinted dark overlay (`bg-gradient-to-br from-foreground/70 via-primary/40 to-foreground/70`). Remove the `speakingHeroBg` import. |

### Hero structure (after)

```text
┌──────────────────────────────────────────┐
│  <video> same as homepage                │
│  <div> teal-tinted dark overlay          │
│                                          │
│         🎤 Keynote Speaker               │
│     Keynotes that inspire action         │
│        subtitle text...                  │
│      [ Book Ferry button ]               │
│                                          │
└──────────────────────────────────────────┘
```

Text colors remain `text-white` / `text-white/70` — no change needed there. The teal tint in the overlay gives the Speaking page a distinct mood compared to the homepage's neutral dark overlay.

