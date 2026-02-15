# ✅ FAZA A — FINALNA STANDARDIZACIJA MODELA KATALOGA (SINET)

Cilj ove faze je da dobijemo **jedan jedini, nepromenljiv “ugovor” (schema contract)** između:

* podataka (katalog),
* UI-ja,
* audio-engine-a,
* i kasnije: pravnog teksta / dokumentacije.

Ako je model ispravan → sve ostalo je implementacija.
Ako model nije ispravan → **ništa dalje nema smisla**.

---

## 🧱 1️⃣ OSNOVNI PRINCIPI MODELA (VAŽE ZAUVEK)

Ovo su **pravila igre**, bez izuzetka:

1. **Katalog = izvor istine**

   * nema privremenih struktura
   * nema “derived” fajlova
2. **Svako polje ima:

   * jasno značenje
   * jasno vlasništvo (ko ga menja)
   * jasno ponašanje (read / write)**
3. **Nema implicitnih pretpostavki**

   * sve što UI ili engine treba → mora biti eksplicitno u modelu
4. **Model mora biti proverljiv**

   * ljudski (čitanjem)
   * tehnički (validacijom)

---

## 🧩 2️⃣ FINALNI MODEL OBJEKTA — SINET CATALOG ITEM

Ispod je **KANONSKA VERZIJA** objekta.
Ovo je **osnova za sve naredne faze**.

---

### 🔑 IDENTITET & TAKSONOMIJA (STABILNO)

```js
id: "varenje-zatvor"
```

* **Tip:** string (slug)
* **Editable:** ❌ NE
* **Značenje:** stabilni, trajni identifikator
* **Napomena:**

  * koristi se u:

    * playlistama
    * favoritima
    * backup / restore
  * **nikad se ne menja nakon kreiranja**

---

```js
oblast: "Varenje"
```

* **Tip:** string
* **Editable:** ✅ DA
* **Značenje:** glavna kategorija (TREE level 1)
* **Primeri:** Varenje, Kardiovaskularni, Koža, Nervni sistem

---

```js
podOblast: "Creva"
```

* **Tip:** string | null
* **Editable:** ✅ DA
* **Značenje:** podkategorija (TREE level 2)
* **Opcionalno**, ali preporučeno radi filtriranja

---

## 👤 KORISNIČKI PRIKAZ (SEMANTIČKI)

```js
simptom: "Zatvor"
```

* **Tip:** string
* **Editable:** ✅ DA
* **Značenje:** ime koje korisnik vidi
* **Ne sme** sadržati tehničke termine

---

```js
opis: "Spor rad creva, neredovna stolica..."
```

* **Tip:** string
* **Editable:** ✅ DA
* **Značenje:** informativni tekst (INFO panel)
* **Napomena:**

  * neutralan ton
  * bez medicinskih tvrdnji
  * može se kasnije proširivati (psihosomatika, holistika)

---

## 🎧 AUDIO & FREKVENCIJE (JEZGRO SISTEMA)

```js
frekvencije: [
  {
    value: 95,
    svrha: "Podrška peristaltici",
    izvor: "Rife",
    enabled: true
  },
  {
    value: 141,
    svrha: "Relaksacija nervnog sistema",
    izvor: "Biofield",
    enabled: true
  }
]
```

⬅️ **OVO JE NAJVAŽNIJA PROMENA**
⬅️ Napuštamo “golu listu brojeva”

### Za svaku frekvenciju:

| Polje     | Značenje         | Editable |
| --------- | ---------------- | -------- |
| `value`   | Hz vrednost      | ❌        |
| `svrha`   | Zašto se koristi | ✅        |
| `izvor`   | Odakle potiče    | ✅        |
| `enabled` | da li se pušta   | ✅        |

📌 Ovo omogućava:

* proverljivost
* transparentnost
* pravnu zaštitu
* fleksibilno editovanje bez brisanja

---

```js
tipFrekvencija: "nisko"
```

* **Enum:** `nisko | srednje | visoko | mešano`
* **Editable:** ❌ (auto-calc)
* **Značenje:** izvedeno iz vrednosti frekvencija

---

```js
subAudio: "binaural"
```

* **Enum:** `mono | binaural | pulsni | mix`
* **Editable:** ✅ DA
* **Značenje:** način generisanja zvuka

---

## ⏱️ TRAJANJE (KONTROLA, NE TVRDNJA)

```js
trajanjePoFrekvencijiMin: 5
```

* **Editable:** ✅ DA (slider)
* **Default:** 5
* **Značenje:** koliko dugo se pušta JEDNA frekvencija

---

```js
ukupnoTrajanjeMin: 25
```

* **Editable:** ❌ NE
* **Auto-calc:** `enabled frekvencije × trajanje`
* **Read-only**

---

## ⭐ MODOVI & PERSONALIZACIJA

```js
seniorQuick: true
```

* **Editable:** ✅ DA
* **Značenje:** prikaz u Senior Quick režimu

---

```js
quickGroup: "Varenje"
```

* **Editable:** ✅ DA
* **Značenje:** grupisanje kartica (Senior UI)

---

```js
favoritesDefault: false
```

* **Editable:** ✅ DA
* **Značenje:** da li je unapred označeno kao favorit

---

## ⚠️ BEZBEDNOST & TRANSPARENTNOST

```js
kontraindikacije: "—"
```

* **Editable:** ✅ DA
* **Značenje:** informativno, ne pravno

---

```js
bezbednost: "Ne zamenjuje medicinsku terapiju."
```

* **Editable:** ❌ (kontrolisano)
* **Značenje:** standardni safety tekst
* **Razlog:** pravna konzistentnost

---

```js
izvori: ["Rife", "Clark", "Biofield"]
```

* **Editable:** ✅ DA
* **Značenje:** referentni okvir (ne dokaz)
* **Ključno za transparentnost**

---

```js
tags: ["zatvor", "creva", "seniori"]
```

* **Editable:** ✅ DA
* **Značenje:** pretraga, filtriranje, AI kasnije

---

## 🧠 3️⃣ EDITABLE vs READ-ONLY — SAŽETAK

### ❌ READ-ONLY (nikad u UI):

* `id`
* `tipFrekvencija`
* `ukupnoTrajanjeMin`

### ✅ EDITABLE (kontrolisano):

* sve ostalo, **sa validacijom**

---

## 🛡️ 4️⃣ ISTINITOST & PROVERLJIVOST (VAŽNO)

Ovaj model:

* **NE tvrdi lečenje**
* **NE obećava rezultate**
* **NE skriva poreklo podataka**
* jasno razlikuje:

  * *“ovo se pušta”*
  * *“ovo je razlog zašto”*
  * *“ovo je izvor”*

➡️ To je **maksimalno pošten i održiv pristup**.

---
