import * as React from 'react';
export interface AllergenRefsProps extends React.HTMLAttributes<HTMLElement> {
  /** allergen numbers from the official Czech list, in ascending order */
  codes?: Array<number | string>;
}
export declare function AllergenRefs(props: AllergenRefsProps): JSX.Element | null;
