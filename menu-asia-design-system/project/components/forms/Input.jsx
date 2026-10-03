import React, { useState } from 'react';

/** Single-line text field. Square, hairline border, yellow focus rule. */
export function Input({ label, hint, invalid = false, style, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display:'grid', gap:'var(--space-2)' }}>
      {label && <span style={{ font:'var(--type-label)', textTransform:'uppercase', letterSpacing:'var(--tracking-wide)', fontFamily:'var(--font-heading)' }}>{label}</span>}
      <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{
        ...{
        width:'100%', boxSizing:'border-box', padding:'11px 14px',
        font:'var(--type-body)', color:'var(--text-strong)',
        background:'var(--paper-000)', border:'1px solid var(--border-on-light)',
        borderRadius:'var(--radius-sm)', outline:'none'
      },
        borderColor: invalid ? 'var(--red-500)' : focus ? 'var(--ink-900)' : 'var(--border-on-light)',
        boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
        transition:'box-shadow var(--duration-fast) var(--ease-out)',
        ...style
      }} {...rest} />
      {hint && <span style={{ font:'var(--type-variant)', color: invalid ? 'var(--red-500)' : 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
