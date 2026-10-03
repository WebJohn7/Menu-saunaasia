/* @ds-bundle: {"format":4,"namespace":"MenuAsiaDesignSystem_345094","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"AllergenRefs","sourcePath":"components/menu/AllergenRefs.jsx"},{"name":"DishEntry","sourcePath":"components/menu/DishEntry.jsx"},{"name":"PriceTag","sourcePath":"components/menu/PriceTag.jsx"},{"name":"SectionTitle","sourcePath":"components/menu/SectionTitle.jsx"},{"name":"VariantList","sourcePath":"components/menu/VariantList.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"6676ad4c78ef","components/core/Button.jsx":"75acd67fd1e4","components/core/Card.jsx":"d25a4ac525c5","components/core/Divider.jsx":"c71ab278ed58","components/core/IconButton.jsx":"f9c392424f8a","components/core/Tag.jsx":"2246bb660698","components/feedback/Dialog.jsx":"f24cc3000418","components/feedback/Toast.jsx":"0c95622de796","components/forms/Checkbox.jsx":"2a5c349991ad","components/forms/Input.jsx":"42b3774bf352","components/forms/Radio.jsx":"1ff388f3f6a7","components/forms/Select.jsx":"2b60659f06f9","components/forms/Switch.jsx":"bfbf14140f8c","components/menu/AllergenRefs.jsx":"b14bd49c3797","components/menu/DishEntry.jsx":"8a239cc17d5f","components/menu/PriceTag.jsx":"452e7984614a","components/menu/SectionTitle.jsx":"c9ecbc3848f8","components/menu/VariantList.jsx":"7a4c72c5347b","components/navigation/NavBar.jsx":"331950d4fa5b","components/navigation/Tabs.jsx":"cb847554244f","ui_kits/menu/AllergenScreen.jsx":"27990c4bee45","ui_kits/menu/CartScreen.jsx":"c235b1b46b90","ui_kits/menu/DishDialog.jsx":"b17377f4fb4a","ui_kits/menu/MenuScreen.jsx":"ad7d06c4b375","ui_kits/menu/data.js":"a4d304050202","ui_kits/website/Contact.jsx":"96622a32478f","ui_kits/website/Home.jsx":"49f59ed49df0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MenuAsiaDesignSystem_345094 = window.MenuAsiaDesignSystem_345094 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  allergen: {
    bg: 'transparent',
    fg: 'var(--red-600)',
    bd: 'var(--red-600)'
  },
  spicy: {
    bg: 'var(--red-500)',
    fg: 'var(--paper-000)',
    bd: 'var(--red-500)'
  },
  veg: {
    bg: 'var(--sage-600)',
    fg: 'var(--paper-000)',
    bd: 'var(--sage-600)'
  },
  gold: {
    bg: 'transparent',
    fg: 'var(--gold-500)',
    bd: 'var(--gold-500)'
  },
  yellow: {
    bg: 'var(--yellow-500)',
    fg: 'var(--ink-900)',
    bd: 'var(--yellow-500)'
  }
};

/** Small status marker. `allergen` is the circled numeral from the official allergen sheet. */
function Badge({
  tone = 'allergen',
  round = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.allergen;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: round ? 22 : undefined,
      height: 22,
      padding: round ? 0 : '0 8px',
      background: t.bg,
      color: t.fg,
      border: '2px solid ' + t.bd,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
      font: 'var(--type-label)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const PALETTE = {
  primary: {
    bg: 'var(--yellow-500)',
    fg: 'var(--ink-900)',
    bd: 'var(--yellow-500)',
    hover: 'var(--yellow-400)',
    active: 'var(--yellow-600)'
  },
  dark: {
    bg: 'var(--ink-900)',
    fg: 'var(--paper-000)',
    bd: 'var(--ink-900)',
    hover: 'var(--ink-700)',
    active: 'var(--ink-600)'
  },
  danger: {
    bg: 'var(--red-500)',
    fg: 'var(--paper-000)',
    bd: 'var(--red-500)',
    hover: 'var(--red-400)',
    active: 'var(--red-600)'
  },
  outline: {
    bg: 'transparent',
    fg: 'currentColor',
    bd: 'currentColor',
    hover: 'rgba(255,255,255,.10)',
    active: 'rgba(255,255,255,.18)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'currentColor',
    bd: 'transparent',
    hover: 'rgba(127,127,127,.14)',
    active: 'rgba(127,127,127,.22)'
  }
};
const SIZES = {
  sm: {
    padding: '7px 14px',
    fontSize: 'var(--text-xs)',
    gap: '6px'
  },
  md: {
    padding: '11px 20px',
    fontSize: 'var(--text-sm)',
    gap: '8px'
  },
  lg: {
    padding: '15px 30px',
    fontSize: 'var(--text-base)',
    gap: '10px'
  }
};

/** Square-cornered, uppercase condensed button. Yellow is the menu's "price" colour and doubles as the primary action. */
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  icon = null,
  iconRight = null,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const p = PALETTE[variant] || PALETTE.primary;
  const s = SIZES[size] || SIZES.md;
  const filled = variant === 'primary' || variant === 'dark' || variant === 'danger';
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      background: filled ? down ? p.active : hover ? p.hover : p.bg : down ? p.active : hover ? p.hover : p.bg,
      color: filled ? p.fg : 'currentColor',
      border: '2px solid ' + p.bd,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: down && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Flat, square-cornered container. `tone` picks the menu's two grounds. */
function Card({
  tone = 'light',
  image,
  imageAlt = '',
  padding = 'var(--space-6)',
  children,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: dark ? 'var(--surface-dark-raised)' : 'var(--surface-card)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-body)',
      border: '1px solid ' + (dark ? 'var(--border-on-dark)' : 'var(--border-on-light)'),
      borderRadius: 'var(--radius-none)',
      boxShadow: dark ? 'var(--shadow-inset-top)' : 'var(--shadow-card)',
      overflow: 'hidden',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      display: 'block',
      width: '100%',
      height: 180,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Horizontal rule. `heavy` is the 3px rule that sits under section titles. */
function Divider({
  heavy = false,
  tone = 'onLight',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: heavy ? 3 : 1,
      margin: 0,
      background: heavy ? tone === 'onDark' ? 'var(--yellow-500)' : 'var(--ink-900)' : tone === 'onDark' ? 'var(--border-on-dark)' : 'var(--border-on-light)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Square icon-only control — used for menu toggles, close buttons, quantity steppers. */
function IconButton({
  tone = 'onLight',
  size = 40,
  label,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const onDark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? onDark ? 'rgba(255,255,255,.12)' : 'rgba(10,10,10,.07)' : 'transparent',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      border: '1px solid ' + (onDark ? 'var(--border-on-dark)' : 'var(--border-on-light)'),
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Filter / category chip. Square, uppercase, thin rule; selected state fills. */
function Tag({
  selected = false,
  tone = 'onLight',
  children,
  style,
  ...rest
}) {
  const onDark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: {
      padding: '7px 14px',
      cursor: 'pointer',
      font: 'var(--type-label)',
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      background: selected ? onDark ? 'var(--yellow-500)' : 'var(--ink-900)' : 'transparent',
      color: selected ? onDark ? 'var(--ink-900)' : 'var(--paper-000)' : 'inherit',
      border: '1px solid ' + (selected ? 'transparent' : onDark ? 'var(--border-on-dark)' : 'var(--border-on-light)'),
      borderRadius: 'var(--radius-sm)',
      transition: 'var(--transition-base)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred modal on a dark scrim. Square panel, 3px yellow top rule. */
function Dialog({
  open = false,
  title,
  onClose,
  footer,
  children,
  width = 480,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--paper-000)',
      color: 'var(--text-body)',
      borderTop: '3px solid var(--yellow-500)',
      borderRadius: 'var(--radius-none)',
      boxShadow: 'var(--shadow-raised)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      padding: 'var(--space-5) var(--space-6)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xl)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      borderBottom: '1px solid var(--border-on-light)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      font: 'var(--type-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-6)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      borderTop: '1px solid var(--border-on-light)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ink slab that slides in at the bottom. Yellow left-to-right rule on top, no rounding. */
function Toast({
  message,
  action,
  tone = 'neutral',
  style,
  ...rest
}) {
  const bar = tone === 'danger' ? 'var(--red-500)' : tone === 'success' ? 'var(--state-success)' : 'var(--yellow-500)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-4) var(--space-5)',
      background: 'var(--ink-900)',
      color: 'var(--text-on-dark)',
      borderTop: '3px solid ' + bar,
      boxShadow: 'var(--shadow-raised)',
      font: 'var(--type-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), action);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox with an ink fill and a yellow check. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 20,
      height: 20,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--ink-900)' : 'transparent',
      border: '2px solid ' + (checked ? 'var(--ink-900)' : 'currentColor'),
      borderRadius: 'var(--radius-sm)',
      color: 'var(--yellow-500)',
      font: 'var(--type-label)',
      fontSize: 13,
      lineHeight: 1
    }
  }, checked ? '✓' : ''), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Single-line text field. Square, hairline border, yellow focus rule. */
function Input({
  label,
  hint,
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontFamily: 'var(--font-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: '100%',
        boxSizing: 'border-box',
        padding: '11px 14px',
        font: 'var(--type-body)',
        color: 'var(--text-strong)',
        background: 'var(--paper-000)',
        border: '1px solid var(--border-on-light)',
        borderRadius: 'var(--radius-sm)',
        outline: 'none'
      },
      borderColor: invalid ? 'var(--red-500)' : focus ? 'var(--ink-900)' : 'var(--border-on-light)',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'box-shadow var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-variant)',
      color: invalid ? 'var(--red-500)' : 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio group for mutually exclusive protein / size choices. */
function Radio({
  name,
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), options.map(o => {
    const v = o.value ?? o,
      l = o.label ?? o,
      on = value === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: v,
      checked: on,
      onChange: () => onChange && onChange(v),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        width: 20,
        height: 20,
        borderRadius: 'var(--radius-pill)',
        border: '2px solid ' + (on ? 'var(--ink-900)' : 'currentColor'),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--ink-900)' : 'transparent'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body)'
      }
    }, l));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Native select styled to match Input. */
function Select({
  label,
  options = [],
  hint,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontFamily: 'var(--font-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: '100%',
        boxSizing: 'border-box',
        padding: '11px 14px',
        font: 'var(--type-body)',
        color: 'var(--text-strong)',
        background: 'var(--paper-000)',
        border: '1px solid var(--border-on-light)',
        borderRadius: 'var(--radius-sm)',
        outline: 'none'
      },
      appearance: 'none',
      cursor: 'pointer',
      backgroundImage: 'linear-gradient(45deg,transparent 50%,var(--ink-900) 50%),linear-gradient(135deg,var(--ink-900) 50%,transparent 50%)',
      backgroundPosition: 'calc(100% - 18px) 20px,calc(100% - 12px) 20px',
      backgroundSize: '6px 6px,6px 6px',
      backgroundRepeat: 'no-repeat',
      borderColor: focus ? 'var(--ink-900)' : 'var(--border-on-light)',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-variant)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** On/off toggle — dark page mode, vegetarian-only filter, delivery vs pickup. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 46,
      height: 24,
      padding: 2,
      display: 'inline-flex',
      alignItems: 'center',
      background: checked ? 'var(--yellow-500)' : 'rgba(127,127,127,.35)',
      border: '1px solid ' + (checked ? 'var(--yellow-600)' : 'transparent'),
      borderRadius: 'var(--radius-pill)',
      transition: 'background var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-900)',
      transform: checked ? 'translateX(22px)' : 'translateX(0)',
      transition: 'transform var(--duration-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/menu/AllergenRefs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Superscript allergen numbers that follow a dish name, e.g. "1,2,6" (EU 1169/2011 list). */
function AllergenRefs({
  codes = [],
  style,
  ...rest
}) {
  if (!codes.length) return null;
  return /*#__PURE__*/React.createElement("sup", _extends({
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      marginLeft: 6,
      verticalAlign: 'super',
      opacity: .95,
      ...style
    }
  }, rest), codes.join(','));
}
Object.assign(__ds_scope, { AllergenRefs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/AllergenRefs.jsx", error: String((e && e.message) || e) }); }

// components/menu/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 'var(--text-base)',
  md: 'var(--text-xl)',
  lg: 'var(--text-3xl)'
};

/** Price in Czech crowns. Yellow on the dark pages, chilli red on the light pages. */
function PriceTag({
  amount,
  currency = 'kč',
  tone = 'onDark',
  size = 'md',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      fontSize: SIZES[size] || SIZES.md,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      color: tone === 'onDark' ? 'var(--price-on-dark)' : 'var(--price-on-light)',
      ...style
    }
  }, rest), amount, " ", currency);
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/menu/SectionTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Page / course title. `display` is the big rounded yellow wordmark ("Předkrmy"); `rule` is the compact uppercase variant. */
function SectionTitle({
  children,
  variant = 'display',
  tone = 'onDark',
  style,
  ...rest
}) {
  const onDark = tone === 'onDark';
  if (variant === 'display') {
    return /*#__PURE__*/React.createElement("h2", _extends({
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-6xl)',
        lineHeight: 'var(--leading-tight)',
        color: onDark ? 'var(--yellow-400)' : 'var(--red-600)',
        ...style
      }
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("h2", _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      borderBottom: '3px solid ' + (onDark ? 'var(--yellow-500)' : 'var(--ink-900)'),
      paddingBottom: 'var(--space-2)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/menu/VariantList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The "- s kuřecím masem … 125 kč" rows under a dish description. */
function VariantList({
  items = [],
  tone = 'onDark',
  align = 'auto',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--gap-variant-row)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: align === 'wide' ? '1fr auto' : 'max-content max-content',
      columnGap: 'var(--space-6)',
      font: 'var(--type-variant)',
      color: tone === 'onDark' ? 'var(--text-on-dark)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "- ", it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-bold)',
      color: tone === 'onDark' ? 'var(--price-on-dark)' : 'var(--price-on-light)'
    }
  }, it.price, " ", it.currency || 'kč'))));
}
Object.assign(__ds_scope, { VariantList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/VariantList.jsx", error: String((e && e.message) || e) }); }

// components/menu/DishEntry.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One menu item exactly as it is set on the printed page: number, name, allergens, price, description, variants, cut-out photo. */
function DishEntry({
  number,
  name,
  allergens = [],
  price,
  variants = [],
  description,
  photo,
  photoAlt = '',
  photoSide = 'right',
  spicy = false,
  tone = 'onDark',
  size = 'md',
  style,
  ...rest
}) {
  const onDark = tone === 'onDark';
  const nameSize = size === 'lg' ? 'var(--text-2xl)' : size === 'sm' ? 'var(--text-lg)' : 'var(--text-xl)';
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-bold)',
      fontSize: nameSize,
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      display: 'flex',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      columnGap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, number ? number + '. ' : '', name, /*#__PURE__*/React.createElement(__ds_scope.AllergenRefs, {
    codes: allergens
  }), spicy && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "spicy",
    style: {
      marginLeft: 10,
      verticalAlign: 'middle'
    }
  }, "Pikantn\xED")), price != null && /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    amount: price,
    tone: tone,
    size: size === 'lg' ? 'lg' : 'md'
  })), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--gap-name-to-desc) 0 0',
      maxWidth: 'var(--measure-desc)',
      font: 'var(--type-body)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)'
    }
  }, description), variants.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--gap-desc-to-variants)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.VariantList, {
    items: variants,
    tone: tone
  })));
  const img = photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: photoAlt || name,
    style: {
      width: '100%',
      maxWidth: 320,
      display: 'block',
      filter: onDark ? 'drop-shadow(var(--shadow-plate))' : 'drop-shadow(var(--shadow-plate-light))'
    }
  }) : null;
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'grid',
      alignItems: 'start',
      columnGap: 'var(--space-8)',
      rowGap: 'var(--space-4)',
      gridTemplateColumns: photo ? photoSide === 'left' ? 'minmax(0,320px) 1fr' : '1fr minmax(0,320px)' : '1fr',
      ...style
    }
  }, rest), photo && photoSide === 'left' ? /*#__PURE__*/React.createElement(React.Fragment, null, img, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, img));
}
Object.assign(__ds_scope, { DishEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/DishEntry.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Top bar: wordmark left, links centre, action right. Ink ground by default. */
function NavBar({
  brand = 'MENU ASIA',
  items = [],
  active,
  onNavigate,
  action,
  tone = 'onDark',
  style,
  ...rest
}) {
  const onDark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      padding: 'var(--space-4) var(--space-8)',
      background: onDark ? 'var(--ink-900)' : 'var(--paper-000)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      borderBottom: '1px solid ' + (onDark ? 'var(--border-on-dark)' : 'var(--border-on-light)'),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xl)',
      color: onDark ? 'var(--yellow-400)' : 'var(--red-600)',
      whiteSpace: 'nowrap'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, items.map(it => {
    const v = it.value ?? it,
      l = it.label ?? it,
      on = active === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => onNavigate && onNavigate(v),
      style: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 0',
        fontFamily: 'var(--font-heading)',
        fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--text-sm)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: on ? onDark ? 'var(--yellow-500)' : 'var(--red-500)' : 'inherit',
        opacity: on ? 1 : .8
      }
    }, l);
  })), action);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Course navigation. Active tab carries the 3px rule from the printed section titles. */
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'onDark',
  style,
  ...rest
}) {
  const onDark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-6)',
      borderBottom: '1px solid ' + (onDark ? 'var(--border-on-dark)' : 'var(--border-on-light)'),
      ...style
    }
  }, rest), items.map(it => {
    const v = it.value ?? it,
      l = it.label ?? it,
      on = value === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        appearance: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '0 0 10px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--text-base)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: on ? onDark ? 'var(--yellow-500)' : 'var(--ink-900)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        border: 'none',
        borderBottom: '3px solid ' + (on ? onDark ? 'var(--yellow-500)' : 'var(--ink-900)' : 'transparent'),
        marginBottom: -1,
        transition: 'color var(--duration-fast) var(--ease-out)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu/AllergenScreen.jsx
try { (() => {
const {
  NavBar,
  Button,
  Badge
} = window.MenuAsiaDesignSystem_345094;
function AllergenScreen({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--paper-000)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    tone: "onLight",
    items: ['Menu', 'Alergeny', 'Kontakt'],
    active: "Alergeny",
    onNavigate: onBack,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: onBack
    }, "Zp\u011Bt do menu")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '40px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-4xl)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--red-600)'
    }
  }, "Seznam alergen\u016F"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 28px',
      font: 'var(--type-body)',
      fontStyle: 'italic',
      color: 'var(--text-muted)'
    }
  }, "publikovan\xFD ve sm\u011Brnici 2000/89 ES, od 13. 12. 2014 sm\u011Brnic\xED 1169/2011 EU"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, window.MENU_DATA.allergens.map(([n, title, sub]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "allergen",
    round: true,
    style: {
      width: 30,
      height: 30,
      minWidth: 30,
      fontSize: 'var(--text-sm)'
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-variant)',
      color: 'var(--text-muted)'
    }
  }, sub)))))));
}
Object.assign(window, {
  AllergenScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/AllergenScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu/CartScreen.jsx
try { (() => {
const {
  NavBar,
  Button,
  Input,
  Select,
  Checkbox,
  Switch,
  Divider,
  PriceTag,
  IconButton
} = window.MenuAsiaDesignSystem_345094;
function CartScreen({
  items,
  onBack,
  onRemove,
  onSubmit
}) {
  const [delivery, setDelivery] = React.useState(true);
  const total = items.reduce((s, i) => s + Number(i.price), 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-light-page",
    style: {
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    tone: "onLight",
    items: ['Menu', 'Alergeny', 'Kontakt'],
    active: "Menu",
    onNavigate: onBack,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: onBack
    }, "Zp\u011Bt do menu")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '40px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      font: 'var(--type-section)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, "Objedn\xE1vka"), items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)'
    }
  }, "Ko\u0161\xEDk je pr\xE1zdn\xFD."), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, it.name), it.variant && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-variant)',
      color: 'var(--text-muted)'
    }
  }, it.variant)), /*#__PURE__*/React.createElement(PriceTag, {
    amount: it.price,
    tone: "onLight"
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Odebrat",
    onClick: () => onRemove(i)
  }, "\xD7")), /*#__PURE__*/React.createElement(Divider, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      margin: '20px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      textTransform: 'uppercase'
    }
  }, "Celkem"), /*#__PURE__*/React.createElement(PriceTag, {
    amount: total,
    tone: "onLight",
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Jm\xE9no",
    placeholder: "Jan Nov\xE1k"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    placeholder: "+420 \u2026"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u010Cas vyzvednut\xED",
    options: ['Co nejdříve', 'za 30 minut', 'za 60 minut']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      alignContent: 'end'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: delivery,
    onChange: e => setDelivery(e.target.checked),
    label: "Rozvoz"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Bez ara\u0161\xEDd\u016F",
    checked: false,
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "dark",
    full: true,
    style: {
      marginTop: 32
    },
    onClick: onSubmit
  }, "Odeslat objedn\xE1vku")));
}
Object.assign(window, {
  CartScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/CartScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu/DishDialog.jsx
try { (() => {
const {
  Dialog,
  Radio,
  Button,
  Badge,
  PriceTag,
  IconButton
} = window.MenuAsiaDesignSystem_345094;
function DishDialog({
  dish,
  onClose,
  onAdd
}) {
  const variants = dish && dish.variants ? dish.variants : [];
  const [variant, setVariant] = React.useState(variants.length ? variants[0].label : null);
  React.useEffect(() => {
    setVariant(variants.length ? variants[0].label : null);
  }, [dish && dish.id]);
  if (!dish) return null;
  const chosen = variants.find(v => v.label === variant);
  const price = chosen ? chosen.price : dish.price;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: true,
    title: (dish.number ? dish.number + '. ' : '') + dish.name,
    onClose: onClose,
    width: 520,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: onClose
    }, "Zp\u011Bt"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onAdd(dish, variant, price)
    }, "P\u0159idat \xB7 ", price, " k\u010D"))
  }, dish.photo && /*#__PURE__*/React.createElement("img", {
    src: dish.photo,
    alt: dish.name,
    style: {
      width: '100%',
      maxHeight: 220,
      objectFit: 'contain',
      marginBottom: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-4)'
    }
  }, dish.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, dish.spicy && /*#__PURE__*/React.createElement(Badge, {
    tone: "spicy"
  }, "Pikantn\xED"), dish.allergens.map(a => /*#__PURE__*/React.createElement(Badge, {
    key: a,
    tone: "allergen",
    round: true
  }, a))), variants.length > 0 && /*#__PURE__*/React.createElement(Radio, {
    name: "variant",
    value: variant,
    onChange: setVariant,
    options: variants.map(v => ({
      value: v.label,
      label: v.label + ' — ' + v.price + ' kč'
    }))
  }), !variants.length && /*#__PURE__*/React.createElement(PriceTag, {
    amount: dish.price,
    tone: "onLight",
    size: "lg"
  }));
}
Object.assign(window, {
  DishDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/DishDialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu/MenuScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  NavBar,
  Tabs,
  SectionTitle,
  DishEntry,
  Button,
  Badge
} = window.MenuAsiaDesignSystem_345094;
function MenuScreen({
  course,
  setCourse,
  onOpen,
  onCart,
  cartCount
}) {
  const dishes = window.MENU_DATA.dishes.filter(d => d.course === course);
  const dark = course === 'Předkrmy' || course === 'Rýže' || course === 'Speciality';
  return /*#__PURE__*/React.createElement("div", {
    className: dark ? 'bg-dark-page' : 'bg-light-page',
    style: {
      minHeight: '100%',
      position: 'relative',
      overflow: 'hidden'
    }
  }, dark && /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ornaments/gold-leaf-right.png",
    alt: "",
    style: {
      position: 'absolute',
      right: 0,
      top: 220,
      width: 210,
      opacity: .9,
      pointerEvents: 'none'
    }
  }), dark && /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ornaments/gold-leaf-left.png",
    alt: "",
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 230,
      opacity: .9,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(NavBar, {
    tone: dark ? 'onDark' : 'onLight',
    items: ['Menu', 'Alergeny', 'Kontakt'],
    active: "Menu",
    onNavigate: v => v === 'Alergeny' && onOpen.allergens(),
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: dark ? 'primary' : 'dark',
      onClick: onCart
    }, "Ko\u0161\xEDk \xB7 ", cartCount)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px var(--page-margin) 72px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    tone: dark ? 'onDark' : 'onLight',
    style: {
      fontSize: 'var(--text-5xl)'
    }
  }, course), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '28px 0 40px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tone: dark ? 'onDark' : 'onLight',
    items: window.MENU_DATA.courses,
    value: course,
    onChange: setCourse
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--gap-dish-block)'
    }
  }, dishes.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    onClick: () => onOpen.dish(d),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DishEntry, _extends({}, d, {
    tone: dark ? 'onDark' : 'onLight',
    size: "lg",
    photoSide: i % 2 ? 'left' : 'right'
  }))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 56,
      font: 'var(--type-variant)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, "\u010C\xEDsla u n\xE1zv\u016F jsou alergeny dle sm\u011Brnice 1169/2011 EU. ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen.allergens();
    },
    style: {
      color: dark ? 'var(--yellow-500)' : 'var(--red-500)'
    }
  }, "Seznam alergen\u016F"))));
}
Object.assign(window, {
  MenuScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/MenuScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu/data.js
try { (() => {
window.MENU_DATA = {
  courses: ['Předkrmy', 'Polévky', 'Nudle', 'Rýže', 'Speciality'],
  dishes: [{
    id: 1,
    course: 'Předkrmy',
    number: 1,
    name: 'Fresh Roll 2ks',
    allergens: [4],
    ground: 'dark',
    photo: '../../assets/dishes/fresh-roll.png',
    description: 'Čerstvé závitky, rýžové nudle, ledový salát, mango, okurka, mrkev, bylinky, chia, sladko-kyselá omáčka.',
    variants: [{
      label: 's krevetami',
      price: 70
    }, {
      label: 's hovězím masem',
      price: 70
    }, {
      label: 's tofu',
      price: 60
    }]
  }, {
    id: 2,
    course: 'Předkrmy',
    number: 2,
    name: 'Spring Rolls 6ks',
    allergens: [1, 6],
    ground: 'dark',
    price: 60,
    description: 'Jarní závitky, skleněné nudle, mrkev, zell, kurkuma, relish omáčka - sojová omáčka'
  }, {
    id: 3,
    course: 'Polévky',
    number: 6,
    name: 'Pho S Class',
    allergens: [4, 6],
    ground: 'light',
    photo: '../../assets/dishes/pho.png',
    description: 'Vývar, rýžové nudle, koriandr, jarni cibulka, červené cibule',
    variants: [{
      label: 's hovězím masem',
      price: 50
    }, {
      label: 's kuřecím masem',
      price: 50
    }]
  }, {
    id: 4,
    course: 'Polévky',
    number: 8,
    name: 'Pikantní polévka',
    allergens: [],
    ground: 'light',
    price: 30,
    spicy: true,
    description: 'Kuře, cibule, mrkev, houby, bambusové výhonky, vejce, paprika, pepř'
  }, {
    id: 5,
    course: 'Nudle',
    number: 17,
    name: 'Pho Xao',
    allergens: [3, 4, 6],
    ground: 'light',
    photo: '../../assets/dishes/pho-xao.png',
    description: 'Smažené rýžové nudle, pak choy, rajčata, červené cibule, lusky, smažené cibule, vejce',
    variants: [{
      label: 's kuřecím masem',
      price: 125
    }, {
      label: 's hovězím masem',
      price: 145
    }, {
      label: 's krevetami',
      price: 155
    }, {
      label: 's tofu',
      price: 120
    }]
  }, {
    id: 6,
    course: 'Nudle',
    number: 18,
    name: 'Japanese Udon',
    allergens: [],
    ground: 'light',
    photo: '../../assets/dishes/japanese-udon.png',
    description: 'Japanské nudle udon, paprika, lusky, mrkev, žampiony, chili, sezam, smažené cibule, ústřicová omáčka',
    variants: [{
      label: 's kuřecím masem',
      price: 125
    }, {
      label: 's hovězím masem',
      price: 145
    }, {
      label: 's krevetami',
      price: 155
    }, {
      label: 's tofu',
      price: 120
    }]
  }, {
    id: 7,
    course: 'Nudle',
    number: 20,
    name: 'Pad Thai',
    allergens: [3, 4, 6],
    ground: 'light',
    photo: '../../assets/dishes/pad-thai.png',
    description: 'Thajské nudle, vejce, mrkev, pórek, sójové klíčky, arašidy, chilli, citron, tamarind ústřicová omáčka.',
    variants: [{
      label: 's kuřecím masem',
      price: 125
    }, {
      label: 's hovězím masem',
      price: 145
    }, {
      label: 's krevetami',
      price: 155
    }, {
      label: 's tofu',
      price: 120
    }]
  }, {
    id: 8,
    course: 'Rýže',
    number: 22,
    name: 'Smažené rýže s mladá rýže',
    allergens: [],
    ground: 'dark',
    photo: '../../assets/dishes/fried-rice.png',
    description: 'Smažená rýže, mladé ryže, kokos, lusky, kukuřice, vejce, porek, mrkev',
    variants: [{
      label: 's kuřecím masem',
      price: 130
    }, {
      label: 's hovězím masem',
      price: 150
    }, {
      label: 's krevetami',
      price: 155
    }, {
      label: 's tofu',
      price: 125
    }]
  }, {
    id: 9,
    course: 'Speciality',
    number: 25,
    name: 'Chicken & Lemongrass, Chilli',
    allergens: [],
    ground: 'dark',
    price: 135,
    spicy: true,
    photo: '../../assets/dishes/chicken-lemongrass.png',
    description: 'Kuřecí maso, červená paprika, citronová tráva, chilli, ústřicová omáčka, česnek'
  }, {
    id: 10,
    course: 'Speciality',
    number: 34,
    name: 'Křupavé smažené kuřecí prso',
    allergens: [],
    ground: 'dark',
    photo: '../../assets/dishes/crispy-chicken.png',
    description: 'Podáváno s omáčkou dle výběru',
    variants: [{
      label: 's omáčkou a rýží',
      price: 130
    }, {
      label: 'smažené nudle',
      price: 130
    }, {
      label: 's hranolky',
      price: 130
    }]
  }],
  allergens: [[1, 'Obiloviny obsahující lepek', 'Pšenice, žito, ječmen, oves, špalda, kamut'], [2, 'Korýši', 'a výrobky z nich'], [3, 'Vejce', 'a výrobky z nich'], [4, 'Ryby', 'a výrobky z nich'], [5, 'Podzemnice olejná (arašídy)', 'a výrobky z ní'], [6, 'Sójové boby (sója)', 'a výrobky z nich'], [7, 'Mléko', 'a výrobky z něj'], [8, 'Skořápkové plody', 'Mandle, lískové ořechy, vlašské ořechy, kešu'], [9, 'Celer', 'a výrobky z něj'], [10, 'Hořčice', 'a výrobky z ní'], [11, 'Sezamová semena (sezam)', 'a výrobky z nich'], [12, 'Oxid siřičitý a siřičitany', 'v koncentracích vyšších než 10 mg/kg'], [13, 'Vlčí bob (lupina)', 'a výrobky z něj'], [14, 'Měkkýši', 'a výrobky z nich']]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Input,
  Select,
  Button,
  SectionTitle,
  Divider
} = window.MenuAsiaDesignSystem_345094;
function Contact({
  onSent
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper-000)',
      padding: '72px var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,420px)',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    variant: "rule",
    tone: "onLight"
  }, "Kontakt"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-lg)',
      marginTop: 'var(--space-6)'
    }
  }, "Vodi\u010Dkova 12, Praha 1", /*#__PURE__*/React.createElement("br", null), "+420 777 123 456", /*#__PURE__*/React.createElement("br", null), "ahoj@menuasia.cz"), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-8) 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)'
    }
  }, "Po\u2013P\xE1 10:30\u201321:30 \xB7 So\u2013Ne 11:00\u201321:30"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-variant)',
      color: 'var(--text-muted)'
    }
  }, "Rezervace na v\xEDce ne\u017E 6 osob volejte pros\xEDm telefonicky.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Jm\xE9no",
    placeholder: "Jan Nov\xE1k"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    placeholder: "+420 \u2026"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Po\u010Det osob",
    options: ['2', '3', '4', '5', '6']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Datum a \u010Das",
    placeholder: "12. 9. v 19:00"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    full: true,
    onClick: onSent
  }, "Rezervovat st\u016Fl"))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  SectionTitle,
  DishEntry,
  Tag,
  Divider,
  Card,
  PriceTag
} = window.MenuAsiaDesignSystem_345094;
function Hero({
  onOrder
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-dark-page",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '88px var(--page-margin) 96px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ornaments/gold-leaf-left.png",
    alt: "",
    style: {
      position: 'absolute',
      left: 0,
      bottom: -20,
      width: 280,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ornaments/gold-leaf-right.png",
    alt: "",
    style: {
      position: 'absolute',
      right: 0,
      top: -30,
      width: 240,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,460px)',
      gap: 'var(--space-16)',
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "Vietnamsk\xE1 \xB7 thajsk\xE1 \xB7 japonsk\xE1 kuchyn\u011B"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-6xl)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--yellow-400)'
    }
  }, "Menu Asia"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      font: 'var(--type-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-on-dark)',
      maxWidth: '44ch'
    }
  }, "Pho va\u0159\xEDme na v\xFDvaru p\u0159es noc, z\xE1vitky bal\xEDme r\xE1no. Va\u0159\xEDme ka\u017Ed\xFD den od 10:30 do 21:30."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onOrder
  }, "Objednat online"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: onOrder,
    style: {
      color: 'var(--paper-000)'
    }
  }, "Prohl\xE9dnout menu"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/dishes/pho.png",
    alt: "Pho",
    style: {
      width: '100%',
      filter: 'drop-shadow(var(--shadow-plate))'
    }
  })));
}
function Highlights() {
  const items = [['Pho', 'Vývar tažený 12 hodin, rýžové nudle, čerstvé bylinky.', '../../assets/dishes/pho-xao.png'], ['Wok', 'Nudle a rýže z rozpálené pánve, ráno nakoupená zelenina.', '../../assets/dishes/pad-thai.png'], ['Křupavé', 'Kachna a kuře dozlatova, podávané s rýží nebo hranolky.', '../../assets/dishes/crispy-chicken.png']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper-000)',
      padding: '72px var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    variant: "rule",
    tone: "onLight"
  }, "Co u n\xE1s j\xEDst"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-8)'
    }
  }, items.map(([t, d, img]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "light",
    image: img,
    imageAlt: t
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: 'var(--type-body)'
    }
  }, d)))));
}
function Popular({
  onOrder
}) {
  const dishes = window.MENU_DATA.dishes.filter(d => [5, 7, 9].includes(d.id));
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-light-page",
    style: {
      padding: '72px var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    variant: "rule",
    tone: "onLight"
  }, "Nej\u010Dast\u011Bji objedn\xE1van\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--gap-dish-block)',
      marginTop: 'var(--space-10)'
    }
  }, dishes.map((d, i) => /*#__PURE__*/React.createElement(DishEntry, _extends({
    key: d.id
  }, d, {
    tone: "onLight",
    size: "lg",
    photoSide: i % 2 ? 'left' : 'right'
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    onClick: onOrder
  }, "Cel\xE9 menu")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--text-on-dark)',
      padding: '56px var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-2xl)',
      color: 'var(--yellow-400)'
    }
  }, "Menu Asia"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-on-dark-muted)',
      marginTop: 8
    }
  }, "Rozvoz i s sebou. Platba kartou na m\xEDst\u011B.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontSize: 'var(--text-sm)',
      color: 'var(--yellow-500)'
    }
  }, "Otev\xEDrac\xED doba"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-on-dark)',
      marginTop: 8
    }
  }, "Po\u2013P\xE1 10:30\u201321:30", /*#__PURE__*/React.createElement("br", null), "So\u2013Ne 11:00\u201321:30")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontSize: 'var(--text-sm)',
      color: 'var(--yellow-500)'
    }
  }, "Alergeny"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-on-dark)',
      marginTop: 8
    }
  }, "\u010C\xEDsla u j\xEDdel odpov\xEDdaj\xED sm\u011Brnici 1169/2011 EU."))));
}
Object.assign(window, {
  Hero,
  Highlights,
  Popular,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.AllergenRefs = __ds_scope.AllergenRefs;

__ds_ns.DishEntry = __ds_scope.DishEntry;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.VariantList = __ds_scope.VariantList;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
