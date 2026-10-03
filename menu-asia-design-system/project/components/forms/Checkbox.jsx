import React from 'react';

/** Square checkbox with an ink fill and a yellow check. */
export function Checkbox({ label, checked = false, onChange, disabled = false, style, ...rest }) {
  return (
    <label style={{ display:'inline-flex', alignItems:'center', gap:'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1, ...style }}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position:'absolute', opacity:0, width:0, height:0 }} {...rest} />
      <span aria-hidden style={{
        width:20, height:20, display:'inline-flex', alignItems:'center', justifyContent:'center',
        background: checked ? 'var(--ink-900)' : 'transparent',
        border:'2px solid ' + (checked ? 'var(--ink-900)' : 'currentColor'),
        borderRadius:'var(--radius-sm)', color:'var(--yellow-500)',
        font:'var(--type-label)', fontSize:13, lineHeight:1
      }}>{checked ? '✓' : ''}</span>
      {label && <span style={{ font:'var(--type-body)' }}>{label}</span>}
    </label>
  );
}
