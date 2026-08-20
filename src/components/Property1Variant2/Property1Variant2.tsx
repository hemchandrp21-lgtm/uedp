import React from 'react';
import './Property1Variant2.css';

export interface Property1Variant2Props {
  /** Exact Figma Layer Name: "Property 1=Variant2" */
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
 * Figma Component: "Property 1=Variant2"
 * Preserved Layer Name: Property 1=Variant2
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1Variant2: React.FC<Property1Variant2Props> = ({
  title = 'Property 1=Variant2',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1Variant2-container ${className}`} data-figma-layer="Property 1=Variant2" data-variant={variant}>
      <div className="Property1Variant2-header">
        <span className="Property1Variant2-title">{title}</span>
        <span className="Property1Variant2-badge">{variant}</span>
      </div>
      <div className="Property1Variant2-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1Variant2;
