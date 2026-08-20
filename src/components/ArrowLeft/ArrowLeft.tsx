import React from 'react';
import './ArrowLeft.css';

export interface ArrowLeftProps {
  /** Exact Figma Layer Name: "arrow_left" */
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
 * Figma Component: "arrow_left"
 * Preserved Layer Name: arrow_left
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const ArrowLeft: React.FC<ArrowLeftProps> = ({
  title = 'arrow_left',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`ArrowLeft-container ${className}`} data-figma-layer="arrow_left" data-variant={variant}>
      <div className="ArrowLeft-header">
        <span className="ArrowLeft-title">{title}</span>
        <span className="ArrowLeft-badge">{variant}</span>
      </div>
      <div className="ArrowLeft-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default ArrowLeft;
