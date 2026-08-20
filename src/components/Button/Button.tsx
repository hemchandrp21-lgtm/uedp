import React from 'react';
import './Button.css';

export interface ButtonProps {
  /** Exact Figma Layer Name: "Button" */
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
 * Figma Component: "Button"
 * Preserved Layer Name: Button
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Button: React.FC<ButtonProps> = ({
  title = 'Button',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Button-container ${className}`} data-figma-layer="Button" data-variant={variant}>
      <div className="Button-header">
        <span className="Button-title">{title}</span>
        <span className="Button-badge">{variant}</span>
      </div>
      <div className="Button-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Button;
