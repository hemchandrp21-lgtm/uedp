import React from 'react';
import './FastForward.css';

export interface FastForwardProps {
  /** Exact Figma Layer Name: "fast_forward" */
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
 * Figma Component: "fast_forward"
 * Preserved Layer Name: fast_forward
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const FastForward: React.FC<FastForwardProps> = ({
  title = 'fast_forward',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`FastForward-container ${className}`} data-figma-layer="fast_forward" data-variant={variant}>
      <div className="FastForward-header">
        <span className="FastForward-title">{title}</span>
        <span className="FastForward-badge">{variant}</span>
      </div>
      <div className="FastForward-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default FastForward;
