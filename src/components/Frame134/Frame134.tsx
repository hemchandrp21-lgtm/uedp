import React from 'react';
import './Frame134.css';

export interface Frame134Props {
  /** Exact Figma Layer Name: "Frame 134" */
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
 * Figma Component: "Frame 134"
 * Preserved Layer Name: Frame 134
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame134: React.FC<Frame134Props> = ({
  title = 'Frame 134',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame134-container ${className}`} data-figma-layer="Frame 134" data-variant={variant}>
      <div className="Frame134-header">
        <span className="Frame134-title">{title}</span>
        <span className="Frame134-badge">{variant}</span>
      </div>
      <div className="Frame134-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame134;
