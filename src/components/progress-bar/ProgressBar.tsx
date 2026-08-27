import React from 'react';
import './ProgressBar.css';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color variant matching Figma BAR component (node-id 42-223) */
  variant?: 'success' | 'danger' | 'warning' | 'blue' | 'indigo' | 'slate';
  /** Percentage value from 0 to 100 */
  value?: number;
  /** Custom height of the progress bar */
  height?: number | string;
  /** Optional label display */
  showLabel?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  variant = 'success',
  value = 75,
  height = 12,
  showLabel = false,
  className = '',
  ...props
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`uedp-progress-bar-wrapper ${className}`} {...props}>
      <div
        className={`uedp-progress-bar uedp-progress-bar--${variant}`}
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
      >
        <div
          className="uedp-progress-bar__fill"
          style={{ width: `${clampedValue}%` }}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {showLabel && <span className="uedp-progress-bar__label">{clampedValue}%</span>}
    </div>
  );
};

export const Bar = ProgressBar;
export default ProgressBar;
