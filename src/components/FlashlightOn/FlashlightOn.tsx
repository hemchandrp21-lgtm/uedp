import React from 'react';
import './FlashlightOn.css';

export interface FlashlightOnProps {
  /** Exact Figma Layer Name: "flashlight_on" */
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
 * Figma Component: "flashlight_on"
 * Preserved Layer Name: flashlight_on
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const FlashlightOn: React.FC<FlashlightOnProps> = ({
  title = 'flashlight_on',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`FlashlightOn-container ${className}`} data-figma-layer="flashlight_on" data-variant={variant}>
      <div className="FlashlightOn-header">
        <span className="FlashlightOn-title">{title}</span>
        <span className="FlashlightOn-badge">{variant}</span>
      </div>
      <div className="FlashlightOn-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default FlashlightOn;
