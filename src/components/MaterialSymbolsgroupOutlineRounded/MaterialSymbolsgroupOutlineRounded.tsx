import React from 'react';
import './MaterialSymbolsgroupOutlineRounded.css';

export interface MaterialSymbolsgroupOutlineRoundedProps {
  /** Exact Figma Layer Name: "material-symbols:group-outline-rounded" */
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
 * Figma Component: "material-symbols:group-outline-rounded"
 * Preserved Layer Name: material-symbols:group-outline-rounded
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const MaterialSymbolsgroupOutlineRounded: React.FC<MaterialSymbolsgroupOutlineRoundedProps> = ({
  title = 'material-symbols:group-outline-rounded',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`MaterialSymbolsgroupOutlineRounded-container ${className}`} data-figma-layer="material-symbols:group-outline-rounded" data-variant={variant}>
      <div className="MaterialSymbolsgroupOutlineRounded-header">
        <span className="MaterialSymbolsgroupOutlineRounded-title">{title}</span>
        <span className="MaterialSymbolsgroupOutlineRounded-badge">{variant}</span>
      </div>
      <div className="MaterialSymbolsgroupOutlineRounded-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default MaterialSymbolsgroupOutlineRounded;
