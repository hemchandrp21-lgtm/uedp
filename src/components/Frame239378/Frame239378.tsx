import React from 'react';
import './Frame239378.css';

export interface Frame239378Props {
  /** Exact Figma Layer Name: "Frame 239378" */
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
 * Figma Component: "Frame 239378"
 * Preserved Layer Name: Frame 239378
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239378: React.FC<Frame239378Props> = ({
  title = 'Frame 239378',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239378-container ${className}`} data-figma-layer="Frame 239378" data-variant={variant}>
      <div className="Frame239378-header">
        <span className="Frame239378-title">{title}</span>
        <span className="Frame239378-badge">{variant}</span>
      </div>
      <div className="Frame239378-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239378;
