import React from 'react';
import './Frame239395.css';

export interface Frame239395Props {
  /** Exact Figma Layer Name: "Frame 239395" */
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
 * Figma Component: "Frame 239395"
 * Preserved Layer Name: Frame 239395
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239395: React.FC<Frame239395Props> = ({
  title = 'Frame 239395',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239395-container ${className}`} data-figma-layer="Frame 239395" data-variant={variant}>
      <div className="Frame239395-header">
        <span className="Frame239395-title">{title}</span>
        <span className="Frame239395-badge">{variant}</span>
      </div>
      <div className="Frame239395-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239395;
