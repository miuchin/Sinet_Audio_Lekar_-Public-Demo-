# PATCH MANIFEST — Home return button for key modules (v15.7.9.6)

## Svrha
Dodaje univerzalno dugme **🏠 Početni ekran** na 4 ključna ekrana:
- Moji Favoriti
- Moji Protokoli
- Moji Simptomi
- AI Upitnik

## Princip rada
- Navigacija koristi postojeću funkciju `nav('home')`
- Nema reload stranice
- Nema izmene player/audio logike
- Nema vizuelnog “polish”-a koji bi remetio male ekrane

## Izmenjeni fajlovi
- `index.html`
- `index-nosw.html`

## Brzi test
1. Otvori svaki od 4 ekrana.
2. Klikni `🏠 Početni ekran`.
3. Proveri povratak na početni ekran bez prekida sesije/audio reprodukcije.
