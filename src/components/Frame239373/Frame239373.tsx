import React from 'react';
import './Frame239373.css';

export interface Frame239373Props {
  /** Exact Figma Layer Name: "Frame 239373" */
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
 * Figma Component: "Frame 239373"
 * Preserved Layer Name: Frame 239373
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239373: React.FC<Frame239373Props> = ({
  title = 'Frame 239373',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239373-container ${className}`} data-figma-layer="Frame 239373" data-variant={variant}>
      <div className="Frame239373-header">
        <span className="Frame239373-title">{title}</span>
        <span className="Frame239373-badge">{variant}</span>
      </div>
      <div className="Frame239373-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239373;
