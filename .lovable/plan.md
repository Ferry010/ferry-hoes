

## Connect Discord Across the Site

Now that your Discord is live (`https://discord.gg/BfZrw5wJ`), here's what needs updating:

### Changes

**1. `src/components/sections/CommunitySection.tsx`**
- Replace "Discord community launching soon" text with a live "Join the Discord" link
- Enable the email input and "Join waitlist" button -- or replace the waitlist entirely with a single prominent "Join Discord" CTA button linking to `https://discord.gg/BfZrw5wJ`
- Remove the `disabled` attributes from the input/button (or remove the waitlist UI altogether in favor of the direct Discord link)

**2. `src/components/blog/PostCTA.tsx`**
- Update the placeholder `href="https://discord.gg/your-invite"` to `href="https://discord.gg/BfZrw5wJ"`

**3. `src/components/sections/Footer.tsx`**
- Add a Discord link to the social links row (currently has placeholder LinkedIn/Twitter/YouTube links)

### Result

All Discord references across the site will point to your live server, and the Community section will go from "coming soon" to an active, clickable invite.
