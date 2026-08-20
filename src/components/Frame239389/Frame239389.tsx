import React from 'react';
import './Frame239389.css';

export interface Frame239389Props {
  /** Exact Figma Layer Name: "Frame 239389" */
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
 * Figma Component: "Frame 239389"
 * Preserved Layer Name: Frame 239389
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239389: React.FC<Frame239389Props> = ({
  title = 'Frame 239389',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239389-container ${className}`} data-figma-layer="Frame 239389" data-variant={variant}>
      <div className="Frame239389-header">
        <span className="Frame239389-title">{title}</span>
        <span className="Frame239389-badge">{variant}</span>
      </div>
      <div className="Frame239389-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239389;
