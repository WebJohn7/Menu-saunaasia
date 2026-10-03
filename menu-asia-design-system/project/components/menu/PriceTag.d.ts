import * as React from 'react';
export interface PriceTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  amount: number | string;
  /** defaults to "kč" */
  currency?: string;
  tone?: 'onDark' | 'onLight';
  size?: 'sm' | 'md' | 'lg';
}
export declare function PriceTag(props: PriceTagProps): JSX.Element;
