import * as React from 'react';
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  onClose?: () => void;
  /** action row, right aligned */
  footer?: React.ReactNode;
  /** max width in px (default 480) */
  width?: number;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
