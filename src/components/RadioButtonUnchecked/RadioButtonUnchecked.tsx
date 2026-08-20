import React from 'react';
import './RadioButtonUnchecked.css';

export interface RadioButtonUncheckedProps {
  /** Exact Figma Layer Name: "radio_button_unchecked" */
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
 * Figma Component: "radio_button_unchecked"
 * Preserved Layer Name: radio_button_unchecked
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const RadioButtonUnchecked: React.FC<RadioButtonUncheckedProps> = ({
  title = 'radio_button_unchecked',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`RadioButtonUnchecked-container ${className}`} data-figma-layer="radio_button_unchecked" data-variant={variant}>
      <div className="RadioButtonUnchecked-header">
        <span className="RadioButtonUnchecked-title">{title}</span>
        <span className="RadioButtonUnchecked-badge">{variant}</span>
      </div>
      <div className="RadioButtonUnchecked-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default RadioButtonUnchecked;
