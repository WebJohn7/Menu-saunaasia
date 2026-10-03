import React from 'react';

const TONES = {
  allergen:{ bg:'transparent', fg:'var(--red-600)', bd:'var(--red-600)' },
  spicy:{ bg:'var(--red-500)', fg:'var(--paper-000)', bd:'var(--red-500)' },
  veg:{ bg:'var(--sage-600)', fg:'var(--paper-000)', bd:'var(--sage-600)' },
  gold:{ bg:'transparent', fg:'var(--gold-500)', bd:'var(--gold-500)' },
  yellow:{ bg:'var(--yellow-500)', fg:'var(--ink-900)', bd:'var(--yellow-500)' }
};

/** Small status marker. `allergen` is the circled numeral from the official allergen sheet. */
export function Badge({ tone = 'allergen', round = false, children, style, ...rest }) {
  const t = TONES[tone] || TONES.allergen;
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', justifyContent:'center',
      minWidth: round ? 22 : undefined, height:22, padding: round ? 0 : '0 8px',
      background:t.bg, color:t.fg, border:'2px solid ' + t.bd,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
      font:'var(--type-label)', fontSize:'var(--text-2xs)', letterSpacing:'var(--tracking-caps)',
      textTransform:'uppercase', ...style
    }} {...rest}>{children}</span>
  );
}
