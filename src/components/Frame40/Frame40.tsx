import React from 'react';
import './Frame40.css';

export interface Frame40Props {
  /** Exact Figma Layer Name: "Frame 40" */
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
 * Figma Component: "Frame 40"
 * Preserved Layer Name: Frame 40
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame40: React.FC<Frame40Props> = ({
  title = 'Frame 40',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame40-container ${className}`} data-figma-layer="Frame 40" data-variant={variant}>
      <div className="Frame40-header">
        <span className="Frame40-title">{title}</span>
        <span className="Frame40-badge">{variant}</span>
      </div>
      <div className="Frame40-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame40;
