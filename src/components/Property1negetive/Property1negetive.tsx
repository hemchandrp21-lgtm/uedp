import React from 'react';
import './Property1negetive.css';

export interface Property1negetiveProps {
  /** Exact Figma Layer Name: "Property 1=negetive" */
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
 * Figma Component: "Property 1=negetive"
 * Preserved Layer Name: Property 1=negetive
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1negetive: React.FC<Property1negetiveProps> = ({
  title = 'Property 1=negetive',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1negetive-container ${className}`} data-figma-layer="Property 1=negetive" data-variant={variant}>
      <div className="Property1negetive-header">
        <span className="Property1negetive-title">{title}</span>
        <span className="Property1negetive-badge">{variant}</span>
      </div>
      <div className="Property1negetive-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1negetive;
