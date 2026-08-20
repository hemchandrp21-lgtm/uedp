import React from 'react';
import './TextFields.css';

export interface TextFieldsProps {
  /** Exact Figma Layer Name: "text_fields" */
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
 * Figma Component: "text_fields"
 * Preserved Layer Name: text_fields
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const TextFields: React.FC<TextFieldsProps> = ({
  title = 'text_fields',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`TextFields-container ${className}`} data-figma-layer="text_fields" data-variant={variant}>
      <div className="TextFields-header">
        <span className="TextFields-title">{title}</span>
        <span className="TextFields-badge">{variant}</span>
      </div>
      <div className="TextFields-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default TextFields;
