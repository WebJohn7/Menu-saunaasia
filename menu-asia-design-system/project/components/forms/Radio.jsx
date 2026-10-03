import React from 'react';

/** Radio group for mutually exclusive protein / size choices. */
export function Radio({ name, options = [], value, onChange, style, ...rest }) {
  return (
    <div role="radiogroup" style={{ display:'grid', gap:'var(--space-3)', ...style }} {...rest}>
      {options.map(o => {
        const v = o.value ?? o, l = o.label ?? o, on = value === v;
        return (
          <label key={v} style={{ display:'inline-flex', alignItems:'center', gap:'var(--space-3)', cursor:'pointer' }}>
            <input type="radio" name={name} value={v} checked={on} onChange={() => onChange && onChange(v)} style={{ position:'absolute', opacity:0, width:0, height:0 }} />
            <span aria-hidden style={{
              width:20, height:20, borderRadius:'var(--radius-pill)',
              border:'2px solid ' + (on ? 'var(--ink-900)' : 'currentColor'),
              display:'inline-flex', alignItems:'center', justifyContent:'center'
            }}>
              <span style={{ width:10, height:10, borderRadius:'var(--radius-pill)', background: on ? 'var(--ink-900)' : 'transparent' }} />
            </span>
            <span style={{ font:'var(--type-body)' }}>{l}</span>
          </label>
        );
      })}
    </div>
  );
}
