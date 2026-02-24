# PATCH MANIFEST — SAFE UX NAV PATCH v2 (Help + Podešavanja)
Version target: v15.7.9.6 (Public Demo)

## Cilj
Dodaje univerzalno dugme `🏠 Početni ekran` na još dva "duboka" interna ekrana:
- `📖 Korisničko uputstvo` (`page-help`)
- `⚙️ Podešavanja` (`page-settings`)

## Princip (SAFE)
- Bez reload-a stranice (`nav('home')`)
- Bez diranja player/audio logike
- Bez CSS redesign-a / bez promene layout grid-a
- Minimalne HTML izmene samo u zaglavljima sekcija

## Izmenjeni fajlovi
- `index.html`
- `index-nosw.html`

## Šta je promenjeno
### page-help
- Dodat mali red na vrhu kartice sa dugmetom:
  - `🏠 Početni ekran`

### page-settings
- Naslov sekcije prepakovan u mali flex header (naslov + dugme):
  - `Podešavanja`
  - `🏠 Početni ekran`

## Kratki test (preporuka)
1. Otvori `📖 Korisničko uputstvo` → klik `🏠 Početni ekran` → vraća na Home bez prekida.
2. Otvori `⚙️ Podešavanja` → klik `🏠 Početni ekran` → vraća na Home bez prekida.
3. Proveri da player (ako je aktivan) ne staje.
4. Proveri i `index-nosw.html` fallback varijantu.

## Napomena
Patch je namerno funkcionalan (bez vizuelnog ulepšavanja) radi stabilnosti na starijim telefonima i manjim rezolucijama.
