import React from 'react';
import './Frame239388.css';

export interface Frame239388Props {
  /** Exact Figma Layer Name: "Frame 239388" */
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
 * Figma Component: "Frame 239388"
 * Preserved Layer Name: Frame 239388
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239388: React.FC<Frame239388Props> = ({
  title = 'Frame 239388',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239388-container ${className}`} data-figma-layer="Frame 239388" data-variant={variant}>
      <div className="Frame239388-header">
        <span className="Frame239388-title">{title}</span>
        <span className="Frame239388-badge">{variant}</span>
      </div>
      <div className="Frame239388-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239388;
