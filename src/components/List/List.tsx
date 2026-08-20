import React from 'react';
import './List.css';

export interface ListProps {
  /** Exact Figma Layer Name: "list" */
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
 * Figma Component: "list"
 * Preserved Layer Name: list
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const List: React.FC<ListProps> = ({
  title = 'list',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`List-container ${className}`} data-figma-layer="list" data-variant={variant}>
      <div className="List-header">
        <span className="List-title">{title}</span>
        <span className="List-badge">{variant}</span>
      </div>
      <div className="List-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default List;
