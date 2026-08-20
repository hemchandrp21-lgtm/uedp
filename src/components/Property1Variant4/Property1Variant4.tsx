import React from 'react';
import './Property1Variant4.css';

export interface Property1Variant4Props {
  /** Exact Figma Layer Name: "Property 1=Variant4" */
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
 * Figma Component: "Property 1=Variant4"
 * Preserved Layer Name: Property 1=Variant4
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1Variant4: React.FC<Property1Variant4Props> = ({
  title = 'Property 1=Variant4',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1Variant4-container ${className}`} data-figma-layer="Property 1=Variant4" data-variant={variant}>
      <div className="Property1Variant4-header">
        <span className="Property1Variant4-title">{title}</span>
        <span className="Property1Variant4-badge">{variant}</span>
      </div>
      <div className="Property1Variant4-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1Variant4;
