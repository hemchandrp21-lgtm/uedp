import React from 'react';
import './ArrowForward.css';

export interface ArrowForwardProps {
  /** Exact Figma Layer Name: "arrow_forward" */
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
 * Figma Component: "arrow_forward"
 * Preserved Layer Name: arrow_forward
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const ArrowForward: React.FC<ArrowForwardProps> = ({
  title = 'arrow_forward',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`ArrowForward-container ${className}`} data-figma-layer="arrow_forward" data-variant={variant}>
      <div className="ArrowForward-header">
        <span className="ArrowForward-title">{title}</span>
        <span className="ArrowForward-badge">{variant}</span>
      </div>
      <div className="ArrowForward-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default ArrowForward;
