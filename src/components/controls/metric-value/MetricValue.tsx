import React from 'react';
import './MetricValue.css';

export interface MetricValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Variant matching Figma Frame 60 (node-id 94-362) */
  variant?: 'negative' | 'positive' | 'currency' | 'muted' | 'warning' | 'indigo';
  /** Main number or value text */
  value?: string | number;
  /** Currency symbol */
  currencySymbol?: string;
  /** Custom prefix (+, -, etc.) */
  prefix?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

export const MetricValue: React.FC<MetricValueProps> = ({
  variant = 'currency',
  value = '123k',
  currencySymbol = '₹',
  prefix,
  size = 'md',
  className = '',
  ...props
}) => {
  let displayPrefix = prefix;
  let displayCurrency = '';

  if (prefix === undefined) {
    if (variant === 'negative') displayPrefix = '- ';
    else if (variant === 'positive') displayPrefix = '+ ';
    else displayPrefix = '';
  }

  if (variant === 'currency' || variant === 'warning' || variant === 'indigo') {
    displayCurrency = currencySymbol;
  }

  return (
    <span
      className={`uedp-metric-value uedp-metric-value--${variant} uedp-metric-value--${size} ${className}`}
      {...props}
    >
      {displayPrefix}
      {displayCurrency}
      {value}
    </span>
  );
};

export default MetricValue;
