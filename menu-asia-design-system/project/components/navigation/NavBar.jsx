import React from 'react';

/** Top bar: wordmark left, links centre, action right. Ink ground by default. */
export function NavBar({ brand = 'MENU ASIA', items = [], active, onNavigate, action, tone = 'onDark', style, ...rest }) {
  const onDark = tone === 'onDark';
  return (
    <header style={{
      display:'flex', alignItems:'center', gap:'var(--space-8)',
      padding:'var(--space-4) var(--space-8)',
      background: onDark ? 'var(--ink-900)' : 'var(--paper-000)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      borderBottom:'1px solid ' + (onDark ? 'var(--border-on-dark)' : 'var(--border-on-light)'), ...style
    }} {...rest}>
      <span style={{ fontFamily:'var(--font-display)', fontWeight:'var(--weight-semibold)', fontSize:'var(--text-xl)', color: onDark ? 'var(--yellow-400)' : 'var(--red-600)', whiteSpace:'nowrap' }}>{brand}</span>
      <nav style={{ display:'flex', gap:'var(--space-6)', marginLeft:'auto' }}>
        {items.map(it => {
          const v = it.value ?? it, l = it.label ?? it, on = active === v;
          return <button key={v} onClick={() => onNavigate && onNavigate(v)} style={{
            appearance:'none', background:'none', border:'none', cursor:'pointer', padding:'4px 0',
            fontFamily:'var(--font-heading)', fontWeight:'var(--weight-bold)', fontSize:'var(--text-sm)',
            letterSpacing:'var(--tracking-wide)', textTransform:'uppercase',
            color: on ? (onDark ? 'var(--yellow-500)' : 'var(--red-500)') : 'inherit',
            opacity: on ? 1 : .8
          }}>{l}</button>;
        })}
      </nav>
      {action}
    </header>
  );
}
