import React, { useState } from 'react';

const PALETTE = {
  primary:{ bg:'var(--yellow-500)', fg:'var(--ink-900)', bd:'var(--yellow-500)', hover:'var(--yellow-400)', active:'var(--yellow-600)' },
  dark:{ bg:'var(--ink-900)', fg:'var(--paper-000)', bd:'var(--ink-900)', hover:'var(--ink-700)', active:'var(--ink-600)' },
  danger:{ bg:'var(--red-500)', fg:'var(--paper-000)', bd:'var(--red-500)', hover:'var(--red-400)', active:'var(--red-600)' },
  outline:{ bg:'transparent', fg:'currentColor', bd:'currentColor', hover:'rgba(255,255,255,.10)', active:'rgba(255,255,255,.18)' },
  ghost:{ bg:'transparent', fg:'currentColor', bd:'transparent', hover:'rgba(127,127,127,.14)', active:'rgba(127,127,127,.22)' }
};
const SIZES = {
  sm:{ padding:'7px 14px', fontSize:'var(--text-xs)', gap:'6px' },
  md:{ padding:'11px 20px', fontSize:'var(--text-sm)', gap:'8px' },
  lg:{ padding:'15px 30px', fontSize:'var(--text-base)', gap:'10px' }
};

/** Square-cornered, uppercase condensed button. Yellow is the menu's "price" colour and doubles as the primary action. */
export function Button({ variant = 'primary', size = 'md', full = false, disabled = false, icon = null, iconRight = null, children, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const p = PALETTE[variant] || PALETTE.primary;
  const s = SIZES[size] || SIZES.md;
  const filled = variant === 'primary' || variant === 'dark' || variant === 'danger';
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)}
      style={{
        display:full ? 'flex' : 'inline-flex', width: full ? '100%' : undefined,
        alignItems:'center', justifyContent:'center', gap:s.gap,
        padding:s.padding, fontSize:s.fontSize,
        fontFamily:'var(--font-heading)', fontWeight:'var(--weight-bold)',
        letterSpacing:'var(--tracking-wide)', textTransform:'uppercase',
        background: filled ? (down ? p.active : hover ? p.hover : p.bg) : (down ? p.active : hover ? p.hover : p.bg),
        color: filled ? p.fg : 'currentColor',
        border:'2px solid ' + p.bd,
        borderRadius:'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transform: down && !disabled ? 'translateY(1px)' : 'none',
        transition:'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
        ...style
      }}
      {...rest}
    >
      {icon}{children}{iconRight}
    </button>
  );
}
