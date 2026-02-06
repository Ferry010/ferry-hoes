

# Alternating Hero Name Animation

Create a looping animation where "Ferry" and "Hoes" alternate on screen, never appearing together.

---

## Animation Sequence

```text
Time 0.0s - 2.0s:  "Ferry" fades in with effect → holds → fades out
Time 2.0s - 4.0s:  "Hoes" fades in with effect → holds → fades out  
Time 4.0s - 6.0s:  "Ferry" fades in again → cycle repeats infinitely
```

---

## Technical Approach

### Option: CSS Animation with Keyframes

Create a custom infinite CSS animation that handles the full cycle:

**New keyframes in `tailwind.config.ts`:**

| Keyframe | Description |
|----------|-------------|
| `name-cycle-ferry` | 6s loop: visible 0-33%, hidden 33-100% |
| `name-cycle-hoes` | 6s loop: hidden 0-33%, visible 33-66%, hidden 66-100% |

**Animation timing:**
- Total cycle: 6 seconds
- Each name visible for ~2 seconds
- Smooth fade transitions between states

---

## Files to Modify

| File | Change |
|------|--------|
| `tailwind.config.ts` | Add new keyframes for alternating cycle |
| `src/components/sections/HeroVideo.tsx` | Replace current layout with single centered position, apply cycling animations |

---

## Implementation Details

### tailwind.config.ts

Add two new keyframes:

```js
"name-ferry": {
  "0%, 5%": { opacity: "0", transform: "scale(0.8)" },
  "10%, 40%": { opacity: "1", transform: "scale(1)" },
  "45%, 100%": { opacity: "0", transform: "scale(0.8)" },
},
"name-hoes": {
  "0%, 50%": { opacity: "0", transform: "scale(0.8)" },
  "55%, 90%": { opacity: "1", transform: "scale(1)" },
  "95%, 100%": { opacity: "0", transform: "scale(0.8)" },
}
```

And corresponding animations:
```js
"name-ferry": "name-ferry 4s ease-in-out infinite",
"name-hoes": "name-hoes 4s ease-in-out infinite",
```

### HeroVideo.tsx

**Structure change:**
- Both names will be positioned absolutely in the same spot (stacked)
- Only one is visible at a time due to the animation timing
- Each name uses its respective animation class

```tsx
<div className="relative h-[20rem] sm:h-[8rem] md:h-[12rem] lg:h-[16rem] xl:h-[20rem]">
  {/* Ferry - visible first half of cycle */}
  <span className="absolute inset-0 flex justify-center animate-name-ferry">
    {"Ferry".split("").map((letter, i) => (
      <span className="text-brand-gold drop-shadow-gold" style={{animationDelay: ...}}>
        {letter}
      </span>
    ))}
  </span>
  
  {/* Hoes - visible second half of cycle */}
  <span className="absolute inset-0 flex justify-center animate-name-hoes">
    {"Hoes".split("").map((letter, i) => (
      <span className="text-background/90 drop-shadow-dark" style={{animationDelay: ...}}>
        {letter}
      </span>
    ))}
  </span>
</div>
```

---

## Visual Effects

- **Ferry**: Gold text with golden glow effect
- **Hoes**: Light text with dark shadow
- Both use scale animation (0.8 → 1.0) combined with fade for dramatic entrance
- Letter-by-letter stagger animation within each word appearance

