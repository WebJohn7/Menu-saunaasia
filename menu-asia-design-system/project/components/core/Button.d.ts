import * as React from 'react';

/**
 * Primary action control. Square corners, uppercase Oswald, 2px border.
 * @startingPoint section="Core" subtitle="Buttons in every variant and size" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = signal yellow, dark = ink fill, danger = chilli red, outline/ghost inherit colour */
  variant?: 'primary' | 'dark' | 'danger' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** stretch to the container width */
  full?: boolean;
  disabled?: boolean;
  /** leading element, usually an <svg> icon */
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
