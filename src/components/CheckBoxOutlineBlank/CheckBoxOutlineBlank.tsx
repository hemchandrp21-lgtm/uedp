import React from 'react';
import './CheckBoxOutlineBlank.css';

export interface CheckBoxOutlineBlankProps {
  /** Exact Figma Layer Name: "check_box_outline_blank" */
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
 * Figma Component: "check_box_outline_blank"
 * Preserved Layer Name: check_box_outline_blank
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const CheckBoxOutlineBlank: React.FC<CheckBoxOutlineBlankProps> = ({
  title = 'check_box_outline_blank',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`CheckBoxOutlineBlank-container ${className}`} data-figma-layer="check_box_outline_blank" data-variant={variant}>
      <div className="CheckBoxOutlineBlank-header">
        <span className="CheckBoxOutlineBlank-title">{title}</span>
        <span className="CheckBoxOutlineBlank-badge">{variant}</span>
      </div>
      <div className="CheckBoxOutlineBlank-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default CheckBoxOutlineBlank;
