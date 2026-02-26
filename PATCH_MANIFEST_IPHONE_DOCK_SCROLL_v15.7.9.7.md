# PATCH MANIFEST — iPhone Dock Scroll Fix (v15.7.9.7)

## Problem (iPhone)
Kada se tokom reprodukcije otvori panel **FREKVENCIJE** (preostale frekvencije) ili **LOOP** panel u `player-dock`, na iOS Safari (posebno na manjim ekranima) sadržaj može izgledati „zakucano“ — deo panela bude odsečen i nema prirodnog skrola.

## Rešenje (SAFE)
Uveden je kontrolisani skrol **samo dok je panel otvoren**:
- Dock dobija CSS klasu `dock-scroll` kada se otvore paneli.
- Dock postaje scrollable (`max-height: 78vh; overflow-y:auto; -webkit-overflow-scrolling:touch`).
- `nowplaying-panel` dobija dodatni `max-height` + `overflow:auto` za listu.
- Po zatvaranju panela, `dock-scroll` se uklanja (osim ako je drugi panel i dalje otvoren).

## Izmenjeni fajlovi (delta)
- `css/main.css`
- `js/app.js`

## Test (30–60 sek)
1. iPhone: Pokreni reprodukciju (Queue).
2. U dock-u otvori `▾ FREKVENCIJE` → proveri da može da se skroluje i vidi lista.
3. Zatvori FREKVENCIJE.
4. Otvori `🔁 LOOP (Ponavljanje)` panel → proveri da dock može da se skroluje.
5. Zatvori LOOP i FREKVENCIJE → dock se vraća u normalan režim.

## Napomena
Ovo je „SAFE patch“: ne dira audio engine, ne menja postojeći layout mreža/menija, samo omogućava skrol u dock-u kada je to potrebno.
