import React from 'react';
import './KeyboardArrowDown.css';

export interface KeyboardArrowDownProps {
  /** Exact Figma Layer Name: "keyboard_arrow_down" */
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
 * Figma Component: "keyboard_arrow_down"
 * Preserved Layer Name: keyboard_arrow_down
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const KeyboardArrowDown: React.FC<KeyboardArrowDownProps> = ({
  title = 'keyboard_arrow_down',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`KeyboardArrowDown-container ${className}`} data-figma-layer="keyboard_arrow_down" data-variant={variant}>
      <div className="KeyboardArrowDown-header">
        <span className="KeyboardArrowDown-title">{title}</span>
        <span className="KeyboardArrowDown-badge">{variant}</span>
      </div>
      <div className="KeyboardArrowDown-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default KeyboardArrowDown;
