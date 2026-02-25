

## Replace VodafoneZiggo with Separate Vodafone and Ziggo Logos

### Changes

| File | Change |
|---|---|
| `src/assets/logos/vodafone.png` | Copy uploaded Vodafone logo |
| `src/assets/logos/ziggo.png` | Copy uploaded Ziggo logo |
| `src/components/sections/ClientLogos.tsx` | Remove VodafoneZiggo import and entry. Add Vodafone and Ziggo as separate entries inserted at different positions in the array. Delete the old `vodafoneziggo.png` import. |

### Logo Array (new order)

1. Atos
2. **Vodafone** (inserted here)
3. GSK
4. Toshiba
5. AMA
6. **Ziggo** (inserted here)
7. Chubb
8. a.s.r.
9. UWV
10. MinFin
11. Eindhoven

Both new logos get similar sizing constraints to match the existing set (`max-h-12 max-w-[180px]` range).

