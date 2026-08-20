import React from 'react';
import './Frame239387.css';

export interface Frame239387Props {
  /** Exact Figma Layer Name: "Frame 239387" */
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
 * Figma Component: "Frame 239387"
 * Preserved Layer Name: Frame 239387
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239387: React.FC<Frame239387Props> = ({
  title = 'Frame 239387',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239387-container ${className}`} data-figma-layer="Frame 239387" data-variant={variant}>
      <div className="Frame239387-header">
        <span className="Frame239387-title">{title}</span>
        <span className="Frame239387-badge">{variant}</span>
      </div>
      <div className="Frame239387-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239387;
