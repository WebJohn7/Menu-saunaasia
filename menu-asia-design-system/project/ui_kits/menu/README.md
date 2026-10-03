# UI kit — digital menu

A click-through recreation of the printed menu as a web app, using only the design-system components.

**Screens**
- `MenuScreen.jsx` — course tabs, display title, `DishEntry` list with alternating photo sides, gold leaf ornaments on the brick courses.
- `DishDialog.jsx` — dish detail modal with protein `Radio`, allergen badges, add-to-cart.
- `CartScreen.jsx` — order summary + contact form (`Input`, `Select`, `Checkbox`, `Switch`).
- `AllergenScreen.jsx` — the statutory allergen sheet (page 7 of the printed menu).

**Ground rule:** Předkrmy / Rýže / Speciality are brick (dark, yellow prices); Polévky / Nudle are marble (light, red prices) — exactly as the printed pages alternate.

Data lives in `data.js` (`window.MENU_DATA`), transcribed from the scans in `assets/menu-pages/`.
