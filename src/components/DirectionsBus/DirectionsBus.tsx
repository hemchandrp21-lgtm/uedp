import React from 'react';
import './DirectionsBus.css';

export interface DirectionsBusProps {
  /** Exact Figma Layer Name: "directions_bus" */
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
 * Figma Component: "directions_bus"
 * Preserved Layer Name: directions_bus
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const DirectionsBus: React.FC<DirectionsBusProps> = ({
  title = 'directions_bus',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`DirectionsBus-container ${className}`} data-figma-layer="directions_bus" data-variant={variant}>
      <div className="DirectionsBus-header">
        <span className="DirectionsBus-title">{title}</span>
        <span className="DirectionsBus-badge">{variant}</span>
      </div>
      <div className="DirectionsBus-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default DirectionsBus;
