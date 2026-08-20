import React from 'react';
import './PERCENTAGES.css';

export interface PERCENTAGESProps {
  /** Exact Figma Layer Name: "PERCENTAGES" */
  title?: string;
  /** Primary description or content text */
  description?: string;
  /** Component state or variant */
  variant?: 'positive' | 'Variant2' | 'Variant3';
  /** Optional custom CSS class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Figma Component: "PERCENTAGES"
 * Preserved Layer Name: PERCENTAGES
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const PERCENTAGES: React.FC<PERCENTAGESProps> = ({
  title = 'PERCENTAGES',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'positive',
  className = '',
  children
}) => {
  return (
    <div className={`PERCENTAGES-container ${className}`} data-figma-layer="PERCENTAGES" data-variant={variant}>
      <div className="PERCENTAGES-header">
        <span className="PERCENTAGES-title">{title}</span>
        <span className="PERCENTAGES-badge">{variant}</span>
      </div>
      <div className="PERCENTAGES-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default PERCENTAGES;
