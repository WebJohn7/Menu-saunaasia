# Digitální menu

Jídelní lístek, který hosté otevřou naskenováním QR kódu na stole. Jen zobrazení —
žádné objednávání, žádné platby.

**32 jídel · 6 kategorií · česky · ceny v Kč**

---

## Jak si menu prohlédnout na počítači

Menu si načítá data ze souboru, takže ho nestačí otevřít dvojklikem — musí běžet na
`http://`. Otevřete si složku projektu v terminálu a spusťte:

```
node tools/serve.js . 8123
```

Pak v prohlížeči otevřete `http://localhost:8123`. Zastavíte to klávesou `Ctrl+C`.

---

## Jak změnit menu

**Všechno je v jediném souboru: `data/menu.json`.** Nic jiného upravovat nemusíte.
Po uložení stačí stránku v prohlížeči načíst znovu.

### Změnit cenu

Najděte jídlo podle čísla a přepište číslo u `price` nebo u varianty:

```json
{ "label": "s kuřecím masem", "price": 125 }
```

### Přidat jídlo

Zkopírujte existující jídlo a upravte ho. Jídlo s jednou cenou:

```json
{
  "number": "36",
  "name": "Název jídla",
  "description": "Suroviny oddělené čárkami",
  "image": "nazev-fotky",
  "allergens": [1, 6],
  "price": 150
}
```

Jídlo s více cenami (podle masa, množství nebo přílohy):

```json
{
  "number": "37",
  "name": "Název jídla",
  "description": "Suroviny oddělené čárkami",
  "image": "nazev-fotky",
  "allergens": [4],
  "variantType": "protein",
  "variants": [
    { "label": "s kuřecím masem", "price": 130 },
    { "label": "s tofu", "price": 120, "noMeat": true }
  ]
}
```

Volitelné značky:

| Klíč | Co dělá |
| --- | --- |
| `"spicy": true` | červený štítek **Pikantní**, jídlo se objeví ve filtru Pikantní |
| `"vegetarian": true` | zelený štítek **Vege** (jen pro jídla úplně bez masa) |
| `"noMeat": true` u varianty | varianta se počítá do filtru **Bez masa** |
| `"allergens": []` | prázdné = u jídla se nezobrazí žádná čísla alergenů |

### Vyměnit fotku

Vložte nový soubor do `assets/img/dishes/` a do jídla napište jeho název **bez
přípony `.png`**. Fotky jsou vyříznuté z pozadí (průhledné PNG), čtvercové kolem
400 px. Když fotka chybí, karta se zobrazí bez ní — nikde se neobjeví rozbitý obrázek.

### Odebrat jídlo

Smažte celý blok `{ ... }` i s čárkou za ním.

### Přejmenovat kategorii

V `data/menu.json` u kategorie změňte `name`. **`id` neměňte** — je to adresa
stránky kategorie (`#/nudle`) a odkazuje na něj horní lišta.

---

## Než pustíte menu k hostům

V `data/menu.json` nahoře v bloku `restaurant` jsou **vymyšlené údaje** z design
systému. Opravte je:

```json
"name":    "Menu Asia",
"tagline": "Vietnamská · thajská · japonská kuchyně",
"hours":   "Otevřeno denně 10:30–21:30",
"address": "Vodičkova 12, Praha 1",
"phone":   "+420 777 123 456"
```

---

## QR kód na stůl

Otevřete `tools/qr.html` v prohlížeči (přes `node tools/serve.js` jako výše, na adrese
`http://localhost:8123/tools/qr.html`). Vložte adresu, kde menu běží, a vygenerujte
kartičku — jde vytisknout nebo stáhnout jako PNG.

**QR kód vždy otestujte skutečným telefonem, než necháte kartičky vytisknout.**

---

## Kontrola po úpravách

```
node tests/menu.test.js
```

Projde 32 testů: porovnávací funkce, ceny, zařazení jídel do kategorií, existence všech
fotek. Když něco rozbijete v `menu.json`, tohle to najde.

---

## Struktura

```
index.html              stránka (kostra, obsah doplní JavaScript)
data/menu.json          ← JEDINÝ soubor, který upravujete
assets/css/tokens.css   barvy, písma, rozestupy z design systému
assets/css/styles.css   rozvržení stránky
assets/js/app.js        vykreslení a přepínání stránek kategorií
assets/img/dishes/      32 fotek jídel
tools/qr.html           generátor QR kódu
tools/serve.js          lokální server pro náhled
tests/menu.test.js      kontrolní testy
menu/                   původní naskenované stránky lístku
menu-asia-design-system/ design systém (zdroj barev, písem a fotek)
plan.txt                dohodnutý plán projektu
```

---

## Co menu umí

- **Úvodní rozcestník** — host po načtení vidí šest kategorií s krátkým popisem
  a počtem jídel, klepnutím otevře jednu z nich
- **Jedna kategorie = jedna stránka** — host scrolluje jen jejím obsahem, ne celým
  lístkem; nahoře zůstává lišta s ostatními kategoriemi a tlačítko Zpět
- **Tlačítko Zpět v prohlížeči funguje** — každá kategorie má vlastní adresu
  (`…/#/nudle`), dá se poslat i uložit
- **Všechny ceny rovnou na kartě** — host nemusí nikam klikat
- **Seznam alergenů** podle směrnice 1169/2011 EU
- Funguje od šířky 320 px nahoru, fotky se načítají postupně

## Co menu neumí (záměrně)

Objednávání, košík, platby, rezervace, přihlašování. Chatbot se plánuje později —
`data/menu.json` je připravený tak, aby mu mohl sloužit jako zdroj informací.
