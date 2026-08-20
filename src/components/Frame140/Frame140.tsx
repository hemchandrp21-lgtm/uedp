import React from 'react';
import './Frame140.css';

export interface Frame140Props {
  /** Exact Figma Layer Name: "Frame 140" */
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
 * Figma Component: "Frame 140"
 * Preserved Layer Name: Frame 140
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame140: React.FC<Frame140Props> = ({
  title = 'Frame 140',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame140-container ${className}`} data-figma-layer="Frame 140" data-variant={variant}>
      <div className="Frame140-header">
        <span className="Frame140-title">{title}</span>
        <span className="Frame140-badge">{variant}</span>
      </div>
      <div className="Frame140-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame140;
