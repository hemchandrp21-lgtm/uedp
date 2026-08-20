import React from 'react';
import './Frame239401.css';

export interface Frame239401Props {
  /** Exact Figma Layer Name: "Frame 239401" */
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
 * Figma Component: "Frame 239401"
 * Preserved Layer Name: Frame 239401
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239401: React.FC<Frame239401Props> = ({
  title = 'Frame 239401',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239401-container ${className}`} data-figma-layer="Frame 239401" data-variant={variant}>
      <div className="Frame239401-header">
        <span className="Frame239401-title">{title}</span>
        <span className="Frame239401-badge">{variant}</span>
      </div>
      <div className="Frame239401-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239401;
