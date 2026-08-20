import React from 'react';
import './Frame1.css';

export interface Frame1Props {
  /** Exact Figma Layer Name: "Frame 1" */
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
 * Figma Component: "Frame 1"
 * Preserved Layer Name: Frame 1
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame1: React.FC<Frame1Props> = ({
  title = 'Frame 1',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame1-container ${className}`} data-figma-layer="Frame 1" data-variant={variant}>
      <div className="Frame1-header">
        <span className="Frame1-title">{title}</span>
        <span className="Frame1-badge">{variant}</span>
      </div>
      <div className="Frame1-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame1;
