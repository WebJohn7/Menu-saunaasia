# Menu Asia — design system

A design system derived from one source: seven scanned pages of a Czech Asian restaurant's printed menu
(`uploads/menu1.jpg` … `uploads/menu7.jpg`, copied into `assets/menu-pages/`). The restaurant serves Vietnamese,
Thai, Japanese and Czech-Asian dishes (pho, bun, spring rolls, pad thai, udon, kung pao, smažený sýr) with prices
in Czech crowns and EU allergen numbering.

**Sources given:** the seven menu scans only. No codebase, no Figma file, no website, no brand book, no logo file,
no font binaries. Everything below was read off the scans; nothing was imported from a live product.

**Brand name:** the scans never show one. "Menu Asia" is used as a placeholder wordmark throughout — replace it
everywhere (`ui_kits/*`, `thumbnail.html`, `components/navigation/NavBar.jsx`) once the real name is known.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import`s everything below. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `surfaces.css` |
| `assets/textures/` | `brick-tile.png` (dark page ground), `marble-tile.png` (light page ground) |
| `assets/ornaments/` | `gold-leaf-left.png`, `gold-leaf-right.png` — corner leaf ornaments |
| `assets/dishes/` | 9 cut-out dish photographs lifted from the scans |
| `assets/menu-pages/` | The seven original scans |
| `guidelines/*.card.html` | 20 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `components/core/` | Button, IconButton, Card, Badge, Tag, Divider |
| `components/menu/` | SectionTitle, DishEntry, PriceTag, VariantList, AllergenRefs |
| `components/forms/` | Input, Select, Checkbox, Radio, Switch |
| `components/navigation/` | NavBar, Tabs |
| `components/feedback/` | Dialog, Toast |
| `templates/digital-menu/` | **Digital menu** — browse-only customer menu, all 34 dishes, category rail, allergen legend |
| `ui_kits/menu/` | Digital menu: course browsing, dish dialog, cart, allergen sheet |
| `ui_kits/website/` | Restaurant website: home, popular dishes, reservation |
| `SKILL.md` | Agent-Skills wrapper for use outside this project |

**Intentional additions.** The source is a printed menu, so it defines no UI components at all. The menu group
(`DishEntry`, `PriceTag`, `VariantList`, `AllergenRefs`, `SectionTitle`) is a direct translation of the printed
objects. The core/forms/navigation/feedback groups are a standard minimum set added so the brand can be used for
digital work; they are styled strictly from the print foundations (square corners, condensed uppercase, yellow/red
accents) and invent no new colours or type.

---

## Content fundamentals

**Language.** Czech, with dish names often in the original Vietnamese/Thai/English ("Pho Tai Lan", "Bun Nam Bo",
"Crunchy Shrimps", "Go Veggie"). Mixed-language names are normal and should not be translated.

**Structure of an entry.** Number, name, allergen superscript, price, then the ingredient list, then per-protein
variants:

> **13. PHO** <sup>4,6</sup>
> Vývar, rýžové nudle, jarni cibulka, kodiandr, červená cibule, chilli, sójové klíčky, citron
> - s kuřecím masem 125 kč
> - s hovézim masem 150 kč
> - s tofu 115 kč

**Casing.** Dish names are set in full uppercase. Descriptions are sentence case. Variant labels stay lowercase
and are prefixed with a hyphen ("- s krevetami"). Section titles are either the big rounded display word
("Předkrmy") or uppercase condensed ("SEZNAM ALERGENŮ").

**Voice.** There is none in the printed source — the menu is pure enumeration: ingredients separated by commas,
no adjectives, no marketing ("Kuře, cibule, mrkev, houby, bambusové výhonky, vejce, paprika, pepř"). For digital
surfaces, keep that register: short, factual, no exclamation marks, no "we", no storytelling. Second person only
where the interface asks something of the guest ("Zadejte celé číslo").

**Numbers.** Prices are always "<number> kč", lowercase kč, space before it. Quantities use "ks" ("2KS", "6KS").
Allergen numbers are comma separated with no spaces, superscript, ascending.

**Punctuation quirks worth keeping.** The source contains real typos and inconsistencies (`kodiandr`, `hovézim`,
`jarnl cibulka`, missing item 24 and 27). Transcribe dish text verbatim where you reproduce the menu; do not
silently correct it unless the client asks.

**Emoji.** Not used. The only pictorial marks in the source are a small chilli graphic next to spicy dishes and a
coconut graphic next to the coconut soup. In digital work, use a `Badge tone="spicy"` label instead of an emoji.

---

## Visual foundations

**Two grounds, alternating.** The menu runs on exactly two backgrounds and alternates them page by page:
1. **Brick** — near-black photographic brick wall (`--ink-900` + `assets/textures/brick-tile.png`), white text,
   **yellow** prices, gold leaf ornaments.
2. **Marble** — off-white marble/paper (`--paper-100` + `assets/textures/marble-tile.png`) with soft watercolour
   botanical leaves at the corners, near-black text, **red** prices.
Never mix the two on one page; never introduce a third ground. Max two background colours per artifact.

**Colour.** Signal yellow `#FFE500` and chilli red `#E11B22` are price colours first and accent colours second —
they are never used as large fills in print. Gold `#C9A227` appears only in the leaf ornaments and plate rims.
Sage `#9CAE8C` and ceramic blue `#7E9AA8` are colours *of the photography* (leaf art, plates) rather than UI
colours; use them for illustration, not for text.

**Type.** Three faces: a rounded geometric display for page titles, a bold condensed grotesque for dish names, a
bold semi-condensed for body and prices. Dish names are uppercase with ~0.02em tracking; body copy is set bold
(never light) at ~17px/1.38 in short measures of about 34 characters. Prices are set in the body face, bold, and
are two to four steps larger than the surrounding copy when a dish has a single price.

**Layout.** Two- and three-column grids with a ragged, magazine-like rhythm: text blocks and photographs
alternate sides down the column, and photographs frequently bleed past the column edge or overlap the gutter.
Nothing is centred. Page margins are generous (~56px at web scale); dish blocks sit ~56px apart.

**Photography.** Top-down studio shots of plated food, cut out from their background (no photo frames, no boxes,
no rounded crops) and dropped onto the page with a soft shadow — `--shadow-plate` on brick, `--shadow-plate-light`
on marble. Colour is warm and saturated; plates are grey-blue ceramic with a gold rim or plain white. No grain, no
duotone, no black and white, no gradient overlays on photos.

**Backgrounds and ornament.** Full-bleed repeating photographic textures, not gradients. Ornament is limited to
the gold leaf art (dark pages, anchored bottom-left and top-right, bleeding off the edge) and watercolour green
leaves (light pages, corners). Never a gradient background, never a pattern behind body text at full contrast.

**Corners, borders, shadows.** The print system is square: `--radius-none` everywhere except circles (plates,
allergen numerals) and digital-only toggles. Borders are hairlines (`1px`) for structure and a heavy `3px` rule
for section titles and active tabs. There is no card-shadow language in print; digital cards get at most
`--shadow-card` (a 2px ink wash). Never a rounded card with a coloured left border.

**Transparency and blur.** Used once only: the modal scrim (`--surface-overlay`, 82% ink + 6px blur). Text is
never set at partial opacity on photography — either it sits on the flat ground or the photo is cut out around it.

**Motion.** The brand is print-native, so motion is minimal and mechanical: 120–200ms, `cubic-bezier(.2,.7,.3,1)`,
opacity and colour only. No bounce, no scale-up, no parallax, no entrance animations on menu content.

**States.** Hover lightens a filled control (yellow 500 → 400) or washes a ghost control at 10–14% alpha. Press
darkens (yellow 600) and drops the element 1px — never scales it. Focus is a 3px yellow ring outside a 2px ink
border. Disabled is 40% opacity with no colour change.

---

## Iconography

The printed menu has **no icon system** — no icon font, no SVG set, no pictograms. The only graphic marks are:
a small photographic chilli next to spicy dishes, a photographic coconut next to the coconut soup, and the
numbered circles plus stock ingredient photographs on the allergen sheet (page 7).

Consequences for digital work:

- **Numbers do the work icons usually do.** Allergens are circled numerals (`Badge tone="allergen" round`), dishes
  are identified by their menu number, not by a category glyph.
- **Substitution, flagged:** for interface affordances that the print menu never needed (close, cart, chevrons,
  quantity steppers), use **Lucide** from CDN — `https://unpkg.com/lucide@latest/dist/umd/lucide.js` — at stroke
  width 2 and 20px, in `currentColor`. Lucide's flat 2px line style is the closest match to the menu's plain,
  unornamented feel. This is a substitution, not a brand asset: if the restaurant has real icons, replace it.
- Never draw food illustrations as SVG. Food is always photography.
- Unicode is used sparingly and only as plain text (×, ✓, ·); emoji never.

---

## Substitutions to confirm

1. **Fonts.** No binaries were supplied. The closest Google Fonts matches are loaded from CDN:
   Fredoka (display), Oswald (dish names), Barlow Semi Condensed (body/prices). If the original files exist
   (the print originals look like a rounded geometric plus a condensed grotesque in the Oswald/Antonio family),
   send them and `tokens/fonts.css` will be swapped to real `@font-face` rules.
2. **Icons.** Lucide, as above.
3. **Logo.** None exists in the sources, so none was drawn. The wordmark is plain type in the display face.
4. **Photography.** All dish images are crops out of the scans; they carry print halftone and page background.
   Replace with originals when available.
