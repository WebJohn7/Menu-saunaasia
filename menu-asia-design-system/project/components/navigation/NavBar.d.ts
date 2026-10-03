import * as React from 'react';
/**
 * Site / app header.
 * @startingPoint section="Navigation" subtitle="Header with wordmark, links and CTA" viewport="700x120"
 */
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  /** wordmark text — there is no logo file for this brand */
  brand?: string;
  items?: Array<{ value: string; label: string } | string>;
  active?: string;
  onNavigate?: (value: string) => void;
  /** right-hand slot, usually a <Button> */
  action?: React.ReactNode;
  tone?: 'onDark' | 'onLight';
}
export declare function NavBar(props: NavBarProps): JSX.Element;
