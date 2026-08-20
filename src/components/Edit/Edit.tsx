import React from 'react';
import './Edit.css';

export interface EditProps {
  /** Exact Figma Layer Name: "edit" */
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
 * Figma Component: "edit"
 * Preserved Layer Name: edit
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Edit: React.FC<EditProps> = ({
  title = 'edit',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Edit-container ${className}`} data-figma-layer="edit" data-variant={variant}>
      <div className="Edit-header">
        <span className="Edit-title">{title}</span>
        <span className="Edit-badge">{variant}</span>
      </div>
      <div className="Edit-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Edit;
