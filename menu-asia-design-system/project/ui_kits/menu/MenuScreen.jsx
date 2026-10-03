const { NavBar, Tabs, SectionTitle, DishEntry, Button, Badge } = window.MenuAsiaDesignSystem_345094;

function MenuScreen({ course, setCourse, onOpen, onCart, cartCount }) {
  const dishes = window.MENU_DATA.dishes.filter(d => d.course === course);
  const dark = course === 'Předkrmy' || course === 'Rýže' || course === 'Speciality';
  return (
    <div className={dark ? 'bg-dark-page' : 'bg-light-page'} style={{ minHeight:'100%', position:'relative', overflow:'hidden' }}>
      {dark && <img src="../../assets/ornaments/gold-leaf-right.png" alt="" style={{ position:'absolute', right:0, top:220, width:210, opacity:.9, pointerEvents:'none' }} />}
      {dark && <img src="../../assets/ornaments/gold-leaf-left.png" alt="" style={{ position:'absolute', left:0, bottom:0, width:230, opacity:.9, pointerEvents:'none' }} />}
      <NavBar tone={dark ? 'onDark' : 'onLight'} items={['Menu','Alergeny','Kontakt']} active="Menu"
        onNavigate={v => v === 'Alergeny' && onOpen.allergens()}
        action={<Button size="sm" variant={dark ? 'primary' : 'dark'} onClick={onCart}>Košík · {cartCount}</Button>} />
      <div style={{ padding:'40px var(--page-margin) 72px', position:'relative' }}>
        <SectionTitle tone={dark ? 'onDark' : 'onLight'} style={{ fontSize:'var(--text-5xl)' }}>{course}</SectionTitle>
        <div style={{ margin:'28px 0 40px' }}>
          <Tabs tone={dark ? 'onDark' : 'onLight'} items={window.MENU_DATA.courses} value={course} onChange={setCourse} />
        </div>
        <div style={{ display:'grid', gap:'var(--gap-dish-block)' }}>
          {dishes.map((d, i) => (
            <div key={d.id} onClick={() => onOpen.dish(d)} style={{ cursor:'pointer' }}>
              <DishEntry {...d} tone={dark ? 'onDark' : 'onLight'} size="lg" photoSide={i % 2 ? 'left' : 'right'} />
            </div>
          ))}
        </div>
        <p style={{ marginTop:56, font:'var(--type-variant)', color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' }}>
          Čísla u názvů jsou alergeny dle směrnice 1169/2011 EU. <a href="#" onClick={e => { e.preventDefault(); onOpen.allergens(); }} style={{ color: dark ? 'var(--yellow-500)' : 'var(--red-500)' }}>Seznam alergenů</a>
        </p>
      </div>
    </div>
  );
}
Object.assign(window, { MenuScreen });
