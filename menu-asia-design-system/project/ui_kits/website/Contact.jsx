const { Input, Select, Button, SectionTitle, Divider } = window.MenuAsiaDesignSystem_345094;

function Contact({ onSent }) {
  return (
    <section style={{ background:'var(--paper-000)', padding:'72px var(--page-margin)' }}>
      <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,420px)', gap:'var(--space-16)' }}>
        <div>
          <SectionTitle variant="rule" tone="onLight">Kontakt</SectionTitle>
          <p style={{ font:'var(--type-body)', fontSize:'var(--text-lg)', marginTop:'var(--space-6)' }}>
            Vodičkova 12, Praha 1<br/>+420 777 123 456<br/>ahoj@menuasia.cz
          </p>
          <Divider style={{ margin:'var(--space-8) 0' }} />
          <p style={{ font:'var(--type-body)' }}>Po–Pá 10:30–21:30 · So–Ne 11:00–21:30</p>
          <p style={{ font:'var(--type-variant)', color:'var(--text-muted)' }}>Rezervace na více než 6 osob volejte prosím telefonicky.</p>
        </div>
        <div style={{ display:'grid', gap:'var(--space-5)', alignContent:'start' }}>
          <Input label="Jméno" placeholder="Jan Novák" />
          <Input label="Telefon" placeholder="+420 …" />
          <Select label="Počet osob" options={['2','3','4','5','6']} />
          <Input label="Datum a čas" placeholder="12. 9. v 19:00" />
          <Button variant="dark" size="lg" full onClick={onSent}>Rezervovat stůl</Button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Contact });
