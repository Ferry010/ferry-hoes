

## Plan: Update Contact page copy and add brand color

### 1. Fix booking card copy (line 161)
Change "Click here to book me to speak" to "Go here to book me to speak"

### 2. Add brand color to the info cards
- **Press card**: Add a teal left border accent (`border-l-4 border-l-primary`) and use a light teal background (`bg-[hsl(var(--brand-teal-light))]`)
- **Book to speak card**: Add a coral left border accent (`border-l-4 border-l-accent`) and use a light coral background (`bg-[hsl(var(--brand-coral-light))]`)

### 3. Style the CTA buttons with brand colors
- **Press enquiry button**: Use primary variant (teal) instead of outline
- **Book via Speakers Academy button**: Use accent-colored styling (`bg-accent text-accent-foreground hover:bg-accent/90`) instead of outline

### 4. Style the Submit button
Ensure the "Send message" button uses the primary (teal) brand color, which it already does via the default Button variant.

These changes bring the page in line with the teal + coral brand palette and make the cards feel intentional rather than generic.

