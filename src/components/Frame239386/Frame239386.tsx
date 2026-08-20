import React from 'react';
import './Frame239386.css';

export interface Frame239386Props {
  /** Exact Figma Layer Name: "Frame 239386" */
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
 * Figma Component: "Frame 239386"
 * Preserved Layer Name: Frame 239386
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239386: React.FC<Frame239386Props> = ({
  title = 'Frame 239386',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239386-container ${className}`} data-figma-layer="Frame 239386" data-variant={variant}>
      <div className="Frame239386-header">
        <span className="Frame239386-title">{title}</span>
        <span className="Frame239386-badge">{variant}</span>
      </div>
      <div className="Frame239386-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239386;
