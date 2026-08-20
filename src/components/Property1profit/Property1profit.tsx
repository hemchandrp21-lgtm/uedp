import React from 'react';
import './Property1profit.css';

export interface Property1profitProps {
  /** Exact Figma Layer Name: "Property 1=profit" */
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
 * Figma Component: "Property 1=profit"
 * Preserved Layer Name: Property 1=profit
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1profit: React.FC<Property1profitProps> = ({
  title = 'Property 1=profit',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1profit-container ${className}`} data-figma-layer="Property 1=profit" data-variant={variant}>
      <div className="Property1profit-header">
        <span className="Property1profit-title">{title}</span>
        <span className="Property1profit-badge">{variant}</span>
      </div>
      <div className="Property1profit-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1profit;
