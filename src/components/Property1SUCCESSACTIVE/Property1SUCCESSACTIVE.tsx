import React from 'react';
import './Property1SUCCESSACTIVE.css';

export interface Property1SUCCESSACTIVEProps {
  /** Exact Figma Layer Name: "Property 1=SUCCESS ACTIVE" */
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
 * Figma Component: "Property 1=SUCCESS ACTIVE"
 * Preserved Layer Name: Property 1=SUCCESS ACTIVE
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1SUCCESSACTIVE: React.FC<Property1SUCCESSACTIVEProps> = ({
  title = 'Property 1=SUCCESS ACTIVE',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1SUCCESSACTIVE-container ${className}`} data-figma-layer="Property 1=SUCCESS ACTIVE" data-variant={variant}>
      <div className="Property1SUCCESSACTIVE-header">
        <span className="Property1SUCCESSACTIVE-title">{title}</span>
        <span className="Property1SUCCESSACTIVE-badge">{variant}</span>
      </div>
      <div className="Property1SUCCESSACTIVE-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1SUCCESSACTIVE;
