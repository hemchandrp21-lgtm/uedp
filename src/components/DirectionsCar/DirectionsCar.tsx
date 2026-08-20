import React from 'react';
import './DirectionsCar.css';

export interface DirectionsCarProps {
  /** Exact Figma Layer Name: "directions_car" */
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
 * Figma Component: "directions_car"
 * Preserved Layer Name: directions_car
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const DirectionsCar: React.FC<DirectionsCarProps> = ({
  title = 'directions_car',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`DirectionsCar-container ${className}`} data-figma-layer="directions_car" data-variant={variant}>
      <div className="DirectionsCar-header">
        <span className="DirectionsCar-title">{title}</span>
        <span className="DirectionsCar-badge">{variant}</span>
      </div>
      <div className="DirectionsCar-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default DirectionsCar;
