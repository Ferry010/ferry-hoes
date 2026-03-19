

# Three changes: Logo slider on Press page, Press Kit link on Speaking page, Bio language switch

## 1. Press page: Replace text badges with ClientLogos slider

Replace the "As featured in" section (lines 133-146 in `Press.tsx`) which currently shows plain text badges with the same `ClientLogos` component used on the Speaking page. Import `ClientLogos` and render it in place of the current markup.

## 2. Speaking page: Add "Press Kit" link

Add a link to `/press` on the Speaking page. A natural placement is near the "Meet Ferry" section or in the geography/availability bar — a small inline link like "View Press Kit →".

## 3. Press page: EN/NL bio toggle with Switch

Add a `Switch` component (already exists in `src/components/ui/switch.tsx`) at the top of the bio section to toggle between English and Dutch. Store the toggle state in local React state.

**Dutch translations needed:**

- **Short bio**: "Ferry Hoes is een internationaal keynote spreker, auteur van *Brand Humanizing* en oprichter van het Brand Humanizing Institute. Hij helpt organisaties technologie te gebruiken om menselijker te worden, niet minder. Ferry spreekt op conferenties en zakelijke evenementen wereldwijd en combineert storytelling met praktische inzichten."

- **Extended bio** (3 paragraphs):
  1. "Ferry Hoes werkte ruim tien jaar op het snijvlak van technologie, marketing en menselijk gedrag voordat hij wereldwijd podia betrad. In 2017 introduceerde hij het concept *Brand Humanizing*, een raamwerk om technologie in te zetten zodat merken onderscheidender en menselijker worden. Hij heeft dit jarenlang getest en verfijnd bij internationale organisaties."
  2. "Hij is co-auteur van *Brand Humanizing* (met Jonathan Flores), oprichter van het Brand Humanizing Institute en host van *The Human Era Podcast*. Zijn presentaties draaien om één kerngedachte: technologie moet je menselijker maken, niet minder."
  3. "Ferry wordt exclusief vertegenwoordigd door Speakers Academy en heeft gesproken bij evenementen van onder meer ASR, Atos, Chubb, GSK, Vodafone en het Ministerie van Financiën. Hij is een van de meest geboekte sprekers van Nederland."

### Files changed

| File | Change |
|------|--------|
| `src/pages/Press.tsx` | Import `ClientLogos` + `Switch`; replace "As featured in" badges with `<ClientLogos />`; add EN/NL toggle state and conditional bio rendering |
| `src/pages/Speaking.tsx` | Add a "Press Kit" link (e.g. in the geography bar or Meet Ferry section) |

