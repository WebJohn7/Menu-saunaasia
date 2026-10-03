import React from 'react';

/** Superscript allergen numbers that follow a dish name, e.g. "1,2,6" (EU 1169/2011 list). */
export function AllergenRefs({ codes = [], style, ...rest }) {
  if (!codes.length) return null;
  return (
    <sup style={{
      font:'var(--type-label)', fontSize:'var(--text-2xs)', fontWeight:'var(--weight-semibold)',
      letterSpacing:'var(--tracking-caps)', marginLeft:6, verticalAlign:'super', opacity:.95, ...style
    }} {...rest}>{codes.join(',')}</sup>
  );
}
