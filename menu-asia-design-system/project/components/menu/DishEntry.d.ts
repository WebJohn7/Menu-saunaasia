import * as React from 'react';
import { VariantItem } from './VariantList';
/**
 * A single menu item set the way the printed menu sets it.
 * @startingPoint section="Menu" subtitle="Dish entry with photo, price and variants" viewport="700x300"
 */
export interface DishEntryProps extends React.HTMLAttributes<HTMLElement> {
  /** menu number, e.g. 13 or "5A" */
  number?: number | string;
  name: string;
  /** allergen codes rendered as a superscript after the name */
  allergens?: Array<number | string>;
  /** single price; omit when the dish only has variants */
  price?: number | string;
  variants?: VariantItem[];
  /** Czech ingredient list, sentence case, comma separated */
  description?: string;
  photo?: string;
  photoAlt?: string;
  photoSide?: 'left' | 'right';
  spicy?: boolean;
  tone?: 'onDark' | 'onLight';
  size?: 'sm' | 'md' | 'lg';
}
export declare function DishEntry(props: DishEntryProps): JSX.Element;
