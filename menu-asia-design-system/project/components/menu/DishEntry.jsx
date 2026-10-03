import React from 'react';
import { AllergenRefs } from './AllergenRefs.jsx';
import { PriceTag } from './PriceTag.jsx';
import { VariantList } from './VariantList.jsx';
import { Badge } from '../core/Badge.jsx';

/** One menu item exactly as it is set on the printed page: number, name, allergens, price, description, variants, cut-out photo. */
export function DishEntry({
  number, name, allergens = [], price, variants = [], description,
  photo, photoAlt = '', photoSide = 'right', spicy = false,
  tone = 'onDark', size = 'md', style, ...rest
}) {
  const onDark = tone === 'onDark';
  const nameSize = size === 'lg' ? 'var(--text-2xl)' : size === 'sm' ? 'var(--text-lg)' : 'var(--text-xl)';
  const text = (
    <div style={{ minWidth:0 }}>
      <h3 style={{
        margin:0, fontFamily:'var(--font-heading)', fontWeight:'var(--weight-bold)',
        fontSize:nameSize, lineHeight:'var(--leading-snug)', letterSpacing:'var(--tracking-caps)',
        textTransform:'uppercase', color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
        display:'flex', alignItems:'baseline', flexWrap:'wrap', columnGap:'var(--space-3)'
      }}>
        <span>{number ? number + '. ' : ''}{name}<AllergenRefs codes={allergens} />{spicy && <Badge tone="spicy" style={{ marginLeft:10, verticalAlign:'middle' }}>Pikantní</Badge>}</span>
        {price != null && <PriceTag amount={price} tone={tone} size={size === 'lg' ? 'lg' : 'md'} />}
      </h3>
      {description && <p style={{
        margin:'var(--gap-name-to-desc) 0 0', maxWidth:'var(--measure-desc)',
        font:'var(--type-body)', color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)'
      }}>{description}</p>}
      {variants.length > 0 && <div style={{ marginTop:'var(--gap-desc-to-variants)' }}>
        <VariantList items={variants} tone={tone} />
      </div>}
    </div>
  );
  const img = photo ? (
    <img src={photo} alt={photoAlt || name} style={{
      width:'100%', maxWidth:320, display:'block',
      filter: onDark ? 'drop-shadow(var(--shadow-plate))' : 'drop-shadow(var(--shadow-plate-light))'
    }} />
  ) : null;
  return (
    <article style={{
      display:'grid', alignItems:'start', columnGap:'var(--space-8)', rowGap:'var(--space-4)',
      gridTemplateColumns: photo ? (photoSide === 'left' ? 'minmax(0,320px) 1fr' : '1fr minmax(0,320px)') : '1fr',
      ...style
    }} {...rest}>
      {photo && photoSide === 'left' ? <>{img}{text}</> : <>{text}{img}</>}
    </article>
  );
}
