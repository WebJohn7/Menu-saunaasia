import * as React from 'react';
export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** 3px solid rule in yellow (dark ground) or ink (light ground) */
  heavy?: boolean;
  tone?: 'onLight' | 'onDark';
}
export declare function Divider(props: DividerProps): JSX.Element;
