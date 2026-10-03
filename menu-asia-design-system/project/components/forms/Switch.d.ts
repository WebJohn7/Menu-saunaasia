import * as React from 'react';
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
}
export declare function Switch(props: SwitchProps): JSX.Element;
