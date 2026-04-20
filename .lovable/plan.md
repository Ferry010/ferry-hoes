
## Title sizing fix, slightly smaller, better fitting

Scope: homepage only, since the current preview is on `/index` and the request is about fitting the screen. No layout, color, typography family, spacing, animation, image, or content changes.

### 1. Make the homepage hero title fit better on mobile

Update `src/components/sections/Hero.tsx`:

Current H1 sizing:
```ts
clamp(48px, 8.5vw, 128px)
```

Proposed H1 sizing:
```ts
clamp(42px, 7.6vw, 116px)
```

This keeps the headline large and editorial, but reduces the mobile minimum enough that “Technology should make us more human, not less.” fits the screen more comfortably.

### 2. Slightly reduce homepage section H2 titles

Update homepage section H2 clamp values from:

```ts
clamp(40px, 6vw, 88px)
```

to:

```ts
clamp(36px, 5.4vw, 80px)
```

Apply only to homepage section components currently visible in the homepage flow:

- `src/components/sections/ThreeRoads.tsx`
- `src/components/sections/BlogSection.tsx`
- `src/components/sections/BookSection.tsx`
- `src/components/sections/SpeakerSection.tsx`
- `src/components/sections/PodcastSection.tsx`
- `src/components/sections/BrandHumanizingSection.tsx`
- `src/components/sections/CommunitySection.tsx`

This is a modest reduction, not a redesign.

### 3. Keep smaller card titles unchanged unless they visibly overflow

Do not change card titles, buttons, body copy, navigation, or footer typography unless a specific title is overflowing. The likely issue is the large H1/H2 scale, not the card typography.

### 4. Do not touch non-homepage pages

Leave `/my-story`, `/the-idea`, `/writing`, `/on-stage`, `/podcast`, `/the-book`, and all other pages unchanged unless you explicitly ask to apply the same scale globally.

### Files to edit

- `src/components/sections/Hero.tsx`
- `src/components/sections/ThreeRoads.tsx`
- `src/components/sections/BlogSection.tsx`
- `src/components/sections/BookSection.tsx`
- `src/components/sections/SpeakerSection.tsx`
- `src/components/sections/PodcastSection.tsx`
- `src/components/sections/BrandHumanizingSection.tsx`
- `src/components/sections/CommunitySection.tsx`
