import React from 'react';
import './Keyboard.css';

export interface KeyboardProps {
  /** Exact Figma Layer Name: "keyboard" */
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
 * Figma Component: "keyboard"
 * Preserved Layer Name: keyboard
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Keyboard: React.FC<KeyboardProps> = ({
  title = 'keyboard',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Keyboard-container ${className}`} data-figma-layer="keyboard" data-variant={variant}>
      <div className="Keyboard-header">
        <span className="Keyboard-title">{title}</span>
        <span className="Keyboard-badge">{variant}</span>
      </div>
      <div className="Keyboard-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Keyboard;
