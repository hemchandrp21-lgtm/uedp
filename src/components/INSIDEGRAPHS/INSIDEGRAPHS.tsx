import React from 'react';
import './INSIDEGRAPHS.css';

export interface INSIDEGRAPHSProps {
  /** Exact Figma Layer Name: "INSIDE GRAPHS" */
  title?: string;
  /** Primary description or content text */
  description?: string;
  /** Component state or variant */
  variant?: 'negetive' | 'positive' | 'Default' | 'purpl';
  /** Optional custom CSS class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Figma Component: "INSIDE GRAPHS"
 * Preserved Layer Name: INSIDE GRAPHS
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const INSIDEGRAPHS: React.FC<INSIDEGRAPHSProps> = ({
  title = 'INSIDE GRAPHS',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'negetive',
  className = '',
  children
}) => {
  return (
    <div className={`INSIDEGRAPHS-container ${className}`} data-figma-layer="INSIDE GRAPHS" data-variant={variant}>
      <div className="INSIDEGRAPHS-header">
        <span className="INSIDEGRAPHS-title">{title}</span>
        <span className="INSIDEGRAPHS-badge">{variant}</span>
      </div>
      <div className="INSIDEGRAPHS-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default INSIDEGRAPHS;
