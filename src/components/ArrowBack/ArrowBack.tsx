import React from 'react';
import './ArrowBack.css';

export interface ArrowBackProps {
  /** Exact Figma Layer Name: "arrow_back" */
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
 * Figma Component: "arrow_back"
 * Preserved Layer Name: arrow_back
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const ArrowBack: React.FC<ArrowBackProps> = ({
  title = 'arrow_back',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`ArrowBack-container ${className}`} data-figma-layer="arrow_back" data-variant={variant}>
      <div className="ArrowBack-header">
        <span className="ArrowBack-title">{title}</span>
        <span className="ArrowBack-badge">{variant}</span>
      </div>
      <div className="ArrowBack-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default ArrowBack;
