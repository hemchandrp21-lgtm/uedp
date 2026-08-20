import React from 'react';
import './Property1mid.css';

export interface Property1midProps {
  /** Exact Figma Layer Name: "Property 1=mid" */
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
 * Figma Component: "Property 1=mid"
 * Preserved Layer Name: Property 1=mid
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1mid: React.FC<Property1midProps> = ({
  title = 'Property 1=mid',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1mid-container ${className}`} data-figma-layer="Property 1=mid" data-variant={variant}>
      <div className="Property1mid-header">
        <span className="Property1mid-title">{title}</span>
        <span className="Property1mid-badge">{variant}</span>
      </div>
      <div className="Property1mid-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1mid;
