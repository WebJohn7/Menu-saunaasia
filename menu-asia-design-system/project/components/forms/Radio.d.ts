import * as React from 'react';
export interface RadioOption { value: string; label: string }
export interface RadioProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name: string;
  options?: Array<RadioOption | string>;
  value?: string;
  onChange?: (value: string) => void;
}
export declare function Radio(props: RadioProps): JSX.Element;
