import React from 'react';
import './Frame239376.css';

export interface Frame239376Props {
  /** Exact Figma Layer Name: "Frame 239376" */
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
 * Figma Component: "Frame 239376"
 * Preserved Layer Name: Frame 239376
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239376: React.FC<Frame239376Props> = ({
  title = 'Frame 239376',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239376-container ${className}`} data-figma-layer="Frame 239376" data-variant={variant}>
      <div className="Frame239376-header">
        <span className="Frame239376-title">{title}</span>
        <span className="Frame239376-badge">{variant}</span>
      </div>
      <div className="Frame239376-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239376;
