import React from 'react';
import './Frame239347.css';

export interface Frame239347Props {
  /** Exact Figma Layer Name: "Frame 239347" */
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
 * Figma Component: "Frame 239347"
 * Preserved Layer Name: Frame 239347
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239347: React.FC<Frame239347Props> = ({
  title = 'Frame 239347',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239347-container ${className}`} data-figma-layer="Frame 239347" data-variant={variant}>
      <div className="Frame239347-header">
        <span className="Frame239347-title">{title}</span>
        <span className="Frame239347-badge">{variant}</span>
      </div>
      <div className="Frame239347-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239347;
