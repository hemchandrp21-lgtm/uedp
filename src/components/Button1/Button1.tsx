import React from 'react';
import './Button1.css';

export interface Button1Props {
  /** Exact Figma Layer Name: "button 1" */
  title?: string;
  /** Primary description or content text */
  description?: string;
  /** Component state or variant */
  variant?: 'Default' | 'Variant2' | 'Variant3';
  /** Optional custom CSS class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Figma Component: "button 1"
 * Preserved Layer Name: button 1
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Button1: React.FC<Button1Props> = ({
  title = 'button 1',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'Default',
  className = '',
  children
}) => {
  return (
    <div className={`Button1-container ${className}`} data-figma-layer="button 1" data-variant={variant}>
      <div className="Button1-header">
        <span className="Button1-title">{title}</span>
        <span className="Button1-badge">{variant}</span>
      </div>
      <div className="Button1-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Button1;
