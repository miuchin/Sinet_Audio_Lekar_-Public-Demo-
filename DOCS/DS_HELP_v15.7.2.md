# SINET DS Generator — uputstvo (v15.7.2)

Ovo je **DS-Generator.html** (Diagnostic Support / “Vera format”) koji radi nad istim katalogom kao i SINET Audio Lekar.

## Gde se nalazi
- Generator: `http://localhost:8000/DS-Generator.html`
- Katalog (default): `http://localhost:8000/data/SINET_STL.json`

Generator podržava i URL override:
- `DS-Generator.html?catalog=/data/SINET_STL.json`
- Preselect iz kataloga: `&freqId=OBLAST-XXX` (ili `&item=...`)
- Povratak u SINET: `&back=<url-encoded URL>`

## Brzi tok (korisnik)
1. Izaberi **Oblast** i **Specifično stanje** (iz kataloga).
2. Po potrebi dopuni: ime/pacijent, MKB-10, opis, terapije, fokus.
3. Klikni **Generiši vodič**.
4. Po želji:
   - **Preuzmi .html** (za slanje/štampu)
   - **Kopiraj HTML**
   - **Preuzmi protokol** (JSON za uvoz u SINET)
   - **Preuzmi paket** (JSON: protokol + HTML)
   - **Ubaci u SINET** (automatski doda u “Moji protokoli”)

## SINET integracija
U SINET Audio Lekar dodato je dugme **DS** u gornjoj traci.

- Klik na **DS** otvara generator i prosleđuje trenutno izabrani simptom (ako postoji).
- Klik **Ubaci u SINET** u generatoru:
  - snimi protokol u `localStorage` kao `SINET_DS_BRIDGE`
  - vrati se nazad u SINET
  - SINET automatski importuje protokol u **Moji protokoli** ✅

## Deljenje prijatelju / članu porodice
Najlakše:
- Generiši vodič → **Preuzmi paket** → pošalji `.json` fajl.
- Primalac u SINET-u: **Moji protokoli → Import** i izabere paket.
  - SINET uveze protokol
  - ponudi da otvori priloženi HTML u novom tabu.

## Napomena
Generator je informativan. Pre upotrebe u praksi uvek proveriti kontraindikacije, interakcije i medicinski nadzor.
