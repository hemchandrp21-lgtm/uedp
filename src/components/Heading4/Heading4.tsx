import React from 'react';
import './Heading4.css';

export interface Heading4Props {
  /** Exact Figma Layer Name: "Heading 4" */
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
 * Figma Component: "Heading 4"
 * Preserved Layer Name: Heading 4
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Heading4: React.FC<Heading4Props> = ({
  title = 'Heading 4',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Heading4-container ${className}`} data-figma-layer="Heading 4" data-variant={variant}>
      <div className="Heading4-header">
        <span className="Heading4-title">{title}</span>
        <span className="Heading4-badge">{variant}</span>
      </div>
      <div className="Heading4-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Heading4;
