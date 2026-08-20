import React from 'react';
import './Close.css';

export interface CloseProps {
  /** Exact Figma Layer Name: "close" */
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
 * Figma Component: "close"
 * Preserved Layer Name: close
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Close: React.FC<CloseProps> = ({
  title = 'close',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Close-container ${className}`} data-figma-layer="close" data-variant={variant}>
      <div className="Close-header">
        <span className="Close-title">{title}</span>
        <span className="Close-badge">{variant}</span>
      </div>
      <div className="Close-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Close;
