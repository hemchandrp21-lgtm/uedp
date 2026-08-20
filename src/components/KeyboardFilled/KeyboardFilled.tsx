import React from 'react';
import './KeyboardFilled.css';

export interface KeyboardFilledProps {
  /** Exact Figma Layer Name: "keyboard_filled" */
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
 * Figma Component: "keyboard_filled"
 * Preserved Layer Name: keyboard_filled
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const KeyboardFilled: React.FC<KeyboardFilledProps> = ({
  title = 'keyboard_filled',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`KeyboardFilled-container ${className}`} data-figma-layer="keyboard_filled" data-variant={variant}>
      <div className="KeyboardFilled-header">
        <span className="KeyboardFilled-title">{title}</span>
        <span className="KeyboardFilled-badge">{variant}</span>
      </div>
      <div className="KeyboardFilled-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default KeyboardFilled;
