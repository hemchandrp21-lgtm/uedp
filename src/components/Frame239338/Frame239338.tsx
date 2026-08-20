import React from 'react';
import './Frame239338.css';

export interface Frame239338Props {
  /** Exact Figma Layer Name: "Frame 239338" */
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
 * Figma Component: "Frame 239338"
 * Preserved Layer Name: Frame 239338
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239338: React.FC<Frame239338Props> = ({
  title = 'Frame 239338',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239338-container ${className}`} data-figma-layer="Frame 239338" data-variant={variant}>
      <div className="Frame239338-header">
        <span className="Frame239338-title">{title}</span>
        <span className="Frame239338-badge">{variant}</span>
      </div>
      <div className="Frame239338-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239338;
