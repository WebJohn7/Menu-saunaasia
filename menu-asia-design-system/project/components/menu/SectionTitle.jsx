import React from 'react';

/** Page / course title. `display` is the big rounded yellow wordmark ("Předkrmy"); `rule` is the compact uppercase variant. */
export function SectionTitle({ children, variant = 'display', tone = 'onDark', style, ...rest }) {
  const onDark = tone === 'onDark';
  if (variant === 'display') {
    return (
      <h2 style={{
        margin:0, fontFamily:'var(--font-display)', fontWeight:'var(--weight-semibold)',
        fontSize:'var(--text-6xl)', lineHeight:'var(--leading-tight)',
        color: onDark ? 'var(--yellow-400)' : 'var(--red-600)', ...style
      }} {...rest}>{children}</h2>
    );
  }
  return (
    <h2 style={{
      margin:0, fontFamily:'var(--font-heading)', fontWeight:'var(--weight-bold)',
      fontSize:'var(--text-2xl)', letterSpacing:'var(--tracking-caps)', textTransform:'uppercase',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      borderBottom:'3px solid ' + (onDark ? 'var(--yellow-500)' : 'var(--ink-900)'),
      paddingBottom:'var(--space-2)', ...style
    }} {...rest}>{children}</h2>
  );
}
