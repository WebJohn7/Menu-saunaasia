import React, { useState } from 'react';

/** Native select styled to match Input. */
export function Select({ label, options = [], hint, style, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display:'grid', gap:'var(--space-2)' }}>
      {label && <span style={{ font:'var(--type-label)', textTransform:'uppercase', letterSpacing:'var(--tracking-wide)', fontFamily:'var(--font-heading)' }}>{label}</span>}
      <select onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{
        ...{
        width:'100%', boxSizing:'border-box', padding:'11px 14px',
        font:'var(--type-body)', color:'var(--text-strong)',
        background:'var(--paper-000)', border:'1px solid var(--border-on-light)',
        borderRadius:'var(--radius-sm)', outline:'none'
      },
        appearance:'none', cursor:'pointer',
        backgroundImage:'linear-gradient(45deg,transparent 50%,var(--ink-900) 50%),linear-gradient(135deg,var(--ink-900) 50%,transparent 50%)',
        backgroundPosition:'calc(100% - 18px) 20px,calc(100% - 12px) 20px',
        backgroundSize:'6px 6px,6px 6px', backgroundRepeat:'no-repeat',
        borderColor: focus ? 'var(--ink-900)' : 'var(--border-on-light)',
        boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
        ...style
      }} {...rest}>
        {options.map(o => <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>)}
      </select>
      {hint && <span style={{ font:'var(--type-variant)', color:'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
