import React from 'react';
import { ArrowDown } from 'lucide-react';
import './PercentageTag.css';

export interface PercentageTagProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color variant matching Figma PERCENTAGES component (node-id 45-95) */
  variant?: 'success' | 'danger' | 'warning' | 'neutral';
  /** Percentage value text */
  value?: string | number;
  /** Arrow direction icon */
  arrowDirection?: 'up' | 'down' | 'none';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

export const PercentageTag: React.FC<PercentageTagProps> = ({
  variant = 'success',
  value = '0.0%',
  arrowDirection = 'up',
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`uedp-percentage-tag uedp-percentage-tag--${variant} uedp-percentage-tag--${size} ${className}`}
      {...props}
    >
      {arrowDirection !== 'none' && (
        <span className="uedp-percentage-tag__icon">
          {arrowDirection === 'down' ? (
            <ArrowDown size={18} strokeWidth={3} />
          ) : (
            <span className="uedp-percentage-tag__arrow-up">▲</span>
          )}
        </span>
      )}
      <span className="uedp-percentage-tag__value">{value}</span>
    </div>
  );
};

export const Percentages = PercentageTag;
export default PercentageTag;
