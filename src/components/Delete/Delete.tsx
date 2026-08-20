import React from 'react';
import './Delete.css';

export interface DeleteProps {
  /** Exact Figma Layer Name: "delete" */
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
 * Figma Component: "delete"
 * Preserved Layer Name: delete
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Delete: React.FC<DeleteProps> = ({
  title = 'delete',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Delete-container ${className}`} data-figma-layer="delete" data-variant={variant}>
      <div className="Delete-header">
        <span className="Delete-title">{title}</span>
        <span className="Delete-badge">{variant}</span>
      </div>
      <div className="Delete-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Delete;
