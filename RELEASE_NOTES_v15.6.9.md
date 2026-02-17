# SINET Audio Lekar — v15.6.9 (iPhone FIX)

## ✅ Šta je popravljeno

- **iPhone start / POKRENI LISTU crash**: ispravljena greška:
  `TypeError this.isIosBgRenderedEnabled is not a function`
  koja je prekidala start protokola i zato se **nije pojavljivao “Play frekvencije” panel**.

- **iOS PRO toggle**: ispravljen interni bug u toast poruci (pogrešna varijabla).

## ℹ️ Napomena (cache)

- Ako koristiš Service Worker (PWA), ova verzija menja cache ključ (`v15.6.9`) i JS query stringove `?v=15.6.9` da bi se izbegao stari cache.

## Test koraci

1) Otvori aplikaciju na iPhone-u
2) Tap **AKTIVIRAJ** (poruka “audio je aktiviran”)
3) Izaberi simptom → **PUSTI**
4) Otvori se **Queue/Lista** → tap **POKRENI LISTU**
5) Treba da se pojavi **Play frekvencije panel** i da krene prva frekvencija.
