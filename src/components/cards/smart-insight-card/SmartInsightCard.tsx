import React from 'react';
import { StatBadge } from '../../badges/stat-badge/StatBadge';
import './SmartInsightCard.css';

export interface SmartInsightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variant theme matching Figma Frame 48/smart insides (node-id 106-658) */
  variant?: 'success' | 'danger' | 'warning' | 'muted';
  /** Stat header text (top line of badge) */
  statSubtitle?: string;
  /** Stat value text (bottom line of badge) */
  statTitle?: string;
  /** Insight description text */
  description?: string;
}

export const SmartInsightCard: React.FC<SmartInsightCardProps> = ({
  variant = 'success',
  statSubtitle = 'BEST DAY',
  statTitle = 'WED',
  description = 'Wednesday Drives 23% Of Weekly Revenue — Highest Peak This Month',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`uedp-smart-insight-card uedp-smart-insight-card--${variant} ${className}`}
      {...props}
    >
      <div className="uedp-smart-insight-card__badge-wrapper">
        <StatBadge variant={variant} subtitle={statSubtitle} title={statTitle} />
      </div>
      <p className="uedp-smart-insight-card__description">{description}</p>
    </div>
  );
};

export const SmartInsides = SmartInsightCard;
export default SmartInsightCard;
