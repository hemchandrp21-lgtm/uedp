import React from 'react';
import './Frame2.css';

export interface Frame2Props {
  /** Exact Figma Layer Name: "Frame 2" */
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
 * Figma Component: "Frame 2"
 * Preserved Layer Name: Frame 2
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame2: React.FC<Frame2Props> = ({
  title = 'Frame 2',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame2-container ${className}`} data-figma-layer="Frame 2" data-variant={variant}>
      <div className="Frame2-header">
        <span className="Frame2-title">{title}</span>
        <span className="Frame2-badge">{variant}</span>
      </div>
      <div className="Frame2-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame2;
