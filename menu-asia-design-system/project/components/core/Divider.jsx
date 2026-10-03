import React from 'react';

/** Horizontal rule. `heavy` is the 3px rule that sits under section titles. */
export function Divider({ heavy = false, tone = 'onLight', style, ...rest }) {
  return <hr style={{
    border:0, height: heavy ? 3 : 1, margin:0,
    background: heavy
      ? (tone === 'onDark' ? 'var(--yellow-500)' : 'var(--ink-900)')
      : (tone === 'onDark' ? 'var(--border-on-dark)' : 'var(--border-on-light)'),
    ...style
  }} {...rest} />;
}
