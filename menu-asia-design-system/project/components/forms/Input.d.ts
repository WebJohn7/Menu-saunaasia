import * as React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** uppercase condensed label above the field */
  label?: string;
  /** helper or error text below the field */
  hint?: string;
  invalid?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
