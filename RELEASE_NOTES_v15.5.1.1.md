# Release Notes — SINET Audio Lekar Public Demo v15.5.1.1

**Datum:** 2026-02-16  
**Autor:** miuchins • **Koautor:** SINET AI

## Šta je novo ✅
- 🧩 **Moji protokoli — Loop UI fix:** ispravljene funkcije koje se pozivaju iz UI-a (`protoSetLoopEnabled` / `protoSetLoopCount`). Loop sada radi bez greške pri unosu broja.
- 📖 **Uputstvo unutar aplikacije (HTML):** "Korisničko uputstvo" je sada ugrađeno direktno u aplikaciju, u nežnim tonovima, sa "step-by-step" sekcijama (accordion).
- 📦 Offline/PWA: korisnički priručnik (`SINET_User_Manual_v1.0_SR.md`) dodat u listu resursa za cache (kad je dostupno).

## Važno
- Loop 1× = bez ponavljanja (normalno).
- Loop 2–20× = ponavljanje celog protokola.

## Dokumenti za GitHub
- `RELEASE_NOTES_v15.5.1.1.md` (ovo)
- `SINET_User_Manual_v1.0_SR.md` (detaljno uputstvo, step‑by‑step)

## Napomena o iOS background audio 🎧🍏
- iOS browser može pauzirati WebAudio u pozadini ili napraviti “glitch/pulsiranje”. Stabilno rešenje je foreground playback; za pravi background (ugašen ekran) potreban je native wrapper.
