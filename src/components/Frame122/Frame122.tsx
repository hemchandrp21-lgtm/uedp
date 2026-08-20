import React from 'react';
import './Frame122.css';

export interface Frame122Props {
  /** Exact Figma Layer Name: "Frame 122" */
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
 * Figma Component: "Frame 122"
 * Preserved Layer Name: Frame 122
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame122: React.FC<Frame122Props> = ({
  title = 'Frame 122',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame122-container ${className}`} data-figma-layer="Frame 122" data-variant={variant}>
      <div className="Frame122-header">
        <span className="Frame122-title">{title}</span>
        <span className="Frame122-badge">{variant}</span>
      </div>
      <div className="Frame122-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame122;
