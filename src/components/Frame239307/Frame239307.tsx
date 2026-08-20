import React from 'react';
import './Frame239307.css';

export interface Frame239307Props {
  /** Exact Figma Layer Name: "Frame 239307" */
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
 * Figma Component: "Frame 239307"
 * Preserved Layer Name: Frame 239307
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239307: React.FC<Frame239307Props> = ({
  title = 'Frame 239307',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239307-container ${className}`} data-figma-layer="Frame 239307" data-variant={variant}>
      <div className="Frame239307-header">
        <span className="Frame239307-title">{title}</span>
        <span className="Frame239307-badge">{variant}</span>
      </div>
      <div className="Frame239307-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239307;
