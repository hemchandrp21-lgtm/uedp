import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import './CautionBanner.css';

export interface CautionBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color theme variant matching Figma CAUTIONS component (node-id 111-1303) */
  variant?: 'warning' | 'danger' | 'success' | 'muted';
  /** Alert header title */
  title?: string;
  /** Alert body text description */
  description?: string;
  /** Action link text */
  actionText?: string;
  /** Show or hide action link */
  showAction?: boolean;
  /** Action link click callback */
  onActionClick?: (e: React.MouseEvent) => void;
  /** Custom icon component */
  icon?: React.ReactNode;
}

export const CautionBanner: React.FC<CautionBannerProps> = ({
  variant = 'warning',
  title = 'Performance Alert - South Region',
  description = "Revenue In South Dropped 14.2% Vs Last Week ($218K \u2192 $187K). West Region Compensating With +22% Spike. Recommend Reviewing South's Pipeline Health.",
  actionText = 'View all alerts',
  showAction = true,
  onActionClick,
  icon = <AlertTriangle size={20} />,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`uedp-caution-banner uedp-caution-banner--${variant} ${className}`}
      {...props}
    >
      <div className="uedp-caution-banner__left">
        {icon && <span className="uedp-caution-banner__icon">{icon}</span>}
        <div className="uedp-caution-banner__content">
          <div className="uedp-caution-banner__title">{title}</div>
          <div className="uedp-caution-banner__description">{description}</div>
        </div>
      </div>

      {showAction && (
        <div
          className="uedp-caution-banner__action"
          onClick={onActionClick}
          role="button"
          tabIndex={0}
        >
          <span>{actionText}</span>
          <ArrowRight size={16} className="uedp-caution-banner__arrow" />
        </div>
      )}
    </div>
  );
};

export const Cautions = CautionBanner;
export default CautionBanner;
