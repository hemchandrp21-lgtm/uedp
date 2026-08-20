import React from 'react';
import './Frame144.css';

export interface Frame144Props {
  /** Exact Figma Layer Name: "Frame 144" */
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
 * Figma Component: "Frame 144"
 * Preserved Layer Name: Frame 144
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame144: React.FC<Frame144Props> = ({
  title = 'Frame 144',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame144-container ${className}`} data-figma-layer="Frame 144" data-variant={variant}>
      <div className="Frame144-header">
        <span className="Frame144-title">{title}</span>
        <span className="Frame144-badge">{variant}</span>
      </div>
      <div className="Frame144-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame144;
