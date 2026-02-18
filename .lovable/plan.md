

## Add Real Testimonials to the Speaking Page

Replace the placeholder testimonials section with the 9 real testimonials, translated from Dutch to English.

### Translated testimonials

| Quote | Attribution |
|-------|------------|
| "Ferry took us on an inspiring journey, with the topic perfectly tailored to our audience. He engaged participants effectively and left more than enough room for questions." | Avans Hogeschool |
| "From our very first meeting with Ferry, the collaboration was wonderful. He's incredibly enthusiastic, flexible, and loves thinking along about both content and practical matters. The day itself was a great experience too! Participants of the keynote and the in-depth workshop said they felt inspired and gained new insights about ChatGPT and AI. In short: we're enthusiastic about Ferry!" | Abel, Aestate |
| "Ferry is a fantastic speaker. He adapts perfectly to the audience and showed during the workshops that he's highly flexible and alert to reactions from the room. We're very happy with the collaboration and he gave our clients plenty of inspiration they can put into practice." | Almer, ASR |
| "We booked a speaker through Speakers Academy for our event, and the experience was very positive. Communication was smooth, and they actively helped find a speaker who matched our needs. The speaker made a strong contribution to the success of our event and engaged the audience brilliantly. We're very satisfied with the collaboration." | Rianne, Shared |
| "Energetic, positive, funny. It was a wonderful session and we received a lot of positive feedback about Ferry's talk. Communication was pleasant, and in the absence of the regular contact person it was seamlessly picked up by a colleague. The aftercare was neatly arranged too. We're happy!" | CPM Nederland |
| "Ferry is a knowledgeable and approachable speaker. You could tell at our event from the extensive Q&A, where many questions came from the audience about developments in AI. With his expertise on the synergy between humans and technology, Ferry was a strong keynote opening for our event." | ACES Direct |
| "Ferry was well prepared and it was great having him as our moderator. He thought along and took action where needed. The reactions from the audience were positive." | Els, Triade Vitree |
| "I recently organized a workshop where Ferry Hoes and the Brand Humanizing Institute delivered a lecture on the Ethics of AI. No 'Death by PowerPoint,' but a smooth and captivating story that got us as an IT organization thinking. Ferry is second to none at keeping his audience engaged. I received a lot of positive feedback about his contribution to our workshop and wholeheartedly recommend him." | Laurens, Atos |
| "Ferry has the gift of explaining complex theory in an accessible way. The AI experience among participants varied widely -- from no experience at all to employees who already use it daily. Even those without any experience came out of the workshop surprised and very enthusiastic." | Maud, Chubb Fire & Security |

### Design

- Replace the current placeholder cards with a scrollable grid of real testimonial cards
- Each card shows the quote in italics, with the name and company below
- Use a 2-column grid on desktop, single column on mobile
- Cards styled with `bg-card/50 border-border/50 rounded-xl` to match the existing topic cards
- A small quote mark or accent-colored left border for visual flair

### Technical details

**File: `src/pages/Speaking.tsx`** (lines 205-228)

- Replace the testimonials placeholder section with a mapped array of `{ quote, name, company }` objects
- Render in a `grid md:grid-cols-2 gap-6` layout
- Each card gets a left accent border (`border-l-4 border-accent`) and the quote in `italic text-muted-foreground`, with attribution in `font-semibold text-foreground`
- Add `Quote` icon import from lucide-react for a small decorative element

