import React from 'react';
import './Frame239306.css';

export interface Frame239306Props {
  /** Exact Figma Layer Name: "Frame 239306" */
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
 * Figma Component: "Frame 239306"
 * Preserved Layer Name: Frame 239306
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239306: React.FC<Frame239306Props> = ({
  title = 'Frame 239306',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239306-container ${className}`} data-figma-layer="Frame 239306" data-variant={variant}>
      <div className="Frame239306-header">
        <span className="Frame239306-title">{title}</span>
        <span className="Frame239306-badge">{variant}</span>
      </div>
      <div className="Frame239306-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239306;
