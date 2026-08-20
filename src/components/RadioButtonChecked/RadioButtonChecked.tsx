import React from 'react';
import './RadioButtonChecked.css';

export interface RadioButtonCheckedProps {
  /** Exact Figma Layer Name: "radio_button_checked" */
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
 * Figma Component: "radio_button_checked"
 * Preserved Layer Name: radio_button_checked
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const RadioButtonChecked: React.FC<RadioButtonCheckedProps> = ({
  title = 'radio_button_checked',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`RadioButtonChecked-container ${className}`} data-figma-layer="radio_button_checked" data-variant={variant}>
      <div className="RadioButtonChecked-header">
        <span className="RadioButtonChecked-title">{title}</span>
        <span className="RadioButtonChecked-badge">{variant}</span>
      </div>
      <div className="RadioButtonChecked-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default RadioButtonChecked;
