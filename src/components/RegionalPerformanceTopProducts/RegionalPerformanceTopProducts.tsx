import React from 'react';
import './RegionalPerformanceTopProducts.css';

export interface RegionalPerformanceTopProductsProps {
  /** Exact Figma Layer Name: "Regional Performance & Top Products" */
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
 * Figma Component: "Regional Performance & Top Products"
 * Preserved Layer Name: Regional Performance & Top Products
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const RegionalPerformanceTopProducts: React.FC<RegionalPerformanceTopProductsProps> = ({
  title = 'Regional Performance & Top Products',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`RegionalPerformanceTopProducts-container ${className}`} data-figma-layer="Regional Performance & Top Products" data-variant={variant}>
      <div className="RegionalPerformanceTopProducts-header">
        <span className="RegionalPerformanceTopProducts-title">{title}</span>
        <span className="RegionalPerformanceTopProducts-badge">{variant}</span>
      </div>
      <div className="RegionalPerformanceTopProducts-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default RegionalPerformanceTopProducts;
