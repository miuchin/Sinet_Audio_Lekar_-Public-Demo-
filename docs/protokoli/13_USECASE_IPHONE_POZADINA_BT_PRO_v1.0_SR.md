# 🍏 Use‑case: iPhone — pozadina + Bluetooth (PRO režim)

> Cilj: da na iPhone‑u dobiješ *najbolju moguću šansu* da zvuk nastavi u pozadini / na lock‑screen‑u, posebno preko Bluetooth slušalica.

---

## 0) 1‑min decision tree (izaberi put)

- Želiš **pozadinu / lock‑screen** → uključi **🍏 iPhone PRO (Render u WAV / RAM)**.
- Ako ti treba **brz test** → pusti jednu kraću terapiju (10–40 min) i proveri lock‑screen.
- Ako ti treba **duže od 60–100 min** → očekuj da iOS može prekinuti; radi u sesijama (npr. 40 min + pauza).

---

## 1) Koraci (tačno redosled)

1. Otvori SINET u **Safari** (preporuka: prvo test u tabu, tek posle PWA).
2. Tapni **🔊 AKTIVIRAJ** (prvi put) da Safari “otključa” audio.
3. Idi na **Podešavanja**:
   - uključi **🍏 iPhone PRO (Render u WAV / RAM)** ✅
   - (opciono) ne uključuj “eksperimentalno” ako ne znaš šta radi
4. Spoji Bluetooth slušalice i proveri:
   - iPhone nije na 🔇 silent switch
   - Volume je pojačan
   - Low Power Mode je isključen (test)
5. Izaberi terapiju i tapni **▶**.
6. Sačekaj ~10 sekundi da se stabilizuje.
7. Zaključaj ekran (power), pa proveri da li se zvuk čuje i dalje.

---

## 2) Kako da znaš da je PRO stvarno aktivan

- Ako je PRO uključen, SINET renderuje u WAV i pušta preko **<audio>** elementa (to je stabilnije od WebAudio u pozadini).
- Ako vidiš poruku da je “Safari pauzirao zvuk u pozadini”, vrlo često znači da nisi u PRO režimu ili je iOS ipak suspendovao sesiju.

---

## 3) Najčešći problemi (i rešenje)

- **Zvuči u app‑u, ali stane čim zaključaš ekran**  
  → Uveri se da je **🍏 PRO uključen**, pa ponovi test na kraćoj terapiji (10–40 min).

- **Ne čuje se na Bluetooth, a na zvučniku se čuje**  
  → Uključi **🍏 PRO** (poboljšava routing) + proveri da BT nije na “Call” profilu.

- **Terapija je predugačka (npr. 100 min)**  
  → iOS može biti agresivan. Preporuka: koristi kraće sesije ili smanji trajanje po frekvenciji.

---

## 4) Napomena (realnost iOS‑a)

iOS / Safari / PWA imaju sistemska ograničenja. SINET radi “best‑effort” (web‑only).  
Za 100% background bez prekida — potreban je **native wrapper** (Capacitor/AVAudioSession).
