# RELEASE NOTES v15.7.9.2

## HOTFIX — Huawei / small-screen card grid overflow

- ✅ `preset-grid` ("STARIJI — Najčešće") više nije fiksno 2 kolone; sada je **responsive** (`auto-fit/minmax`)
- ✅ `oblast-grid` (Katalog/Oblasti kartice) takođe responsive
- ✅ Dodat fallback za vrlo uske ekrane (`max-width:420px`) → prisilno 1 kolona
- ✅ Smanjen rizik od "odsečenih" kartica i prikaza 1.5 kolona na Huawei / starijim Android browserima
- ✅ Cache key bump: `sinet-audio-v15.7.9.2`

Napomena: Ako koristiš PWA/Service Worker, uradi **Unregister + Clear site data** pre testa.
