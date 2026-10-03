import * as React from 'react';
export interface SelectOption { value: string; label: string }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  /** plain strings or {value,label} pairs */
  options?: Array<SelectOption | string>;
  hint?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
