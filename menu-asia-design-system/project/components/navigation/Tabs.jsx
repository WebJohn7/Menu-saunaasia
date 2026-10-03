import React from 'react';

/** Course navigation. Active tab carries the 3px rule from the printed section titles. */
export function Tabs({ items = [], value, onChange, tone = 'onDark', style, ...rest }) {
  const onDark = tone === 'onDark';
  return (
    <div role="tablist" style={{ display:'flex', flexWrap:'wrap', gap:'var(--space-6)', borderBottom:'1px solid ' + (onDark ? 'var(--border-on-dark)' : 'var(--border-on-light)'), ...style }} {...rest}>
      {items.map(it => {
        const v = it.value ?? it, l = it.label ?? it, on = value === v;
        return (
          <button key={v} role="tab" aria-selected={on} onClick={() => onChange && onChange(v)} style={{
            appearance:'none', background:'none', cursor:'pointer', padding:'0 0 10px',
            fontFamily:'var(--font-heading)', fontWeight:'var(--weight-bold)', fontSize:'var(--text-base)',
            letterSpacing:'var(--tracking-wide)', textTransform:'uppercase',
            color: on ? (onDark ? 'var(--yellow-500)' : 'var(--ink-900)') : (onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'),
            border:'none', borderBottom:'3px solid ' + (on ? (onDark ? 'var(--yellow-500)' : 'var(--ink-900)') : 'transparent'),
            marginBottom:-1, transition:'color var(--duration-fast) var(--ease-out)'
          }}>{l}</button>
        );
      })}
    </div>
  );
}
