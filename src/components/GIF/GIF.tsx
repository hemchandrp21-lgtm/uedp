import React from 'react';
import './GIF.css';

export interface GIFProps {
  /** Exact Figma Layer Name: "GIF" */
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
 * Figma Component: "GIF"
 * Preserved Layer Name: GIF
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const GIF: React.FC<GIFProps> = ({
  title = 'GIF',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`GIF-container ${className}`} data-figma-layer="GIF" data-variant={variant}>
      <div className="GIF-header">
        <span className="GIF-title">{title}</span>
        <span className="GIF-badge">{variant}</span>
      </div>
      <div className="GIF-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default GIF;
