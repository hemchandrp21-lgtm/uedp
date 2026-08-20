import React from 'react';
import './Frame121.css';

export interface Frame121Props {
  /** Exact Figma Layer Name: "Frame 121" */
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
 * Figma Component: "Frame 121"
 * Preserved Layer Name: Frame 121
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame121: React.FC<Frame121Props> = ({
  title = 'Frame 121',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame121-container ${className}`} data-figma-layer="Frame 121" data-variant={variant}>
      <div className="Frame121-header">
        <span className="Frame121-title">{title}</span>
        <span className="Frame121-badge">{variant}</span>
      </div>
      <div className="Frame121-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame121;
