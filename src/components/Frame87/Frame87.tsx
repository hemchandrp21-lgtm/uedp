import React from 'react';
import './Frame87.css';

export interface Frame87Props {
  /** Exact Figma Layer Name: "Frame 87" */
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
 * Figma Component: "Frame 87"
 * Preserved Layer Name: Frame 87
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame87: React.FC<Frame87Props> = ({
  title = 'Frame 87',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame87-container ${className}`} data-figma-layer="Frame 87" data-variant={variant}>
      <div className="Frame87-header">
        <span className="Frame87-title">{title}</span>
        <span className="Frame87-badge">{variant}</span>
      </div>
      <div className="Frame87-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame87;
