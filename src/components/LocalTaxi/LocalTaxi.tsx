import React from 'react';
import './LocalTaxi.css';

export interface LocalTaxiProps {
  /** Exact Figma Layer Name: "local_taxi" */
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
 * Figma Component: "local_taxi"
 * Preserved Layer Name: local_taxi
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const LocalTaxi: React.FC<LocalTaxiProps> = ({
  title = 'local_taxi',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`LocalTaxi-container ${className}`} data-figma-layer="local_taxi" data-variant={variant}>
      <div className="LocalTaxi-header">
        <span className="LocalTaxi-title">{title}</span>
        <span className="LocalTaxi-badge">{variant}</span>
      </div>
      <div className="LocalTaxi-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default LocalTaxi;
