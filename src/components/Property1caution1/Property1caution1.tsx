import React from 'react';
import './Property1caution1.css';

export interface Property1caution1Props {
  /** Exact Figma Layer Name: "Property 1=caution 1" */
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
 * Figma Component: "Property 1=caution 1"
 * Preserved Layer Name: Property 1=caution 1
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1caution1: React.FC<Property1caution1Props> = ({
  title = 'Property 1=caution 1',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1caution1-container ${className}`} data-figma-layer="Property 1=caution 1" data-variant={variant}>
      <div className="Property1caution1-header">
        <span className="Property1caution1-title">{title}</span>
        <span className="Property1caution1-badge">{variant}</span>
      </div>
      <div className="Property1caution1-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1caution1;
