import React from 'react';
import './DirectionsWalk.css';

export interface DirectionsWalkProps {
  /** Exact Figma Layer Name: "directions_walk" */
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
 * Figma Component: "directions_walk"
 * Preserved Layer Name: directions_walk
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const DirectionsWalk: React.FC<DirectionsWalkProps> = ({
  title = 'directions_walk',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`DirectionsWalk-container ${className}`} data-figma-layer="directions_walk" data-variant={variant}>
      <div className="DirectionsWalk-header">
        <span className="DirectionsWalk-title">{title}</span>
        <span className="DirectionsWalk-badge">{variant}</span>
      </div>
      <div className="DirectionsWalk-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default DirectionsWalk;
