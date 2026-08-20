import React from 'react';
import './CheckSmall.css';

export interface CheckSmallProps {
  /** Exact Figma Layer Name: "check_small" */
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
 * Figma Component: "check_small"
 * Preserved Layer Name: check_small
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const CheckSmall: React.FC<CheckSmallProps> = ({
  title = 'check_small',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`CheckSmall-container ${className}`} data-figma-layer="check_small" data-variant={variant}>
      <div className="CheckSmall-header">
        <span className="CheckSmall-title">{title}</span>
        <span className="CheckSmall-badge">{variant}</span>
      </div>
      <div className="CheckSmall-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default CheckSmall;
