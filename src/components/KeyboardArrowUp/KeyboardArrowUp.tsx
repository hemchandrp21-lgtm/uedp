import React from 'react';
import './KeyboardArrowUp.css';

export interface KeyboardArrowUpProps {
  /** Exact Figma Layer Name: "keyboard_arrow_up" */
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
 * Figma Component: "keyboard_arrow_up"
 * Preserved Layer Name: keyboard_arrow_up
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const KeyboardArrowUp: React.FC<KeyboardArrowUpProps> = ({
  title = 'keyboard_arrow_up',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`KeyboardArrowUp-container ${className}`} data-figma-layer="keyboard_arrow_up" data-variant={variant}>
      <div className="KeyboardArrowUp-header">
        <span className="KeyboardArrowUp-title">{title}</span>
        <span className="KeyboardArrowUp-badge">{variant}</span>
      </div>
      <div className="KeyboardArrowUp-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default KeyboardArrowUp;
