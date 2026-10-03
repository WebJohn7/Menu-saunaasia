import * as React from 'react';
export interface TabItem { value: string; label: string }
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items?: Array<TabItem | string>;
  value?: string;
  onChange?: (value: string) => void;
  tone?: 'onDark' | 'onLight';
}
export declare function Tabs(props: TabsProps): JSX.Element;
