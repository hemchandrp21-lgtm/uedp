import React from 'react';
import './Frame130.css';

export interface Frame130Props {
  /** Exact Figma Layer Name: "Frame 130" */
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
 * Figma Component: "Frame 130"
 * Preserved Layer Name: Frame 130
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame130: React.FC<Frame130Props> = ({
  title = 'Frame 130',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame130-container ${className}`} data-figma-layer="Frame 130" data-variant={variant}>
      <div className="Frame130-header">
        <span className="Frame130-title">{title}</span>
        <span className="Frame130-badge">{variant}</span>
      </div>
      <div className="Frame130-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame130;
