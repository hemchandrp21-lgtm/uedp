import React from 'react';
import './CheckBox.css';

export interface CheckBoxProps {
  /** Exact Figma Layer Name: "check_box" */
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
 * Figma Component: "check_box"
 * Preserved Layer Name: check_box
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const CheckBox: React.FC<CheckBoxProps> = ({
  title = 'check_box',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`CheckBox-container ${className}`} data-figma-layer="check_box" data-variant={variant}>
      <div className="CheckBox-header">
        <span className="CheckBox-title">{title}</span>
        <span className="CheckBox-badge">{variant}</span>
      </div>
      <div className="CheckBox-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default CheckBox;
