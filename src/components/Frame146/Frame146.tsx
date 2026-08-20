import React from 'react';
import './Frame146.css';

export interface Frame146Props {
  /** Exact Figma Layer Name: "Frame 146" */
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
 * Figma Component: "Frame 146"
 * Preserved Layer Name: Frame 146
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame146: React.FC<Frame146Props> = ({
  title = 'Frame 146',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame146-container ${className}`} data-figma-layer="Frame 146" data-variant={variant}>
      <div className="Frame146-header">
        <span className="Frame146-title">{title}</span>
        <span className="Frame146-badge">{variant}</span>
      </div>
      <div className="Frame146-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame146;
