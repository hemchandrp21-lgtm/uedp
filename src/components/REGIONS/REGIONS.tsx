import React from 'react';
import './REGIONS.css';

export interface REGIONSProps {
  /** Exact Figma Layer Name: "REGIONS" */
  title?: string;
  /** Primary description or content text */
  description?: string;
  /** Component state or variant */
  variant?: 'Default' | 'Variant4' | 'Variant3';
  /** Optional custom CSS class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Figma Component: "REGIONS"
 * Preserved Layer Name: REGIONS
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const REGIONS: React.FC<REGIONSProps> = ({
  title = 'REGIONS',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'Default',
  className = '',
  children
}) => {
  return (
    <div className={`REGIONS-container ${className}`} data-figma-layer="REGIONS" data-variant={variant}>
      <div className="REGIONS-header">
        <span className="REGIONS-title">{title}</span>
        <span className="REGIONS-badge">{variant}</span>
      </div>
      <div className="REGIONS-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default REGIONS;
