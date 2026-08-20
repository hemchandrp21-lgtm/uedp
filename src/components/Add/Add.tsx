import React from 'react';
import './Add.css';

export interface AddProps {
  /** Exact Figma Layer Name: "add" */
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
 * Figma Component: "add"
 * Preserved Layer Name: add
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Add: React.FC<AddProps> = ({
  title = 'add',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Add-container ${className}`} data-figma-layer="add" data-variant={variant}>
      <div className="Add-header">
        <span className="Add-title">{title}</span>
        <span className="Add-badge">{variant}</span>
      </div>
      <div className="Add-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Add;
