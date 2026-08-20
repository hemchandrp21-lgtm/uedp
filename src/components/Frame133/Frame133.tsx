import React from 'react';
import './Frame133.css';

export interface Frame133Props {
  /** Exact Figma Layer Name: "Frame 133" */
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
 * Figma Component: "Frame 133"
 * Preserved Layer Name: Frame 133
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame133: React.FC<Frame133Props> = ({
  title = 'Frame 133',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame133-container ${className}`} data-figma-layer="Frame 133" data-variant={variant}>
      <div className="Frame133-header">
        <span className="Frame133-title">{title}</span>
        <span className="Frame133-badge">{variant}</span>
      </div>
      <div className="Frame133-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame133;
