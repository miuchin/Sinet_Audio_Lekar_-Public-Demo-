# SINET Audio Lekar — Release Notes v15.6.4

## Fokus: iPhone (Safari / PWA) — zvuk ne kreće

### ✅ Popravke
- **iOS unlock**: Dodata pouzdanija "silent keep-alive" logika (HTMLAudio) koja se pokreće u okviru korisničkog klika i time otključava iOS audio sesiju.
- **iOS PRO (Rendered WAV u RAM-u)**: pre renderovanja se pokreće unlock; ako iOS blokira `play()`, korisnik dobija jasnu poruku da tapne **🔊 AKTIVIRAJ** pa opet ▶.
- **iOS Experimental (MediaStream -> <audio>)**: uveden **fallback** — direct WebAudio ostaje uključen dok `<audio>` ne potvrdi da zaista svira, kako ne bi došlo do potpune tišine.

### ℹ️ Napomena
- iOS/Safari ima stroga ograničenja za background/lock-screen. Ovo je "best-effort" web rešenje.
- Ako je iPhone u **Silent** režimu (mute switch), Safari često neće pustiti zvuk — obavezno proveri.
