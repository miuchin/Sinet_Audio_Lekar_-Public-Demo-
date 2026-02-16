# Release Notes — SINET Audio Lekar Public Demo v15.5.1.0

**Datum:** 2026-02-16  
**Autor:** miuchins • **Koautor:** SINET AI

## Šta je novo ✅
- 🧩 **Moji protokoli: Loop protokola** (ponavljanje celog protokola 1–20×).
- ⏱️ Ukupno vreme u protokolu sada računa Loop (ukupno = suma koraka × loop).
- ▶ Player prikazuje naslov protokola kao `[PROTO xN] Naziv` kada je loop uključen.
- 📦 Dokumentacija za GitHub:
  - `RELEASE_NOTES_v15.5.1.0.md` (ovo)
  - `SINET_User_Manual_v1.0_SR.md` (detaljno uputstvo, step-by-step)

## Kompatibilnost
- Postojeći protokoli bez `loopCount` automatski se tretiraju kao **1×**.
- Export/Import protokola prenosi i `loopCount`.

## Napomena o iOS background audio 🎧🍏
- Browser na iOS-u ne garantuje stabilan WebAudio u background-u. Preporuka: foreground playback ili native wrapper.
