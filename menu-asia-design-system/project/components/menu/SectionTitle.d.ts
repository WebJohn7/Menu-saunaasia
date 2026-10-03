import * as React from 'react';
/**
 * Course heading.
 * @startingPoint section="Menu" subtitle="Display and ruled section titles" viewport="700x220"
 */
export interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** "display" = big rounded wordmark; "rule" = uppercase condensed with a 3px underline */
  variant?: 'display' | 'rule';
  tone?: 'onDark' | 'onLight';
  children?: React.ReactNode;
}
export declare function SectionTitle(props: SectionTitleProps): JSX.Element;
