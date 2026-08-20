import React from 'react';
import './Link.css';

export interface LinkProps {
  /** Exact Figma Layer Name: "Link" */
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
 * Figma Component: "Link"
 * Preserved Layer Name: Link
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Link: React.FC<LinkProps> = ({
  title = 'Link',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Link-container ${className}`} data-figma-layer="Link" data-variant={variant}>
      <div className="Link-header">
        <span className="Link-title">{title}</span>
        <span className="Link-badge">{variant}</span>
      </div>
      <div className="Link-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Link;
