# SINET iOS PRO Frekvencije Modal Patch v15.7.9.9 (delta)

## Cilj
Na iPhone-u u **🍏 iPhone MODE / PRO (Render)** režimu, lista **FREKVENCIJE (preskakanje)** u donjem dock-u često ne može da se koristi (WebKit: fixed + overflow + touch/checkbox). 

Ovaj patch:
- Kada je PRO (Render) uključen, klik na **FREKVENCIJE** otvara **fullscreen modal** sa listom.
- Omogućava čekiranje/odčekiranje frekvencija (preskakanje).
- Preskakanje važi **od sledećeg render segmenta** (trenutni segment je već renderovan).

## Fajlovi u patch-u
- `js/app.js`

## Kako primeniti
Prekopiraj fajl:
- `js/app.js` (iz ovog patch ZIP-a) preko postojećeg.

## Test (iPhone)
1) Uključi **🍏 iPhone MODE / PRO (Render)**
2) Pokreni listu
3) Tapni **FREKVENCIJE**
   - treba da se otvori modal i da vidiš listu frekvencija
4) Odčekiraj 1-2 frekvencije
5) Sačekaj da pređe u sledeći segment (ili pusti da segment završi)
   - preskočene frekvencije u sledećem segmentu će biti tišina

Napomena: Ako modal kaže "nema aktivne liste", prvo pokreni reprodukciju pa ponovi.
