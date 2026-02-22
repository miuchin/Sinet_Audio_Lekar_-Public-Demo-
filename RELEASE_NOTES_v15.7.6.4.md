# RELEASE NOTES — v15.7.6.4

**Autorstvo:** miuchins (Svetozar Miuchin) + SINET AI

## Novosti
- **SINET–MKB-10 Linker:** dodate **Bulk NON_ICD** akcije:
  - po **ID prefiksima** (npr. `akutne-povrede-`, `sys-hitno-`)
  - po **oblastima/grupama iz ID-a** (npr. `akutne-povrede`, `sys-hitno`)
- Dodato dugme **📋 Grupe** (kopira listu grupa + broj stavki u clipboard).
- Automatski popunjava predlog prefiksa na osnovu prisutnih grupa.
- Cache-bump (Service Worker) na `sinet-audio-v15.7.6.4`.

## Napomena
- “Oblast/Tag” je izvedena iz prvih 1–2 segmenta `id` polja. Ovo je namerno, da se katalog ne “lomi” dok ne uvedemo eksplicitna `tags[]` polja.
