import React from 'react';
import './StatBadge.css';

export interface StatBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color variant matching Figma Frame 94 (node-id 104-637) */
  variant?: 'success' | 'danger' | 'warning' | 'muted';
  /** Subtitle / Header text (top line) */
  subtitle?: string;
  /** Main metric title text (bottom line) */
  title?: string;
}

export const StatBadge: React.FC<StatBadgeProps> = ({
  variant = 'success',
  subtitle = 'BEST DAY',
  title = 'WED',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`uedp-stat-badge uedp-stat-badge--${variant} ${className}`}
      {...props}
    >
      <span className="uedp-stat-badge__subtitle">{subtitle}</span>
      <span className="uedp-stat-badge__title">{title}</span>
    </div>
  );
};

export default StatBadge;
