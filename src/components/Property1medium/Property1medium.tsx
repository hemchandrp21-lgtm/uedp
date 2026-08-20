import React from 'react';
import './Property1medium.css';

export interface Property1mediumProps {
  /** Exact Figma Layer Name: "Property 1=medium" */
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
 * Figma Component: "Property 1=medium"
 * Preserved Layer Name: Property 1=medium
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1medium: React.FC<Property1mediumProps> = ({
  title = 'Property 1=medium',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1medium-container ${className}`} data-figma-layer="Property 1=medium" data-variant={variant}>
      <div className="Property1medium-header">
        <span className="Property1medium-title">{title}</span>
        <span className="Property1medium-badge">{variant}</span>
      </div>
      <div className="Property1medium-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1medium;
