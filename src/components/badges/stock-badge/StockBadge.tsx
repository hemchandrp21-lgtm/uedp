import React from 'react';
import './StockBadge.css';

export interface StockBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color variant matching Figma Frame 2... (node-id 142-1576) */
  variant?: 'success' | 'danger' | 'warning' | 'muted';
  /** Text label displayed inside the badge */
  label?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

export const StockBadge: React.FC<StockBadgeProps> = ({
  variant = 'success',
  label = 'In Stock',
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`uedp-stock-badge uedp-stock-badge--${variant} uedp-stock-badge--${size} ${className}`}
      {...props}
    >
      <span className="uedp-stock-badge__label">{label}</span>
    </div>
  );
};

export default StockBadge;
