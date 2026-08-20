import React from 'react';
import './CAUTIONS.css';

export interface CAUTIONSProps {
  /** Exact Figma Layer Name: "CAUTIONS" */
  title?: string;
  /** Primary description or content text */
  description?: string;
  /** Component state or variant */
  variant?: 'caution 1' | 'khel khatam' | 'mast kam';
  /** Optional custom CSS class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Figma Component: "CAUTIONS"
 * Preserved Layer Name: CAUTIONS
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const CAUTIONS: React.FC<CAUTIONSProps> = ({
  title = 'CAUTIONS',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'caution 1',
  className = '',
  children
}) => {
  return (
    <div className={`CAUTIONS-container ${className}`} data-figma-layer="CAUTIONS" data-variant={variant}>
      <div className="CAUTIONS-header">
        <span className="CAUTIONS-title">{title}</span>
        <span className="CAUTIONS-badge">{variant}</span>
      </div>
      <div className="CAUTIONS-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default CAUTIONS;
