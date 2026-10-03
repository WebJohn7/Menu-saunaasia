import React from 'react';

/** On/off toggle — dark page mode, vegetarian-only filter, delivery vs pickup. */
export function Switch({ checked = false, onChange, label, disabled = false, style, ...rest }) {
  return (
    <label style={{ display:'inline-flex', alignItems:'center', gap:'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1, ...style }}>
      <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={onChange} style={{ position:'absolute', opacity:0, width:0, height:0 }} {...rest} />
      <span aria-hidden style={{
        width:46, height:24, padding:2, display:'inline-flex', alignItems:'center',
        background: checked ? 'var(--yellow-500)' : 'rgba(127,127,127,.35)',
        border:'1px solid ' + (checked ? 'var(--yellow-600)' : 'transparent'),
        borderRadius:'var(--radius-pill)',
        transition:'background var(--duration-base) var(--ease-out)'
      }}>
        <span style={{
          width:20, height:20, borderRadius:'var(--radius-pill)', background:'var(--ink-900)',
          transform: checked ? 'translateX(22px)' : 'translateX(0)',
          transition:'transform var(--duration-base) var(--ease-out)'
        }} />
      </span>
      {label && <span style={{ font:'var(--type-body)' }}>{label}</span>}
    </label>
  );
}
