import React from 'react';
import './CheckIndeterminateSmall.css';

export interface CheckIndeterminateSmallProps {
  /** Exact Figma Layer Name: "check_indeterminate_small" */
  title?: string;
  /** Primary description or content text */
  description?: string;
  /** Component state or variant */
  variant?: string;
  /** Optional custom CSS class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Figma Component: "check_indeterminate_small"
 * Preserved Layer Name: check_indeterminate_small
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const CheckIndeterminateSmall: React.FC<CheckIndeterminateSmallProps> = ({
  title = 'check_indeterminate_small',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`CheckIndeterminateSmall-container ${className}`} data-figma-layer="check_indeterminate_small" data-variant={variant}>
      <div className="CheckIndeterminateSmall-header">
        <span className="CheckIndeterminateSmall-title">{title}</span>
        <span className="CheckIndeterminateSmall-badge">{variant}</span>
      </div>
      <div className="CheckIndeterminateSmall-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default CheckIndeterminateSmall;
