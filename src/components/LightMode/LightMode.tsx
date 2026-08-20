import React from 'react';
import './LightMode.css';

export interface LightModeProps {
  /** Exact Figma Layer Name: "light_mode" */
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
 * Figma Component: "light_mode"
 * Preserved Layer Name: light_mode
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const LightMode: React.FC<LightModeProps> = ({
  title = 'light_mode',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`LightMode-container ${className}`} data-figma-layer="light_mode" data-variant={variant}>
      <div className="LightMode-header">
        <span className="LightMode-title">{title}</span>
        <span className="LightMode-badge">{variant}</span>
      </div>
      <div className="LightMode-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default LightMode;
