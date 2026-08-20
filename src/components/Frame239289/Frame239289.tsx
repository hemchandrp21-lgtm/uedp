import React from 'react';
import './Frame239289.css';

export interface Frame239289Props {
  /** Exact Figma Layer Name: "Frame 239289" */
  title?: string;
  /** Primary description or content text */
  description?: string;
  /** Component state or variant */
  variant?: 'Default' | 'Variant2' | 't';
  /** Optional custom CSS class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Figma Component: "Frame 239289"
 * Preserved Layer Name: Frame 239289
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239289: React.FC<Frame239289Props> = ({
  title = 'Frame 239289',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'Default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239289-container ${className}`} data-figma-layer="Frame 239289" data-variant={variant}>
      <div className="Frame239289-header">
        <span className="Frame239289-title">{title}</span>
        <span className="Frame239289-badge">{variant}</span>
      </div>
      <div className="Frame239289-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239289;
