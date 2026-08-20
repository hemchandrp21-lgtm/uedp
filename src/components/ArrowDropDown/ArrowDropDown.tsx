import React from 'react';
import './ArrowDropDown.css';

export interface ArrowDropDownProps {
  /** Exact Figma Layer Name: "arrow_drop_down" */
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
 * Figma Component: "arrow_drop_down"
 * Preserved Layer Name: arrow_drop_down
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const ArrowDropDown: React.FC<ArrowDropDownProps> = ({
  title = 'arrow_drop_down',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`ArrowDropDown-container ${className}`} data-figma-layer="arrow_drop_down" data-variant={variant}>
      <div className="ArrowDropDown-header">
        <span className="ArrowDropDown-title">{title}</span>
        <span className="ArrowDropDown-badge">{variant}</span>
      </div>
      <div className="ArrowDropDown-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default ArrowDropDown;
