const { Dialog, Radio, Button, Badge, PriceTag, IconButton } = window.MenuAsiaDesignSystem_345094;

function DishDialog({ dish, onClose, onAdd }) {
  const variants = dish && dish.variants ? dish.variants : [];
  const [variant, setVariant] = React.useState(variants.length ? variants[0].label : null);
  React.useEffect(() => { setVariant(variants.length ? variants[0].label : null); }, [dish && dish.id]);
  if (!dish) return null;
  const chosen = variants.find(v => v.label === variant);
  const price = chosen ? chosen.price : dish.price;
  return (
    <Dialog open title={(dish.number ? dish.number + '. ' : '') + dish.name} onClose={onClose} width={520}
      footer={<><Button variant="ghost" size="sm" onClick={onClose}>Zpět</Button><Button size="sm" onClick={() => onAdd(dish, variant, price)}>Přidat · {price} kč</Button></>}>
      {dish.photo && <img src={dish.photo} alt={dish.name} style={{ width:'100%', maxHeight:220, objectFit:'contain', marginBottom:'var(--space-4)' }} />}
      <p style={{ margin:'0 0 var(--space-4)' }}>{dish.description}</p>
      <div style={{ display:'flex', gap:8, marginBottom:'var(--space-4)', flexWrap:'wrap' }}>
        {dish.spicy && <Badge tone="spicy">Pikantní</Badge>}
        {dish.allergens.map(a => <Badge key={a} tone="allergen" round>{a}</Badge>)}
      </div>
      {variants.length > 0 && <Radio name="variant" value={variant} onChange={setVariant}
        options={variants.map(v => ({ value:v.label, label:v.label + ' — ' + v.price + ' kč' }))} />}
      {!variants.length && <PriceTag amount={dish.price} tone="onLight" size="lg" />}
    </Dialog>
  );
}
Object.assign(window, { DishDialog });
