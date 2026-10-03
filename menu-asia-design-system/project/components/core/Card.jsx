import React from 'react';

/** Flat, square-cornered container. `tone` picks the menu's two grounds. */
export function Card({ tone = 'light', image, imageAlt = '', padding = 'var(--space-6)', children, style, ...rest }) {
  const dark = tone === 'dark';
  return (
    <div style={{
      background: dark ? 'var(--surface-dark-raised)' : 'var(--surface-card)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-body)',
      border:'1px solid ' + (dark ? 'var(--border-on-dark)' : 'var(--border-on-light)'),
      borderRadius:'var(--radius-none)',
      boxShadow: dark ? 'var(--shadow-inset-top)' : 'var(--shadow-card)',
      overflow:'hidden', ...style
    }} {...rest}>
      {image && <img src={image} alt={imageAlt} style={{ display:'block', width:'100%', height:180, objectFit:'cover' }} />}
      <div style={{ padding }}>{children}</div>
    </div>
  );
}
