import React from 'react';
import './Property1selected.css';

export interface Property1selectedProps {
  /** Exact Figma Layer Name: "Property 1=selected" */
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
 * Figma Component: "Property 1=selected"
 * Preserved Layer Name: Property 1=selected
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1selected: React.FC<Property1selectedProps> = ({
  title = 'Property 1=selected',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1selected-container ${className}`} data-figma-layer="Property 1=selected" data-variant={variant}>
      <div className="Property1selected-header">
        <span className="Property1selected-title">{title}</span>
        <span className="Property1selected-badge">{variant}</span>
      </div>
      <div className="Property1selected-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1selected;
