import React from 'react';
import './ArrowRight.css';

export interface ArrowRightProps {
  /** Exact Figma Layer Name: "arrow_right" */
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
 * Figma Component: "arrow_right"
 * Preserved Layer Name: arrow_right
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const ArrowRight: React.FC<ArrowRightProps> = ({
  title = 'arrow_right',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`ArrowRight-container ${className}`} data-figma-layer="arrow_right" data-variant={variant}>
      <div className="ArrowRight-header">
        <span className="ArrowRight-title">{title}</span>
        <span className="ArrowRight-badge">{variant}</span>
      </div>
      <div className="ArrowRight-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default ArrowRight;
