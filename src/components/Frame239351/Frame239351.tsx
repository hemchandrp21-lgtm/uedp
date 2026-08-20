import React from 'react';
import './Frame239351.css';

export interface Frame239351Props {
  /** Exact Figma Layer Name: "Frame 239351" */
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
 * Figma Component: "Frame 239351"
 * Preserved Layer Name: Frame 239351
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239351: React.FC<Frame239351Props> = ({
  title = 'Frame 239351',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239351-container ${className}`} data-figma-layer="Frame 239351" data-variant={variant}>
      <div className="Frame239351-header">
        <span className="Frame239351-title">{title}</span>
        <span className="Frame239351-badge">{variant}</span>
      </div>
      <div className="Frame239351-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239351;
