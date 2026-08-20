import React from 'react';
import './Check.css';

export interface CheckProps {
  /** Exact Figma Layer Name: "check" */
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
 * Figma Component: "check"
 * Preserved Layer Name: check
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Check: React.FC<CheckProps> = ({
  title = 'check',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Check-container ${className}`} data-figma-layer="check" data-variant={variant}>
      <div className="Check-header">
        <span className="Check-title">{title}</span>
        <span className="Check-badge">{variant}</span>
      </div>
      <div className="Check-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Check;
