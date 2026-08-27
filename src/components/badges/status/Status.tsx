import React from 'react';
import './Status.css';

export interface StatusProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variant color matching Figma status component (node-id 30-88) */
  variant?: 'success' | 'danger' | 'warning' | 'muted';
  /** Text label displayed inside the status pill */
  label?: string;
  /** Show or hide the status dot indicator */
  showDot?: boolean;
}

export const Status: React.FC<StatusProps> = ({
  variant = 'success',
  label = 'March 2026',
  showDot = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`uedp-status uedp-status--${variant} ${className}`}
      {...props}
    >
      {showDot && <span className="uedp-status__dot" />}
      <span className="uedp-status__label">{label}</span>
    </div>
  );
};

export default Status;
