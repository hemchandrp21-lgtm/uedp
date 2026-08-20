import React from 'react';
import './Property1pos.css';

export interface Property1posProps {
  /** Exact Figma Layer Name: "Property 1=pos" */
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
 * Figma Component: "Property 1=pos"
 * Preserved Layer Name: Property 1=pos
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1pos: React.FC<Property1posProps> = ({
  title = 'Property 1=pos',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1pos-container ${className}`} data-figma-layer="Property 1=pos" data-variant={variant}>
      <div className="Property1pos-header">
        <span className="Property1pos-title">{title}</span>
        <span className="Property1pos-badge">{variant}</span>
      </div>
      <div className="Property1pos-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1pos;
