

# Add Technical Requirements and Charity sections to Press page

Two new sections on the Press page, both respecting the EN/NL toggle.

## 1. Technical Requirements section

Add after the Topics section (before the Media Enquiries CTA). Based on the uploaded Speakers Academy rider, present Ferry's tech setup in a clean, on-brand grid layout:

**Content (EN / NL):**
- Intro text: Ferry presents using his own MacBook Air with Apple Keynote and brings his own adapters for projector connection. He asks the venue to provide:
  1. DPA headset microphone with sound amplification
  2. Projector/beamer and screen or large 16:9 LCD display
  3. HDMI connection with audio
  4. Glass or carafe of still water

- Recording policy note: Recording (audio/video) of the presentation is not permitted without prior consent from Speakers Academy. With approval, filming for social media is allowed with a maximum compilation length of 2.5 minutes.

**Design:** Use a numbered list or small icon grid (Mic, Monitor, Cable, GlassWater from lucide-react) with short labels. Keep it minimal and on-brand, no images from the PDF.

## 2. Stichting Jarige Job section

Add a warm, personal note (as seen in the rider) after the tech requirements:

**Content (EN / NL):**
- EN: "Ferry appreciates kind gestures, but instead of flowers or wine after an event, he'd love it if you made a donation to Stichting Jarige Job. Together we can make sure children who have less can also celebrate their birthday."
- NL: "Ferry waardeert het altijd enorm, maar liever na afloop geen bloemen of wijn... in plaats van cadeaus zou hij het geweldig vinden als je een donatie doet aan Stichting Jarige Job. Zo zorgen we samen dat ook kinderen die het minder breed hebben hun verjaardag kunnen vieren."
- Link to https://stichtingjarigejob.nl/

**Design:** A subtle callout card with a heart icon, slightly distinct background. External link opens in new tab.

## Files changed

| File | Change |
|------|--------|
| `src/pages/Press.tsx` | Add Technical Requirements section and Stichting Jarige Job callout, both with EN/NL variants |

