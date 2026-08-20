import React from 'react';
import './Property1t.css';

export interface Property1tProps {
  /** Exact Figma Layer Name: "Property 1=t" */
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
 * Figma Component: "Property 1=t"
 * Preserved Layer Name: Property 1=t
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1t: React.FC<Property1tProps> = ({
  title = 'Property 1=t',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1t-container ${className}`} data-figma-layer="Property 1=t" data-variant={variant}>
      <div className="Property1t-header">
        <span className="Property1t-title">{title}</span>
        <span className="Property1t-badge">{variant}</span>
      </div>
      <div className="Property1t-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1t;
