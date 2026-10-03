/* ============================================================
   Menu Asia — digital menu
   Renders data/menu.json into the page as a small hash-routed app:
   "#/" is the category index, "#/nudle" is one category, "#/alergeny"
   is the allergen legend. One document, one QR code, no build step —
   every category is rendered once at boot and the router just decides
   which one is visible.

   Structure: pure helpers first (no DOM, easy to reason about and
   test), then rendering, then wiring.

   The search box and the "Bez masa" / "Pikantní" filter buttons were
   removed from the UI at the client's request. The matching helpers
   below (fold, hasNoMeatOption, searchIndex, matches, plural) are kept
   and still covered by tests/menu.test.js — they encode menu rules
   (e.g. a tofu variant is meat-free, not vegetarian) that the planned
   menu chatbot needs.
   ============================================================ */

'use strict';

/* ---------- pure helpers ---------- */

/** Strip diacritics so "polevka" finds "polévka" and "ryze" finds "rýže". */
function fold(str) {
  return String(str).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

/** Every dish in the menu, flattened, each tagged with its category id. */
function allDishes(menu) {
  return menu.categories.flatMap(function (cat) {
    return cat.items.map(function (item) {
      return Object.assign({ categoryId: cat.id }, item);
    });
  });
}

/** A dish counts as meat-free if it is fully vegetarian or has a meat-free variant. */
function hasNoMeatOption(dish) {
  if (dish.vegetarian) return true;
  return (dish.variants || []).some(function (v) { return v.noMeat; });
}

/** The haystack a search query is matched against. */
function searchIndex(dish) {
  return fold([
    dish.number,
    dish.name,
    dish.description || '',
    (dish.variants || []).map(function (v) { return v.label; }).join(' ')
  ].join(' '));
}

/**
 * Does this dish survive the current query + filters?
 * A numeric query matches the dish number as a prefix ("1" finds 1, 10..19)
 * as well as anywhere in the text.
 */
function matches(dish, query, filters) {
  if (filters.noMeat && !hasNoMeatOption(dish)) return false;
  if (filters.spicy && !dish.spicy) return false;
  if (!query) return true;

  var q = fold(query);
  if (fold(dish.number).indexOf(q) === 0) return true;
  return dish.index.indexOf(q) !== -1;
}

/** Czech plural for the result counter: 1 jídlo / 2-4 jídla / 5+ jídel. */
function plural(n, ui) {
  if (n === 1) return ui.resultsOne;
  if (n >= 2 && n <= 4) return ui.resultsFew;
  return ui.resultsMany;
}

/* ---------- small DOM helpers ---------- */

function el(tag, className, text) {
  var node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function icon(paths, size) {
  var NS = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', size || 20);
  svg.setAttribute('height', size || 20);
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  paths.forEach(function (d) {
    var p = document.createElementNS(NS, 'path');
    p.setAttribute('d', d);
    svg.appendChild(p);
  });
  return svg;
}

var ICONS = {
  up: ['M12 19V5', 'M5 12l7-7 7 7'],
  right: ['M9 6l6 6-6 6'],
  left: ['M15 6l-6 6 6 6']
};

/* ---------- rendering ---------- */

function renderBrand(menu) {
  var r = menu.restaurant;

  document.querySelector('.site-header__name').textContent = r.name;
  document.querySelector('.site-header__tagline').textContent = r.tagline || '';

  var hours = document.querySelector('.site-header__hours');
  if (r.hours) hours.textContent = r.hours; else hours.remove();

  var footer = document.querySelector('.site-footer');
  footer.textContent = '';
  var where = [r.name, r.address].filter(Boolean).join(' · ');
  if (where) footer.appendChild(el('span', null, where));
  if (r.phone) {
    var tel = el('a', null, r.phone);
    tel.href = 'tel:' + r.phone.replace(/\s/g, '');
    footer.appendChild(tel);
  }
  if (menu.ui.vatNote) footer.appendChild(el('span', 'site-footer__vat', menu.ui.vatNote));
}

function renderNav(menu) {
  var back = document.querySelector('.bar__back');
  back.appendChild(icon(ICONS.left, 18));
  back.appendChild(el('span', null, menu.ui.backLabel));

  var nav = document.querySelector('.bar__nav');
  nav.textContent = '';

  menu.categories.forEach(function (cat) {
    var a = el('a', 'bar__link', cat.name);
    a.href = '#/' + cat.id;
    a.dataset.target = cat.id;
    nav.appendChild(a);
  });

  var alg = el('a', 'bar__link bar__link--allergens', menu.ui.allergenNav);
  alg.href = '#/alergeny';
  alg.dataset.target = 'alergeny';
  nav.appendChild(alg);
}

/** The landing screen: one tappable card per category, plus the legend. */
function renderIndex(menu) {
  var box = document.querySelector('.index');
  box.textContent = '';
  box.appendChild(el('h2', 'index__title', menu.ui.indexTitle));

  var list = el('ul', 'index__list');

  menu.categories.forEach(function (cat) {
    var n = cat.items.length;
    list.appendChild(indexCard(cat.id, cat.name, cat.blurb, n + ' ' + plural(n, menu.ui)));
  });

  list.appendChild(indexCard('alergeny', menu.ui.allergenNav, menu.ui.allergenNote, ''));

  box.appendChild(list);
}

function indexCard(id, name, blurb, count) {
  var li = el('li', 'index__item');

  var a = el('a', 'index__card');
  a.href = '#/' + id;
  if (id === 'alergeny') a.classList.add('index__card--allergens');

  var head = el('div', 'index__head');
  head.appendChild(el('h3', 'index__name', name));
  if (count) head.appendChild(el('span', 'index__count', count));
  a.appendChild(head);

  if (blurb) a.appendChild(el('p', 'index__blurb', blurb));

  var arrow = icon(ICONS.right, 22);
  arrow.classList.add('index__arrow');
  a.appendChild(arrow);

  li.appendChild(a);
  return li;
}

function renderTools() {
  document.querySelector('.to-top').appendChild(icon(ICONS.up, 22));
}

function renderCard(dish, ui) {
  var card = el('article', 'card');
  card.dataset.number = dish.number;

  var media = el('div', 'card__media');
  var img = el('img');
  img.src = 'assets/img/dishes/' + dish.image + '.webp';
  img.alt = dish.name;
  img.loading = 'lazy';
  img.decoding = 'async';
  img.width = 400;
  img.height = 400;
  // A missing photo should leave a clean empty tile, never a broken-image icon.
  img.addEventListener('error', function () { media.remove(); });
  media.appendChild(img);
  card.appendChild(media);

  var body = el('div', 'card__body');

  var name = el('h3', 'card__name', dish.number + '. ' + dish.name);
  if (dish.allergens && dish.allergens.length) {
    var sup = el('sup', 'card__allergens', dish.allergens.join(','));
    sup.title = 'Alergeny: ' + dish.allergens.join(', ');
    name.appendChild(sup);
  }
  body.appendChild(name);

  if (dish.spicy || dish.vegetarian) {
    var badges = el('div', 'card__badges');
    if (dish.spicy) badges.appendChild(el('span', 'badge badge--spicy', ui.badgeSpicy));
    if (dish.vegetarian) badges.appendChild(el('span', 'badge badge--vege', ui.badgeVege));
    body.appendChild(badges);
  }

  if (dish.description) body.appendChild(el('p', 'card__desc', dish.description));

  var priceBox = el('div', 'card__price');
  if (dish.variants && dish.variants.length) {
    var ul = el('ul', 'variants');
    dish.variants.forEach(function (v) {
      var li = el('li');
      li.appendChild(el('span', null, v.label));
      li.appendChild(el('b', null, v.price + ' ' + (v.currency || 'kč')));
      ul.appendChild(li);
    });
    priceBox.appendChild(ul);
  } else {
    priceBox.appendChild(el('b', 'price-flat', dish.price + ' kč'));
  }
  body.appendChild(priceBox);

  card.appendChild(body);
  return card;
}

function renderSections(menu) {
  var main = document.querySelector('.main');
  var anchor = document.querySelector('.allergens');

  menu.categories.forEach(function (cat) {
    var section = el('section', 'section');
    section.id = cat.id;

    section.appendChild(el('h2', 'section__title', cat.name));
    if (cat.blurb) section.appendChild(el('p', 'section__blurb', cat.blurb));

    var grid = el('div', 'grid');
    cat.items.forEach(function (item) {
      grid.appendChild(renderCard(item, menu.ui));
    });
    section.appendChild(grid);

    main.insertBefore(section, anchor);
  });
}

function renderAllergens(menu) {
  var box = document.querySelector('.allergens');
  box.querySelector('.allergens__title').textContent = menu.ui.allergenTitle;
  box.querySelector('.allergens__note').textContent = menu.ui.allergenNote;

  var grid = box.querySelector('.allergens__grid');
  grid.textContent = '';
  menu.allergens.forEach(function (row) {
    var item = el('div', 'allergen');
    item.appendChild(el('span', 'allergen__num', row[0]));
    var text = el('span', 'allergen__text', row[1]);
    if (row[2]) text.appendChild(el('span', 'allergen__sub', row[2]));
    item.appendChild(text);
    grid.appendChild(item);
  });
}

function renderError(ui) {
  var main = document.querySelector('.main');
  main.textContent = '';
  var box = el('div', 'empty');
  box.appendChild(el('h2', 'empty__title', ui.errorTitle));
  box.appendChild(el('p', 'empty__body', ui.errorBody));
  main.appendChild(box);
}

/* ---------- routing ---------- */

/**
 * Hash routes: "" (or "#/") is the index, "#/<id>" is a category or the allergen
 * legend. Returns null for a hash that is not a route at all — the skip link's
 * "#obsah" — so an in-page jump does not navigate away from the current page.
 */
function readRoute(hash, ids) {
  if (!hash || hash === '#' || hash === '#/') return '';

  if (hash.indexOf('#/') === 0) {
    var id = hash.slice(2);
    return ids.indexOf(id) === -1 ? '' : id;
  }

  // "#nudle" — the plain anchor this page used before it was routed. Older links,
  // and any tab still open on the previous version, keep working.
  var legacy = hash.slice(1);
  if (ids.indexOf(legacy) !== -1) return legacy;

  return null;
}

/**
 * `first` is the initial render. Before it, nothing is hidden yet, so a non-route
 * hash has to fall back to the index — "leave the view as it is" would leave every
 * category on screen at once.
 */
function showRoute(titles, ids, first) {
  var id = readRoute(location.hash, ids);
  if (id === null) {
    if (!first) return;
    id = '';
  }

  var onIndex = id === '';
  document.querySelector('.index').hidden = !onIndex;
  document.querySelector('.bar').hidden = onIndex;

  document.querySelectorAll('.section, .allergens').forEach(function (section) {
    section.hidden = section.id !== id;
  });

  var nav = document.querySelector('.bar__nav');
  document.querySelectorAll('.bar__link').forEach(function (link) {
    var on = link.dataset.target === id;
    link.classList.toggle('is-active', on);
    if (on) {
      link.setAttribute('aria-current', 'page');
      // Keep the active chip in view on narrow screens.
      var l = link.offsetLeft, r = l + link.offsetWidth;
      if (l < nav.scrollLeft || r > nav.scrollLeft + nav.clientWidth) {
        nav.scrollTo({ left: Math.max(0, l - 16), behavior: 'smooth' });
      }
    } else {
      link.removeAttribute('aria-current');
    }
  });

  document.title = titles[id];

  // A new page starts at the top, without the smooth scroll the CSS asks for.
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function wireRouter(menu) {
  var ids = menu.categories.map(function (cat) { return cat.id; }).concat('alergeny');

  var r = menu.restaurant;
  var titles = { '': r.name + (r.tagline ? ' — ' + r.tagline : '') };
  menu.categories.forEach(function (cat) { titles[cat.id] = cat.name + ' — ' + r.name; });
  titles.alergeny = menu.ui.allergenNav + ' — ' + r.name;

  window.addEventListener('hashchange', function () { showRoute(titles, ids, false); });
  showRoute(titles, ids, true);
}

/* ---------- behaviour ---------- */

function wireToTop() {
  var btn = document.querySelector('.to-top');
  var ticking = false;

  function update() {
    ticking = false;
    btn.classList.toggle('is-visible', window.scrollY > 600);
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  update();
}

/* ---------- boot ---------- */

function init(menu) {
  renderBrand(menu);
  renderNav(menu);
  renderIndex(menu);
  renderTools();
  renderSections(menu);
  renderAllergens(menu);

  wireRouter(menu);
  wireToTop();

  document.body.dataset.ready = 'true';
}

fetch('data/menu.json', { cache: 'no-cache' })
  .then(function (res) {
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.json();
  })
  .then(init)
  .catch(function (err) {
    console.error('Menu failed to load:', err);
    renderError({
      errorTitle: 'Menu se nepodařilo načíst',
      errorBody: 'Zkuste stránku načíst znovu.'
    });
  });
