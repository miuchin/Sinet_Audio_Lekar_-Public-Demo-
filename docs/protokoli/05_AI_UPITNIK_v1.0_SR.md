# SINET — PROTOKOL: AI Upitnik (v1.0, SR)

**Uloga:** da uz pomoć AI napraviš nove stavke i ubaciš ih kao **➕ Moji simptomi**.

> ✅ Cilj je da korisnik vidi da AI nije “bauk”, nego pomoćnik za strukturisanje.

---

## 1) Step-by-step (najsigurniji tok)

1. Otvori **🤖 AI Upitnik**
2. Upiši *jasan opis* onoga što želiš
3. Klikni **📋 KOPIRAJ PROMPT**
4. Otvori AI chat (npr. ChatGPT) i nalepi prompt
5. AI treba da vrati **samo JSON** (bez markdown-a)
6. Kopiraj AI JSON odgovor
7. U polje **AI odgovor (JSON) — zalepi ovde** nalepi sadržaj
8. Klikni **📥 UVEZI U 'Moji simptomi'**
9. Idi na **➕ Moji simptomi** i proveri da li su stavke tu

---

## 2) Polje-po-polje

### A) Prompt textarea
- služi da ti napravi “pravilno pitanje” za AI

### B) AI odgovor textarea
- ovde ide **čist JSON**
- bez ``` oznaka
- bez dodatnog teksta

### C) Dugmad
- **📋 KOPIRAJ PROMPT**: kopira prompt u clipboard
- **📋 KOPIRAJ AI ODGOVOR**: kopira JSON koji si uneo
- **🪟 PRIKAŽI AI ODGOVOR**: otvara modal (lakše kopiranje)
- **📄 AI izveštaj (HTML)** (ako postoji): pravi Template v2 izveštaj

---

## 3) Pravila za dobar rezultat (edukativno)

AI daje bolji output kad mu kažeš:
- “Vrati samo JSON, bez markdown-a”
- “Svaka stavka neka ima id, naziv, opis, frekvencije (Hz + minute + opis)”
- “Ako nešto nije medicinska dijagnoza, označi kao NON_ICD” (ako radiš MKB mapiranje)

---

## 4) Troubleshooting

- **AI vratio markdown** → ponovi prompt i naglasi “samo JSON”
- **Import ne radi** → JSON nije validan (proveri zareze, navodnike)
- **Dobio si premalo stavki** → traži od AI “generiši 10–50 varijanti”
