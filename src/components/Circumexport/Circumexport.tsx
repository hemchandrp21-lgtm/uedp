import React from 'react';
import './Circumexport.css';

export interface CircumexportProps {
  /** Exact Figma Layer Name: "circum:export" */
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
 * Figma Component: "circum:export"
 * Preserved Layer Name: circum:export
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Circumexport: React.FC<CircumexportProps> = ({
  title = 'circum:export',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Circumexport-container ${className}`} data-figma-layer="circum:export" data-variant={variant}>
      <div className="Circumexport-header">
        <span className="Circumexport-title">{title}</span>
        <span className="Circumexport-badge">{variant}</span>
      </div>
      <div className="Circumexport-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Circumexport;
