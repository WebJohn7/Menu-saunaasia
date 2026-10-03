import React, { useState } from 'react';

/** Square icon-only control — used for menu toggles, close buttons, quantity steppers. */
export function IconButton({ tone = 'onLight', size = 40, label, children, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const onDark = tone === 'onDark';
  return (
    <button aria-label={label} title={label}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width:size, height:size, display:'inline-flex', alignItems:'center', justifyContent:'center',
        background: hover ? (onDark ? 'rgba(255,255,255,.12)' : 'rgba(10,10,10,.07)') : 'transparent',
        color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
        border:'1px solid ' + (onDark ? 'var(--border-on-dark)' : 'var(--border-on-light)'),
        borderRadius:'var(--radius-sm)', cursor:'pointer',
        transition:'background var(--duration-fast) var(--ease-out)', ...style
      }} {...rest}>{children}</button>
  );
}
