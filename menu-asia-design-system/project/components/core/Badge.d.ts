import * as React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'allergen' | 'spicy' | 'veg' | 'gold' | 'yellow';
  /** circular pill — matches the numbered circles on the allergen sheet */
  round?: boolean;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
