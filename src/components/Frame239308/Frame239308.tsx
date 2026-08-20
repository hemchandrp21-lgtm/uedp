import React from 'react';
import './Frame239308.css';

export interface Frame239308Props {
  /** Exact Figma Layer Name: "Frame 239308" */
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
 * Figma Component: "Frame 239308"
 * Preserved Layer Name: Frame 239308
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239308: React.FC<Frame239308Props> = ({
  title = 'Frame 239308',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239308-container ${className}`} data-figma-layer="Frame 239308" data-variant={variant}>
      <div className="Frame239308-header">
        <span className="Frame239308-title">{title}</span>
        <span className="Frame239308-badge">{variant}</span>
      </div>
      <div className="Frame239308-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239308;
