import React from 'react';
import './Background.css';

export interface BackgroundProps {
  /** Exact Figma Layer Name: "Background" */
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
 * Figma Component: "Background"
 * Preserved Layer Name: Background
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Background: React.FC<BackgroundProps> = ({
  title = 'Background',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Background-container ${className}`} data-figma-layer="Background" data-variant={variant}>
      <div className="Background-header">
        <span className="Background-title">{title}</span>
        <span className="Background-badge">{variant}</span>
      </div>
      <div className="Background-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Background;
