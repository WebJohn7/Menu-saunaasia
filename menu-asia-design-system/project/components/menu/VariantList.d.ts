import * as React from 'react';
export interface VariantItem { label: string; price: number | string; currency?: string }
export interface VariantListProps extends React.HTMLAttributes<HTMLUListElement> {
  items?: VariantItem[];
  tone?: 'onDark' | 'onLight';
  /** "auto" hugs the label column (print behaviour); "wide" pushes prices to the right edge */
  align?: 'auto' | 'wide';
}
export declare function VariantList(props: VariantListProps): JSX.Element;
