import React from 'react';
import './Forward.css';

export interface ForwardProps {
  /** Exact Figma Layer Name: "forward" */
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
 * Figma Component: "forward"
 * Preserved Layer Name: forward
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Forward: React.FC<ForwardProps> = ({
  title = 'forward',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Forward-container ${className}`} data-figma-layer="forward" data-variant={variant}>
      <div className="Forward-header">
        <span className="Forward-title">{title}</span>
        <span className="Forward-badge">{variant}</span>
      </div>
      <div className="Forward-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Forward;
