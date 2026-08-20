import React from 'react';
import './AddCircle.css';

export interface AddCircleProps {
  /** Exact Figma Layer Name: "add_circle" */
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
 * Figma Component: "add_circle"
 * Preserved Layer Name: add_circle
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const AddCircle: React.FC<AddCircleProps> = ({
  title = 'add_circle',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`AddCircle-container ${className}`} data-figma-layer="add_circle" data-variant={variant}>
      <div className="AddCircle-header">
        <span className="AddCircle-title">{title}</span>
        <span className="AddCircle-badge">{variant}</span>
      </div>
      <div className="AddCircle-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default AddCircle;
