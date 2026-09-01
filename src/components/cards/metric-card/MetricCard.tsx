import React from 'react';
import { Users } from 'lucide-react';
import { IconBadge } from '../../badges/icon-badge/IconBadge';
import { PercentageTag } from '../../badges/percentages/PercentageTag';
import './MetricCard.css';

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variant color theme matching Figma CARDS component (node-id 60-147) */
  variant?: 'success' | 'danger' | 'warning' | 'muted';
  /** Card header title */
  title?: string;
  /** Main stat value */
  value?: string | number;
  /** Percentage trend text */
  percentage?: string;
  /** Comparison label */
  comparisonText?: string;
  /** Icon displayed in top right badge */
  icon?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  variant = 'success',
  title = 'ACTIVE COSTUMERS',
  value = '12,000',
  percentage = '0.0%',
  comparisonText = 'vs last month',
  icon = <Users size={18} />,
  className = '',
  ...props
}) => {
  return (
    <div className={`uedp-metric-card uedp-metric-card--${variant} ${className}`} {...props}>
      <div className="uedp-metric-card__header">
        <span className="uedp-metric-card__title">{title}</span>
        <IconBadge variant={variant} icon={icon} size="sm" />
      </div>

      <div className="uedp-metric-card__value-row">
        <span className="uedp-metric-card__value">{value}</span>
      </div>

      <div className="uedp-metric-card__trend-row">
        <PercentageTag variant={variant === 'muted' ? 'neutral' : variant} value={percentage} size="sm" />
        <span className="uedp-metric-card__comparison">{comparisonText}</span>
      </div>

      <div className="uedp-metric-card__sparkline-container">
        <svg className="uedp-metric-card__sparkline" viewBox="0 0 300 50" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`gradient-card-${variant}`} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={
                  variant === 'success'
                    ? '#34d399'
                    : variant === 'danger'
                    ? '#f87171'
                    : variant === 'warning'
                    ? '#fbbf24'
                    : '#94a3b8'
                }
                stopOpacity="0.85"
              />
              <stop
                offset="100%"
                stopColor={
                  variant === 'success'
                    ? '#34d399'
                    : variant === 'danger'
                    ? '#f87171'
                    : variant === 'warning'
                    ? '#fbbf24'
                    : '#94a3b8'
                }
                stopOpacity="0.25"
              />
            </linearGradient>
          </defs>
          <path
            d="M 0,30 Q 35,10 70,28 T 140,15 T 210,32 T 300,18 L 300,50 L 0,50 Z"
            fill={`url(#gradient-card-${variant})`}
          />
        </svg>
      </div>
    </div>
  );
};

export const Cards = MetricCard;
export default MetricCard;
