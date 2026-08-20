import React from 'react';
import './Input.css';

export interface InputProps {
  /** Exact Figma Layer Name: "Input" */
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
 * Figma Component: "Input"
 * Preserved Layer Name: Input
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Input: React.FC<InputProps> = ({
  title = 'Input',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Input-container ${className}`} data-figma-layer="Input" data-variant={variant}>
      <div className="Input-header">
        <span className="Input-title">{title}</span>
        <span className="Input-badge">{variant}</span>
      </div>
      <div className="Input-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Input;
