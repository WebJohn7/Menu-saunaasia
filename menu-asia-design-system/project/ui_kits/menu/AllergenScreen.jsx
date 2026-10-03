const { NavBar, Button, Badge } = window.MenuAsiaDesignSystem_345094;

function AllergenScreen({ onBack }) {
  return (
    <div style={{ minHeight:'100%', background:'var(--paper-000)' }}>
      <NavBar tone="onLight" items={['Menu','Alergeny','Kontakt']} active="Alergeny" onNavigate={onBack}
        action={<Button size="sm" variant="ghost" onClick={onBack}>Zpět do menu</Button>} />
      <div style={{ maxWidth:820, margin:'0 auto', padding:'40px 24px 72px' }}>
        <h2 style={{ margin:0, fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'var(--text-4xl)', letterSpacing:'var(--tracking-caps)', textTransform:'uppercase', color:'var(--red-600)' }}>Seznam alergenů</h2>
        <p style={{ margin:'6px 0 28px', font:'var(--type-body)', fontStyle:'italic', color:'var(--text-muted)' }}>publikovaný ve směrnici 2000/89 ES, od 13. 12. 2014 směrnicí 1169/2011 EU</p>
        <div style={{ display:'grid', gap:14 }}>
          {window.MENU_DATA.allergens.map(([n, title, sub]) => (
            <div key={n} style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
              <Badge tone="allergen" round style={{ width:30, height:30, minWidth:30, fontSize:'var(--text-sm)' }}>{n}</Badge>
              <div>
                <div style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'var(--text-xl)', textTransform:'uppercase', letterSpacing:'var(--tracking-caps)' }}>{title}</div>
                <div style={{ font:'var(--type-variant)', color:'var(--text-muted)' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { AllergenScreen });
