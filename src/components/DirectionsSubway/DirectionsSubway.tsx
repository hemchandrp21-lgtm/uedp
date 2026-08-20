import React from 'react';
import './DirectionsSubway.css';

export interface DirectionsSubwayProps {
  /** Exact Figma Layer Name: "directions_subway" */
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
 * Figma Component: "directions_subway"
 * Preserved Layer Name: directions_subway
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const DirectionsSubway: React.FC<DirectionsSubwayProps> = ({
  title = 'directions_subway',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`DirectionsSubway-container ${className}`} data-figma-layer="directions_subway" data-variant={variant}>
      <div className="DirectionsSubway-header">
        <span className="DirectionsSubway-title">{title}</span>
        <span className="DirectionsSubway-badge">{variant}</span>
      </div>
      <div className="DirectionsSubway-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default DirectionsSubway;
