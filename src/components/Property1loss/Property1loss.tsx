import React from 'react';
import './Property1loss.css';

export interface Property1lossProps {
  /** Exact Figma Layer Name: "Property 1=loss" */
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
 * Figma Component: "Property 1=loss"
 * Preserved Layer Name: Property 1=loss
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1loss: React.FC<Property1lossProps> = ({
  title = 'Property 1=loss',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1loss-container ${className}`} data-figma-layer="Property 1=loss" data-variant={variant}>
      <div className="Property1loss-header">
        <span className="Property1loss-title">{title}</span>
        <span className="Property1loss-badge">{variant}</span>
      </div>
      <div className="Property1loss-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1loss;
