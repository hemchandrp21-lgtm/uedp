import React from 'react';
import './LinkOff.css';

export interface LinkOffProps {
  /** Exact Figma Layer Name: "link_off" */
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
 * Figma Component: "link_off"
 * Preserved Layer Name: link_off
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const LinkOff: React.FC<LinkOffProps> = ({
  title = 'link_off',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`LinkOff-container ${className}`} data-figma-layer="link_off" data-variant={variant}>
      <div className="LinkOff-header">
        <span className="LinkOff-title">{title}</span>
        <span className="LinkOff-badge">{variant}</span>
      </div>
      <div className="LinkOff-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default LinkOff;
