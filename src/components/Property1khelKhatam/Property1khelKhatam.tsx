import React from 'react';
import './Property1khelKhatam.css';

export interface Property1khelKhatamProps {
  /** Exact Figma Layer Name: "Property 1=khel khatam" */
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
 * Figma Component: "Property 1=khel khatam"
 * Preserved Layer Name: Property 1=khel khatam
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1khelKhatam: React.FC<Property1khelKhatamProps> = ({
  title = 'Property 1=khel khatam',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1khelKhatam-container ${className}`} data-figma-layer="Property 1=khel khatam" data-variant={variant}>
      <div className="Property1khelKhatam-header">
        <span className="Property1khelKhatam-title">{title}</span>
        <span className="Property1khelKhatam-badge">{variant}</span>
      </div>
      <div className="Property1khelKhatam-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1khelKhatam;
