import React from 'react';

/** Centred modal on a dark scrim. Square panel, 3px yellow top rule. */
export function Dialog({ open = false, title, onClose, footer, children, width = 480, style, ...rest }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, background:'var(--surface-overlay)', backdropFilter:'var(--blur-overlay)',
      display:'flex', alignItems:'center', justifyContent:'center', padding:'var(--space-6)', zIndex:50
    }}>
      <div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()} style={{
        width:'100%', maxWidth:width, background:'var(--paper-000)', color:'var(--text-body)',
        borderTop:'3px solid var(--yellow-500)', borderRadius:'var(--radius-none)',
        boxShadow:'var(--shadow-raised)', ...style
      }} {...rest}>
        {title && <h3 style={{
          margin:0, padding:'var(--space-5) var(--space-6)',
          fontFamily:'var(--font-heading)', fontWeight:'var(--weight-bold)', fontSize:'var(--text-xl)',
          letterSpacing:'var(--tracking-caps)', textTransform:'uppercase',
          borderBottom:'1px solid var(--border-on-light)'
        }}>{title}</h3>}
        <div style={{ padding:'var(--space-6)', font:'var(--type-body)' }}>{children}</div>
        {footer && <div style={{ padding:'var(--space-4) var(--space-6)', display:'flex', justifyContent:'flex-end', gap:'var(--space-3)', borderTop:'1px solid var(--border-on-light)' }}>{footer}</div>}
      </div>
    </div>
  );
}
