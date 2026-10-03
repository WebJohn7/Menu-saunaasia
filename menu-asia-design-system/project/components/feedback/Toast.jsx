import React from 'react';

/** Ink slab that slides in at the bottom. Yellow left-to-right rule on top, no rounding. */
export function Toast({ message, action, tone = 'neutral', style, ...rest }) {
  const bar = tone === 'danger' ? 'var(--red-500)' : tone === 'success' ? 'var(--state-success)' : 'var(--yellow-500)';
  return (
    <div role="status" style={{
      display:'flex', alignItems:'center', gap:'var(--space-5)',
      padding:'var(--space-4) var(--space-5)',
      background:'var(--ink-900)', color:'var(--text-on-dark)',
      borderTop:'3px solid ' + bar, boxShadow:'var(--shadow-raised)',
      font:'var(--type-body)', ...style
    }} {...rest}>
      <span style={{ flex:1 }}>{message}</span>{action}
    </div>
  );
}
