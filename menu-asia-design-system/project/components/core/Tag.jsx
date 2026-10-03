import React from 'react';

/** Filter / category chip. Square, uppercase, thin rule; selected state fills. */
export function Tag({ selected = false, tone = 'onLight', children, style, ...rest }) {
  const onDark = tone === 'onDark';
  return (
    <button type="button" style={{
      padding:'7px 14px', cursor:'pointer',
      font:'var(--type-label)', fontFamily:'var(--font-heading)', fontSize:'var(--text-xs)',
      letterSpacing:'var(--tracking-wide)', textTransform:'uppercase',
      background: selected ? (onDark ? 'var(--yellow-500)' : 'var(--ink-900)') : 'transparent',
      color: selected ? (onDark ? 'var(--ink-900)' : 'var(--paper-000)') : 'inherit',
      border:'1px solid ' + (selected ? 'transparent' : (onDark ? 'var(--border-on-dark)' : 'var(--border-on-light)')),
      borderRadius:'var(--radius-sm)',
      transition:'var(--transition-base)', ...style
    }} {...rest}>{children}</button>
  );
}
