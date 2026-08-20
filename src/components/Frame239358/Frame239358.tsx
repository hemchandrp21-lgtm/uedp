import React from 'react';
import './Frame239358.css';

export interface Frame239358Props {
  /** Exact Figma Layer Name: "Frame 239358" */
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
 * Figma Component: "Frame 239358"
 * Preserved Layer Name: Frame 239358
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239358: React.FC<Frame239358Props> = ({
  title = 'Frame 239358',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239358-container ${className}`} data-figma-layer="Frame 239358" data-variant={variant}>
      <div className="Frame239358-header">
        <span className="Frame239358-title">{title}</span>
        <span className="Frame239358-badge">{variant}</span>
      </div>
      <div className="Frame239358-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239358;
