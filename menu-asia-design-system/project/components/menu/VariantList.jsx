import React from 'react';

/** The "- s kuřecím masem … 125 kč" rows under a dish description. */
export function VariantList({ items = [], tone = 'onDark', align = 'auto', style, ...rest }) {
  return (
    <ul style={{ listStyle:'none', margin:0, padding:0, display:'grid', gap:'var(--gap-variant-row)', ...style }} {...rest}>
      {items.map((it, i) => (
        <li key={i} style={{
          display:'grid', gridTemplateColumns: align === 'wide' ? '1fr auto' : 'max-content max-content',
          columnGap:'var(--space-6)',
          font:'var(--type-variant)',
          color: tone === 'onDark' ? 'var(--text-on-dark)' : 'var(--text-body)'
        }}>
          <span>- {it.label}</span>
          <span style={{
            fontWeight:'var(--weight-bold)',
            color: tone === 'onDark' ? 'var(--price-on-dark)' : 'var(--price-on-light)'
          }}>{it.price} {it.currency || 'kč'}</span>
        </li>
      ))}
    </ul>
  );
}
