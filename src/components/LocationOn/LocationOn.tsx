import React from 'react';
import './LocationOn.css';

export interface LocationOnProps {
  /** Exact Figma Layer Name: "location_on" */
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
 * Figma Component: "location_on"
 * Preserved Layer Name: location_on
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const LocationOn: React.FC<LocationOnProps> = ({
  title = 'location_on',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`LocationOn-container ${className}`} data-figma-layer="location_on" data-variant={variant}>
      <div className="LocationOn-header">
        <span className="LocationOn-title">{title}</span>
        <span className="LocationOn-badge">{variant}</span>
      </div>
      <div className="LocationOn-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default LocationOn;
