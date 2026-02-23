# SINET — PROTOKOL: DS-Generator (v1.0, SR)

**Uloga DS-Generatora:** da napravi strukturisan vodič (tekstualno) i da po potrebi kreira protokol koji SINET može odmah da pusti.

---

## 1) Step-by-step (osnovni tok)

1. Otvori **DS-Generator**
2. Popuni polja (redom) — vidi “Polje-po-polje”
3. Klikni **Generiši**
4. Pregledaj rezultat
5. Izaberi izvoz:
   - TXT / MD / HTML (Template v2)
6. Ako želiš da rezultat postane terapija:
   - klikni bridge dugme (kreira `SINET_DS_BRIDGE`) i ubaci u SINET

---

## 2) Polje-po-polje (šta znači, kako popuniti)

> Napomena: nazivi polja mogu blago varirati po verziji, ali redosled logike je isti.

### A) Glavna tema / cilj
- **Šta unosiš:** “šta želiš da dobiješ” (npr. “plan oporavka posle stresa”)
- **Kako:** 1 rečenica, bez romana

### B) Kontekst / stanje
- **Šta unosiš:** ključne informacije (npr. “nesanica 3 dana, nervoza”) 
- **Kako:** kratko + konkretno

### C) Ograničenja
- alergije, vreme, oprema, dnevni raspored (ako je relevantno)

### D) Izbor izlaza
- vodič samo tekst / vodič + protokol (ako opcija postoji)

---

## 3) Izvoz (Template v2)

Kada klikneš **HTML**, dobijaš:
- topbar (Nazad / TXT / MD / HTML / Štampa / E-mail)
- **📋 Kopiraj kompletan plan** (HTML + plain tekst)
- ko-autorstvo

---

## 4) Istorija (lokalno)

DS-Generator čuva istoriju lokalno u browseru.
- koristi istoriju da vratiš stari vodič
- napravi Backup da ne izgubiš istoriju

---

## 5) Tipični protokoli

### “Hoću vodič za štampu”
1) Generiši → 2) HTML export → 3) Štampa

### “Hoću da uđe u SINET kao terapija”
1) Generiši → 2) Bridge → 3) Ubaci u protokol/listu → 4) ▶

---

## 6) Troubleshooting

- **Ne pamti istoriju** → browser briše storage; koristi PWA i isključi auto-clear
- **Bridge ne radi** → osveži (Ctrl+F5) + proveri da si na istoj verziji (SW)
