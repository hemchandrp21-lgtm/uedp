import React from 'react';
import './Search.css';

export interface SearchProps {
  /** Exact Figma Layer Name: "search" */
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
 * Figma Component: "search"
 * Preserved Layer Name: search
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Search: React.FC<SearchProps> = ({
  title = 'search',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Search-container ${className}`} data-figma-layer="search" data-variant={variant}>
      <div className="Search-header">
        <span className="Search-title">{title}</span>
        <span className="Search-badge">{variant}</span>
      </div>
      <div className="Search-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Search;
