import React from 'react';
import './Property1dullText.css';

export interface Property1dullTextProps {
  /** Exact Figma Layer Name: "Property 1=dull text" */
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
 * Figma Component: "Property 1=dull text"
 * Preserved Layer Name: Property 1=dull text
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1dullText: React.FC<Property1dullTextProps> = ({
  title = 'Property 1=dull text',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1dullText-container ${className}`} data-figma-layer="Property 1=dull text" data-variant={variant}>
      <div className="Property1dullText-header">
        <span className="Property1dullText-title">{title}</span>
        <span className="Property1dullText-badge">{variant}</span>
      </div>
      <div className="Property1dullText-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1dullText;
