import React from 'react';
import './Property1neg.css';

export interface Property1negProps {
  /** Exact Figma Layer Name: "Property 1=neg" */
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
 * Figma Component: "Property 1=neg"
 * Preserved Layer Name: Property 1=neg
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1neg: React.FC<Property1negProps> = ({
  title = 'Property 1=neg',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1neg-container ${className}`} data-figma-layer="Property 1=neg" data-variant={variant}>
      <div className="Property1neg-header">
        <span className="Property1neg-title">{title}</span>
        <span className="Property1neg-badge">{variant}</span>
      </div>
      <div className="Property1neg-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1neg;
