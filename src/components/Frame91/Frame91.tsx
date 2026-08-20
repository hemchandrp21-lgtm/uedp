import React from 'react';
import './Frame91.css';

export interface Frame91Props {
  /** Exact Figma Layer Name: "Frame 91" */
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
 * Figma Component: "Frame 91"
 * Preserved Layer Name: Frame 91
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame91: React.FC<Frame91Props> = ({
  title = 'Frame 91',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame91-container ${className}`} data-figma-layer="Frame 91" data-variant={variant}>
      <div className="Frame91-header">
        <span className="Frame91-title">{title}</span>
        <span className="Frame91-badge">{variant}</span>
      </div>
      <div className="Frame91-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame91;
