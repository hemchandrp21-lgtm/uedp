import React from 'react';
import './Frame153.css';

export interface Frame153Props {
  /** Exact Figma Layer Name: "Frame 153" */
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
 * Figma Component: "Frame 153"
 * Preserved Layer Name: Frame 153
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame153: React.FC<Frame153Props> = ({
  title = 'Frame 153',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame153-container ${className}`} data-figma-layer="Frame 153" data-variant={variant}>
      <div className="Frame153-header">
        <span className="Frame153-title">{title}</span>
        <span className="Frame153-badge">{variant}</span>
      </div>
      <div className="Frame153-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame153;
