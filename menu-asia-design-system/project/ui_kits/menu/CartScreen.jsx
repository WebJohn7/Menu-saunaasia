const { NavBar, Button, Input, Select, Checkbox, Switch, Divider, PriceTag, IconButton } = window.MenuAsiaDesignSystem_345094;

function CartScreen({ items, onBack, onRemove, onSubmit }) {
  const [delivery, setDelivery] = React.useState(true);
  const total = items.reduce((s, i) => s + Number(i.price), 0);
  return (
    <div className="bg-light-page" style={{ minHeight:'100%' }}>
      <NavBar tone="onLight" items={['Menu','Alergeny','Kontakt']} active="Menu" onNavigate={onBack}
        action={<Button size="sm" variant="ghost" onClick={onBack}>Zpět do menu</Button>} />
      <div style={{ maxWidth:760, margin:'0 auto', padding:'40px 24px 72px' }}>
        <h2 style={{ margin:'0 0 24px', font:'var(--type-section)', textTransform:'uppercase', letterSpacing:'var(--tracking-caps)' }}>Objednávka</h2>
        {items.length === 0 && <p style={{ font:'var(--type-body)' }}>Košík je prázdný.</p>}
        {items.map((it, i) => (
          <div key={i}>
            <div style={{ display:'flex', alignItems:'center', gap:16, padding:'14px 0' }}>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'var(--text-lg)', textTransform:'uppercase', letterSpacing:'var(--tracking-caps)' }}>{it.name}</div>
                {it.variant && <div style={{ font:'var(--type-variant)', color:'var(--text-muted)' }}>{it.variant}</div>}
              </div>
              <PriceTag amount={it.price} tone="onLight" />
              <IconButton label="Odebrat" onClick={() => onRemove(i)}>×</IconButton>
            </div>
            <Divider />
          </div>
        ))}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', margin:'20px 0 32px' }}>
          <span style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'var(--text-xl)', textTransform:'uppercase' }}>Celkem</span>
          <PriceTag amount={total} tone="onLight" size="lg" />
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px 24px' }}>
          <Input label="Jméno" placeholder="Jan Novák" />
          <Input label="Telefon" placeholder="+420 …" />
          <Select label="Čas vyzvednutí" options={['Co nejdříve','za 30 minut','za 60 minut']} />
          <div style={{ display:'grid', gap:12, alignContent:'end' }}>
            <Switch checked={delivery} onChange={e => setDelivery(e.target.checked)} label="Rozvoz" />
            <Checkbox label="Bez arašídů" checked={false} onChange={() => {}} />
          </div>
        </div>
        <Button size="lg" variant="dark" full style={{ marginTop:32 }} onClick={onSubmit}>Odeslat objednávku</Button>
      </div>
    </div>
  );
}
Object.assign(window, { CartScreen });
