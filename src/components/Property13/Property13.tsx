import React from 'react';
import './Property13.css';

export interface Property13Props {
  /** Exact Figma Layer Name: "Property 1=3" */
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
 * Figma Component: "Property 1=3"
 * Preserved Layer Name: Property 1=3
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property13: React.FC<Property13Props> = ({
  title = 'Property 1=3',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property13-container ${className}`} data-figma-layer="Property 1=3" data-variant={variant}>
      <div className="Property13-header">
        <span className="Property13-title">{title}</span>
        <span className="Property13-badge">{variant}</span>
      </div>
      <div className="Property13-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property13;
