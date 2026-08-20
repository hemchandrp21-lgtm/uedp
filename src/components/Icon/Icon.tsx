import React from 'react';
import './Icon.css';

export interface IconProps {
  /** Exact Figma Layer Name: "Icon" */
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
 * Figma Component: "Icon"
 * Preserved Layer Name: Icon
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Icon: React.FC<IconProps> = ({
  title = 'Icon',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Icon-container ${className}`} data-figma-layer="Icon" data-variant={variant}>
      <div className="Icon-header">
        <span className="Icon-title">{title}</span>
        <span className="Icon-badge">{variant}</span>
      </div>
      <div className="Icon-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Icon;
