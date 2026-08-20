import React from 'react';
import './ArrowDropUp.css';

export interface ArrowDropUpProps {
  /** Exact Figma Layer Name: "arrow_drop_up" */
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
 * Figma Component: "arrow_drop_up"
 * Preserved Layer Name: arrow_drop_up
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const ArrowDropUp: React.FC<ArrowDropUpProps> = ({
  title = 'arrow_drop_up',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`ArrowDropUp-container ${className}`} data-figma-layer="arrow_drop_up" data-variant={variant}>
      <div className="ArrowDropUp-header">
        <span className="ArrowDropUp-title">{title}</span>
        <span className="ArrowDropUp-badge">{variant}</span>
      </div>
      <div className="ArrowDropUp-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default ArrowDropUp;
