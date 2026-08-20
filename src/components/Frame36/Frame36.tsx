import React from 'react';
import './Frame36.css';

export interface Frame36Props {
  /** Exact Figma Layer Name: "Frame 36" */
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
 * Figma Component: "Frame 36"
 * Preserved Layer Name: Frame 36
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame36: React.FC<Frame36Props> = ({
  title = 'Frame 36',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame36-container ${className}`} data-figma-layer="Frame 36" data-variant={variant}>
      <div className="Frame36-header">
        <span className="Frame36-title">{title}</span>
        <span className="Frame36-badge">{variant}</span>
      </div>
      <div className="Frame36-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame36;
