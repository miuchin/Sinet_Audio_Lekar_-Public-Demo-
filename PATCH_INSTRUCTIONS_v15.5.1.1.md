# SINET GitHub Patch v15.5.1.1 (Loop UI fix + embedded Help)

Ovaj patch je fokusiran na 2 stvari:

1) ✅ **Moji protokoli — Loop radi bez greške**
- Fix: UI je pozivao funkcije koje nisu postojale (`protoSetLoopEnabled` / `protoSetLoopCount`).
- Sada možeš normalno da uključiš loop i uneseš broj ponavljanja (2–20).

2) 📖 **Korisničko uputstvo ugrađeno u aplikaciju (HTML)**
- Help stranica više nije samo link ka MD fajlu, već ima “step-by-step” vodič u nežnim tonovima.
- MD fajl i dalje postoji za GitHub/štampu.

---

## Kako primeniti (GitHub)

1. U repo root-u zameni fajlove:
- `index.html`
- `index-nosw.html`
- `service-worker.js`
- `css/main.css`
- `js/app.js`

2. Dodaj/ostavi dokumentaciju:
- `SINET_User_Manual_v1.0_SR.md` (verzija aplikacije ažurirana na 15.5.1.1)
- `RELEASE_NOTES_v15.5.1.1.md`

3. Commit + push na GitHub.

4. (Ako koristiš Netlify) redeploy.

---

## Kako forsirati update (browser)

- Desktop Chrome: hard refresh (Ctrl+Shift+R)
- iOS Safari: Settings → Safari → Advanced → Website Data → (site) → Remove

Datum: 2026-02-16
