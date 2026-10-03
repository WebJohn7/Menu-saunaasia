const { Button, SectionTitle, DishEntry, Tag, Divider, Card, PriceTag } = window.MenuAsiaDesignSystem_345094;

function Hero({ onOrder }) {
  return (
    <section className="bg-dark-page" style={{ position:'relative', overflow:'hidden', padding:'88px var(--page-margin) 96px' }}>
      <img src="../../assets/ornaments/gold-leaf-left.png" alt="" style={{ position:'absolute', left:0, bottom:-20, width:280, pointerEvents:'none' }} />
      <img src="../../assets/ornaments/gold-leaf-right.png" alt="" style={{ position:'absolute', right:0, top:-30, width:240, pointerEvents:'none' }} />
      <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,460px)', gap:'var(--space-16)', alignItems:'center', position:'relative' }}>
        <div>
          <p style={{ margin:0, fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'var(--text-sm)', letterSpacing:'var(--tracking-wide)', textTransform:'uppercase', color:'var(--gold-300)' }}>Vietnamská · thajská · japonská kuchyně</p>
          <h1 style={{ margin:'10px 0 0', fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--text-6xl)', lineHeight:'var(--leading-tight)', color:'var(--yellow-400)' }}>Menu Asia</h1>
          <p style={{ margin:'18px 0 0', font:'var(--type-body)', fontSize:'var(--text-lg)', color:'var(--text-on-dark)', maxWidth:'44ch' }}>
            Pho vaříme na vývaru přes noc, závitky balíme ráno. Vaříme každý den od 10:30 do 21:30.
          </p>
          <div style={{ display:'flex', gap:'var(--space-4)', marginTop:'var(--space-8)' }}>
            <Button size="lg" onClick={onOrder}>Objednat online</Button>
            <Button size="lg" variant="outline" onClick={onOrder} style={{ color:'var(--paper-000)' }}>Prohlédnout menu</Button>
          </div>
        </div>
        <img src="../../assets/dishes/pho.png" alt="Pho" style={{ width:'100%', filter:'drop-shadow(var(--shadow-plate))' }} />
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    ['Pho', 'Vývar tažený 12 hodin, rýžové nudle, čerstvé bylinky.', '../../assets/dishes/pho-xao.png'],
    ['Wok', 'Nudle a rýže z rozpálené pánve, ráno nakoupená zelenina.', '../../assets/dishes/pad-thai.png'],
    ['Křupavé', 'Kachna a kuře dozlatova, podávané s rýží nebo hranolky.', '../../assets/dishes/crispy-chicken.png']
  ];
  return (
    <section style={{ background:'var(--paper-000)', padding:'72px var(--page-margin)' }}>
      <SectionTitle variant="rule" tone="onLight">Co u nás jíst</SectionTitle>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,minmax(0,1fr))', gap:'var(--space-8)', marginTop:'var(--space-8)' }}>
        {items.map(([t, d, img]) => (
          <Card key={t} tone="light" image={img} imageAlt={t}>
            <h3 style={{ margin:0, fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'var(--text-xl)', textTransform:'uppercase', letterSpacing:'var(--tracking-caps)' }}>{t}</h3>
            <p style={{ margin:'6px 0 0', font:'var(--type-body)' }}>{d}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Popular({ onOrder }) {
  const dishes = window.MENU_DATA.dishes.filter(d => [5,7,9].includes(d.id));
  return (
    <section className="bg-light-page" style={{ padding:'72px var(--page-margin)' }}>
      <SectionTitle variant="rule" tone="onLight">Nejčastěji objednávané</SectionTitle>
      <div style={{ display:'grid', gap:'var(--gap-dish-block)', marginTop:'var(--space-10)' }}>
        {dishes.map((d, i) => <DishEntry key={d.id} {...d} tone="onLight" size="lg" photoSide={i % 2 ? 'left' : 'right'} />)}
      </div>
      <div style={{ marginTop:'var(--space-10)' }}><Button variant="dark" size="lg" onClick={onOrder}>Celé menu</Button></div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background:'var(--ink-900)', color:'var(--text-on-dark)', padding:'56px var(--page-margin)' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,minmax(0,1fr))', gap:'var(--space-10)' }}>
        <div>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--text-2xl)', color:'var(--yellow-400)' }}>Menu Asia</div>
          <p style={{ font:'var(--type-body)', color:'var(--text-on-dark-muted)', marginTop:8 }}>Rozvoz i s sebou. Platba kartou na místě.</p>
        </div>
        <div>
          <div style={{ fontFamily:'var(--font-heading)', fontWeight:700, textTransform:'uppercase', letterSpacing:'var(--tracking-wide)', fontSize:'var(--text-sm)', color:'var(--yellow-500)' }}>Otevírací doba</div>
          <p style={{ font:'var(--type-body)', color:'var(--text-on-dark)', marginTop:8 }}>Po–Pá 10:30–21:30<br/>So–Ne 11:00–21:30</p>
        </div>
        <div>
          <div style={{ fontFamily:'var(--font-heading)', fontWeight:700, textTransform:'uppercase', letterSpacing:'var(--tracking-wide)', fontSize:'var(--text-sm)', color:'var(--yellow-500)' }}>Alergeny</div>
          <p style={{ font:'var(--type-body)', color:'var(--text-on-dark)', marginTop:8 }}>Čísla u jídel odpovídají směrnici 1169/2011 EU.</p>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Hero, Highlights, Popular, Footer });
