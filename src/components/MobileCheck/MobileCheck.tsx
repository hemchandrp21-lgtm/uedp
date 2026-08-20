import React from 'react';
import './MobileCheck.css';

export interface MobileCheckProps {
  /** Exact Figma Layer Name: "mobile_check" */
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
 * Figma Component: "mobile_check"
 * Preserved Layer Name: mobile_check
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const MobileCheck: React.FC<MobileCheckProps> = ({
  title = 'mobile_check',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`MobileCheck-container ${className}`} data-figma-layer="mobile_check" data-variant={variant}>
      <div className="MobileCheck-header">
        <span className="MobileCheck-title">{title}</span>
        <span className="MobileCheck-badge">{variant}</span>
      </div>
      <div className="MobileCheck-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default MobileCheck;
