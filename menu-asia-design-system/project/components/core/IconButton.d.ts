import * as React from 'react';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** which ground it sits on — decides border and hover wash */
  tone?: 'onLight' | 'onDark';
  /** square edge length in px (default 40) */
  size?: number;
  /** accessible label; also the title tooltip */
  label: string;
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
