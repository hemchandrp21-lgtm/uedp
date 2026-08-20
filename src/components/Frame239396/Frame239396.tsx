import React from 'react';
import './Frame239396.css';

export interface Frame239396Props {
  /** Exact Figma Layer Name: "Frame 239396" */
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
 * Figma Component: "Frame 239396"
 * Preserved Layer Name: Frame 239396
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239396: React.FC<Frame239396Props> = ({
  title = 'Frame 239396',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239396-container ${className}`} data-figma-layer="Frame 239396" data-variant={variant}>
      <div className="Frame239396-header">
        <span className="Frame239396-title">{title}</span>
        <span className="Frame239396-badge">{variant}</span>
      </div>
      <div className="Frame239396-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239396;
