import React from 'react';
import './Error.css';

export interface ErrorProps {
  /** Exact Figma Layer Name: "error" */
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
 * Figma Component: "error"
 * Preserved Layer Name: error
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Error: React.FC<ErrorProps> = ({
  title = 'error',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Error-container ${className}`} data-figma-layer="error" data-variant={variant}>
      <div className="Error-header">
        <span className="Error-title">{title}</span>
        <span className="Error-badge">{variant}</span>
      </div>
      <div className="Error-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Error;
