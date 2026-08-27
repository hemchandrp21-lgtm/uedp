import React from 'react';
import './NumberIcon.css';

export interface NumberIconProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant matching Figma NUMBERICONS component (node-id 98-487) */
  variant?: 'badge' | 'plain';
  /** Color theme when variant is 'badge' */
  color?: 'amber' | 'green' | 'red' | 'indigo' | 'slate';
  /** Number or rank value displayed */
  value?: string | number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

export const NumberIcon: React.FC<NumberIconProps> = ({
  variant = 'badge',
  color = 'amber',
  value = 1,
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`uedp-number-icon uedp-number-icon--${variant} uedp-number-icon--${color} uedp-number-icon--${size} ${className}`}
      {...props}
    >
      <span className="uedp-number-icon__text">{value}</span>
    </div>
  );
};

export default NumberIcon;
