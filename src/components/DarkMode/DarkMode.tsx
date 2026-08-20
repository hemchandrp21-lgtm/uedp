import React from 'react';
import './DarkMode.css';

export interface DarkModeProps {
  /** Exact Figma Layer Name: "dark_mode" */
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
 * Figma Component: "dark_mode"
 * Preserved Layer Name: dark_mode
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const DarkMode: React.FC<DarkModeProps> = ({
  title = 'dark_mode',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`DarkMode-container ${className}`} data-figma-layer="dark_mode" data-variant={variant}>
      <div className="DarkMode-header">
        <span className="DarkMode-title">{title}</span>
        <span className="DarkMode-badge">{variant}</span>
      </div>
      <div className="DarkMode-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default DarkMode;
