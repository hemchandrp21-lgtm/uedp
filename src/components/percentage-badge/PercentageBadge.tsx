import React from 'react';
import './PercentageBadge.css';

export interface PercentageBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color variant matching Figma NUMBERS status component (id 41-214) */
  variant?: 'danger' | 'success' | 'warning' | 'muted';
  /** Percentage or trend value string */
  value?: string | number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

export const PercentageBadge: React.FC<PercentageBadgeProps> = ({
  variant = 'success',
  value = '+12.4%',
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`uedp-percentage-badge uedp-percentage-badge--${variant} uedp-percentage-badge--${size} ${className}`}
      {...props}
    >
      <span className="uedp-percentage-badge__value">{value}</span>
    </div>
  );
};

export default PercentageBadge;
