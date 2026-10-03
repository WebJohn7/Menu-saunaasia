import * as React from 'react';
export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  tone?: 'onLight' | 'onDark';
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
