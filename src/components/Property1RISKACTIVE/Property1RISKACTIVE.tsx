import React from 'react';
import './Property1RISKACTIVE.css';

export interface Property1RISKACTIVEProps {
  /** Exact Figma Layer Name: "Property 1=RISK ACTIVE" */
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
 * Figma Component: "Property 1=RISK ACTIVE"
 * Preserved Layer Name: Property 1=RISK ACTIVE
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1RISKACTIVE: React.FC<Property1RISKACTIVEProps> = ({
  title = 'Property 1=RISK ACTIVE',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1RISKACTIVE-container ${className}`} data-figma-layer="Property 1=RISK ACTIVE" data-variant={variant}>
      <div className="Property1RISKACTIVE-header">
        <span className="Property1RISKACTIVE-title">{title}</span>
        <span className="Property1RISKACTIVE-badge">{variant}</span>
      </div>
      <div className="Property1RISKACTIVE-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1RISKACTIVE;
