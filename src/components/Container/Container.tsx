import React from 'react';
import './Container.css';

export interface ContainerProps {
  /** Exact Figma Layer Name: "Container" */
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
 * Figma Component: "Container"
 * Preserved Layer Name: Container
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Container: React.FC<ContainerProps> = ({
  title = 'Container',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Container-container ${className}`} data-figma-layer="Container" data-variant={variant}>
      <div className="Container-header">
        <span className="Container-title">{title}</span>
        <span className="Container-badge">{variant}</span>
      </div>
      <div className="Container-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Container;
