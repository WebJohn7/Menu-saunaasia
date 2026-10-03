import * as React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'light' | 'dark';
  /** optional top image (dish photography) */
  image?: string;
  imageAlt?: string;
  /** CSS padding for the body */
  padding?: string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
