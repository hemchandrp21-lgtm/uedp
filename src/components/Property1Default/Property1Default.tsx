import React from 'react';
import './Property1Default.css';

export interface Property1DefaultProps {
  /** Exact Figma Layer Name: "Property 1=Default" */
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
 * Figma Component: "Property 1=Default"
 * Preserved Layer Name: Property 1=Default
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1Default: React.FC<Property1DefaultProps> = ({
  title = 'Property 1=Default',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1Default-container ${className}`} data-figma-layer="Property 1=Default" data-variant={variant}>
      <div className="Property1Default-header">
        <span className="Property1Default-title">{title}</span>
        <span className="Property1Default-badge">{variant}</span>
      </div>
      <div className="Property1Default-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1Default;
