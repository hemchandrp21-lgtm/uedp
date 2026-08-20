import React from 'react';
import './Property1negative.css';

export interface Property1negativeProps {
  /** Exact Figma Layer Name: "Property 1=negative" */
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
 * Figma Component: "Property 1=negative"
 * Preserved Layer Name: Property 1=negative
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1negative: React.FC<Property1negativeProps> = ({
  title = 'Property 1=negative',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1negative-container ${className}`} data-figma-layer="Property 1=negative" data-variant={variant}>
      <div className="Property1negative-header">
        <span className="Property1negative-title">{title}</span>
        <span className="Property1negative-badge">{variant}</span>
      </div>
      <div className="Property1negative-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1negative;
