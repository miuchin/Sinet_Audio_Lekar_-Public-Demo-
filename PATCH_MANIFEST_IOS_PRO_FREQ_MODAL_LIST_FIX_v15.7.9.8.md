# PATCH MANIFEST — iOS PRO Frekvencije Modal List Fix (v15.7.9.8)

## Problem
Na iPhone u **iPhone MODE / PRO (Render)** modal se otvara, ali lista frekvencija je prazna (ne prikazuje stavke).

## Uzrok
Kod je birao 'standard' sekvencu (`audio.currentSequence`) čim postoji, i nije koristio `rendered.fullSequence`, pa je UI ostajao prazan u PRO Render režimu.

## Rešenje
- U iOS PRO (Render) režimu modal **uvek** prikazuje `rendered.fullSequence` (ili `rendered.sequence`).
- Dodata je poruka ako je lista prazna.
- Standard režim dobija fallback poruku "Nema preostalih frekvencija."

## Fajlovi
- js/app.js

## Test (iPhone)
1. Uključi **🍏 iPhone MODE / PRO (Render)**
2. Pokreni listu (Queue)
3. Tapni **FREKVENCIJE** → mora da se prikaže lista (checkbox-i)
4. Odčekiraj 1–2 → toast: "važi od sledećeg segmenta"
