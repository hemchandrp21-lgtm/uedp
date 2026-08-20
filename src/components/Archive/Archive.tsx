import React from 'react';
import './Archive.css';

export interface ArchiveProps {
  /** Exact Figma Layer Name: "archive" */
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
 * Figma Component: "archive"
 * Preserved Layer Name: archive
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Archive: React.FC<ArchiveProps> = ({
  title = 'archive',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Archive-container ${className}`} data-figma-layer="archive" data-variant={variant}>
      <div className="Archive-header">
        <span className="Archive-title">{title}</span>
        <span className="Archive-badge">{variant}</span>
      </div>
      <div className="Archive-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Archive;
