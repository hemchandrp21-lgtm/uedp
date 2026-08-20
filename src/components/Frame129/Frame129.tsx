import React from 'react';
import './Frame129.css';

export interface Frame129Props {
  /** Exact Figma Layer Name: "Frame 129" */
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
 * Figma Component: "Frame 129"
 * Preserved Layer Name: Frame 129
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame129: React.FC<Frame129Props> = ({
  title = 'Frame 129',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame129-container ${className}`} data-figma-layer="Frame 129" data-variant={variant}>
      <div className="Frame129-header">
        <span className="Frame129-title">{title}</span>
        <span className="Frame129-badge">{variant}</span>
      </div>
      <div className="Frame129-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame129;
