import React from 'react';
import './Frame138.css';

export interface Frame138Props {
  /** Exact Figma Layer Name: "Frame 138" */
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
 * Figma Component: "Frame 138"
 * Preserved Layer Name: Frame 138
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame138: React.FC<Frame138Props> = ({
  title = 'Frame 138',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame138-container ${className}`} data-figma-layer="Frame 138" data-variant={variant}>
      <div className="Frame138-header">
        <span className="Frame138-title">{title}</span>
        <span className="Frame138-badge">{variant}</span>
      </div>
      <div className="Frame138-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame138;
