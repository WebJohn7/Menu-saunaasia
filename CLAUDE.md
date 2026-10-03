# CLAUDE.md — Digital menu

QR-scannable restaurant menu for a Czech Vietnamese/Thai/Japanese restaurant.
Display only: no ordering, no cart, no payments, no accounts.

## What this is

Zero-dependency static site. Plain HTML + CSS + one vanilla JS file, no build step,
no npm install, no framework. `node` is used only for the local preview server and the
test file — never at runtime.

Deploy target is GitHub Pages. Everything must keep working as plain static files.

## The one rule that matters

**`data/menu.json` is the single source of truth for menu content.** Dish text, prices,
allergens, category structure and brand details all live there. Never hardcode a dish,
a price or a category name into `app.js`, `index.html` or the CSS.

`assets/css/tokens.css` is the single source of truth for colour, type, spacing and
effects. It is copied verbatim from `menu-asia-design-system/project/tokens/`. To
re-skin the menu, replace that file — do not scatter literal colours into `styles.css`.

## Menu structure (fixed by the client, do not reorganise)

| Category | Dish numbers |
| --- | --- |
| Předkrmy | 1, 2, 3, 4, 5, 5A |
| Polévky | 6, 7, 8, 9, 13, 14, 15 |
| Nudle | 10, 11, 16, 17, 18, 19, 20, 21, 32 |
| Rýžová jídla | 12, 22, 23, 25, 31 |
| Vegetarián | 26, 28 |
| Křupavá | 29, 33, 34 |

**Dish numbers are printed on the paper menu and staff and regulars order by them.
Never renumber.** Pho (13, 14, 15) belongs under Polévky and #32 under Nudle — these
are deliberate client choices that differ from the design system's own grouping.

**Dishes 24, 27, 30 and 35 are permanently unavailable** and must not reappear, even
though the design system template and `assets/dishes/` still contain 30 and 35.

## Data model

Flat-price dishes use `price`. Multi-price dishes use `variants[]` and never both —
20 of the 32 dishes have variants. `variantType` is `protein`, `quantity` or `side`.

A variant marked `noMeat: true` marks a meat-free option. It is deliberately **not**
called "Vegetariánské": several of those dishes contain fish or oyster sauce in the
base, so tofu does not make them vegetarian. Only 26 and 28 carry `vegetarian: true`.
The flag no longer drives any UI — see "No search, no filters" below — but it stays in
the data for the planned chatbot.

## Design system

`menu-asia-design-system/` is the handoff bundle from Claude Design. The implemented
design is `templates/digital-menu/DigitalMenu.dc.html`. Read it before changing layout.

Two deliberate deviations from that template, both agreed with the client:

1. **Six categories, not the template's five** (it had "Nudle a kari" / "Rýže" /
   "Speciality"). Client's grouping wins.
2. **Mobile-first.** The template is desktop-only — 1280×900 preview, 40px page padding,
   64px titles, zero media queries. Every real visit is a phone at a table, so
   `styles.css` starts small and steps up at 600px / 1000px / 1280px.

Also: the design readme says to transcribe the printed menu **verbatim, typos included**.
The client overrode this — Czech typos are normalized. See `plan.txt` for the list.

## Commands

```bash
node tools/serve.js . 8123    # preview at http://localhost:8123 (fetch needs http://)
node tests/menu.test.js       # 32 checks: matching helpers, prices, categories, photos
```

Run the tests after any change to `data/menu.json` or the pure helpers in `app.js`.

## One category per page

The menu is a hash-routed single document, not one long scroll:

| Route | Screen |
| --- | --- |
| `#/` (or no hash) | Category index — six cards + the allergen card |
| `#/<category id>` | That category's dishes, nothing else |
| `#/alergeny` | The allergen legend |

All six categories are rendered once at boot; `showRoute` only toggles `hidden`.
That keeps navigation instant and means hidden sections never fetch their photos,
so a phone only ever pays for the one category it is looking at.

**Category `id` is now a URL.** Renaming one breaks any QR code or link pointing at
it — change `name`, never `id`.

Hash handling, in `readRoute`:

- `#/<known id>` → that page. `#/<unknown>` → the index.
- `#<known id>` → that page too. This is the plain-anchor form the page used before
  it was routed; keeping it alive means a tab left open on the old version, or an
  older link, still lands somewhere sensible.
- Anything else (`#obsah`, from the skip link) is an in-page anchor, not a route, so
  it leaves the current page alone — **except on the initial render**, where it falls
  back to the index. Nothing is hidden yet at that point, so "leave the view alone"
  would show the index and all six categories stacked at once. `showRoute`'s `first`
  argument is what separates the two cases; don't drop it.

The `.bar` (back link + category chips) is chrome for a category page and is hidden
on the index. Print CSS overrides the router and shows every category, because paper
has no tabs.

## No search, no filters

The client asked for the search box and the "Bez masa" / "Pikantní" filter buttons to be
removed (2026-09-17). Guests browse the six category chips and scroll; the sticky bar is
navigation only.

The pure matching helpers stay in `app.js` and stay tested — nothing in the page calls
them. They encode menu rules the planned chatbot needs (diacritic folding, "a tofu
variant is meat-free but not vegetarian"), so deleting them would lose real decisions.
The unused `ui` keys in `menu.json` (`searchPlaceholder`, `filters`, `emptyTitle`,
`emptyBody`, `results*`) are left in place for the same reason.

## Conventions

- `app.js` keeps pure helpers (`fold`, `matches`, `hasNoMeatOption`, `plural`,
  `searchIndex`) at the top with no DOM access — that is what the test file loads and
  exercises. Keep new logic on that side of the line.
- Czech UI strings live in `menu.json` under `ui`, not in the JS.
- `fold` folds diacritics both ways, so "polevka" matches "polévka". Preserve that.
- Prices render as lowercase `kč` with a space, per the design system.
- Dish photos are 800px square WebP, named by slug in `assets/img/dishes/`. A missing
  file removes the photo tile rather than showing a broken image.

## Dish photography

The photos are **not** the design system's transparent cut-outs any more. Each dish
was cropped out of the paper-menu scans (`menu/crops/`) and re-rendered image-to-image
through Higgsfield onto one shared setting — a warm light-oak table, shot from
straight above. See `plan.txt` (2026-09-17) for the pipeline, the prompt and why each
clause of it is there.

Consequences for anyone changing the photos:

- They are **opaque scene photographs**, so `.card__media img` uses `object-fit: cover`
  and carries no `drop-shadow` filter — the plate shadow is inside the photograph.
  Going back to cut-outs means reverting both.
- `menu/masters/` holds 1400px q88 copies. Re-rendering a dish costs Higgsfield
  credits, so re-encode from a master rather than regenerating.
- The wood was colour-matched across all 32 afterwards (sample the outer 8% ring,
  median per channel, nudge each image toward the set median). A single new dish
  dropped in without that pass will not sit on the same wood as its neighbours.

## Known issues

- **Dish photos total 4.1 MB** (32 × 800px WebP, ~130 KB each) — down from 6.4 MB of
  PNG, and now real photographs rather than upscaled scraps. Detailed wood backgrounds
  cost bits, so the saving is smaller than a cut-out set would give. One category is
  fetched at a time and every `<img>` is lazy, so a visit pays for ~5 photos, not 32.
- **Two photos are on visibly different wood** — `pho` and `crunchy-shrimps` were
  generated before the prompt pinned the grain direction, so their oak runs vertically
  where the other 30 run horizontally. Colour-matching evened the tone but cannot
  rotate grain. Re-rendering the pair costs 6 Higgsfield credits.
- **`tools/qr.html` has never been run in a browser** — it loads qrcodejs from cdnjs.
  Verify by scanning with a real phone before printing table cards.
- **`restaurant.tagline` is still design-system placeholder text.** `name`, `address`
  and `phone` are real as of 2026-09-17. `hours` was removed from the header at the
  client's request (2026-10-03); re-adding the key brings it back with no code change. Note `name` renders in two places —
  the header logo and the left half of the footer — so one edit moves both.
- **`index.html` has a hardcoded `<title>Menu</title>`** that no data drives. It is the
  one piece of brand text outside `menu.json`.
- **The `tel:` href drops spaces from `phone`**, so it is currently `tel:608099881` —
  fine from a Czech handset, not dialable from abroad. Storing the number as
  "+420 608 099 881" fixes it without a code change.
- Six dishes had no description on the scans (5A, 29, 31, 32, 33, 34); the descriptions
  there were written to fit and should be confirmed by the restaurant.
