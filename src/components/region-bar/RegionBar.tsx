import React from 'react';
import { ProgressBar } from '../progress-bar/ProgressBar';
import { PercentageBadge } from '../percentage-badge/PercentageBadge';
import './RegionBar.css';

export interface RegionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color variant matching Figma REGIONS component (node-id 43-231) */
  variant?: 'success' | 'danger' | 'warning' | 'muted';
  /** Region title label */
  regionName?: string;
  /** Stat value string (e.g. $245.2k) */
  value?: string;
  /** Percentage trend text */
  percentage?: string;
  /** Progress percentage value from 0 to 100 */
  progress?: number;
}

export const RegionBar: React.FC<RegionBarProps> = ({
  variant = 'success',
  regionName = 'North Region',
  value = '$245.2k',
  percentage = '+12.4%',
  progress,
  className = '',
  ...props
}) => {
  const defaultProgress =
    progress !== undefined
      ? progress
      : variant === 'success'
      ? 75
      : variant === 'danger'
      ? 30
      : variant === 'warning'
      ? 60
      : 50;

  return (
    <div className={`uedp-region-bar uedp-region-bar--${variant} ${className}`} {...props}>
      <div className="uedp-region-bar__header">
        <span className="uedp-region-bar__name">{regionName}</span>
        <div className="uedp-region-bar__stats">
          <span className="uedp-region-bar__value">{value}</span>
          <PercentageBadge variant={variant} value={percentage} size="sm" />
        </div>
      </div>
      <div className="uedp-region-bar__progress-container">
        <ProgressBar variant={variant === 'muted' ? 'slate' : variant} value={defaultProgress} height={10} />
      </div>
    </div>
  );
};

export const Regions = RegionBar;
export default RegionBar;
