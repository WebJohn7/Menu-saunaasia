import React from 'react';

const SIZES = { sm:'var(--text-base)', md:'var(--text-xl)', lg:'var(--text-3xl)' };

/** Price in Czech crowns. Yellow on the dark pages, chilli red on the light pages. */
export function PriceTag({ amount, currency = 'kč', tone = 'onDark', size = 'md', style, ...rest }) {
  return (
    <span style={{
      fontFamily:'var(--font-body)', fontWeight:'var(--weight-bold)', fontSize:SIZES[size] || SIZES.md,
      lineHeight:1, whiteSpace:'nowrap',
      color: tone === 'onDark' ? 'var(--price-on-dark)' : 'var(--price-on-light)', ...style
    }} {...rest}>{amount} {currency}</span>
  );
}
