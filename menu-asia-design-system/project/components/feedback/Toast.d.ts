import * as React from 'react';
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  /** trailing control, usually a ghost <Button> */
  action?: React.ReactNode;
  tone?: 'neutral' | 'success' | 'danger';
}
export declare function Toast(props: ToastProps): JSX.Element;
