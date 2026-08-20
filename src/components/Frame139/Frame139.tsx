import React from 'react';
import './Frame139.css';

export interface Frame139Props {
  /** Exact Figma Layer Name: "Frame 139" */
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
 * Figma Component: "Frame 139"
 * Preserved Layer Name: Frame 139
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame139: React.FC<Frame139Props> = ({
  title = 'Frame 139',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame139-container ${className}`} data-figma-layer="Frame 139" data-variant={variant}>
      <div className="Frame139-header">
        <span className="Frame139-title">{title}</span>
        <span className="Frame139-badge">{variant}</span>
      </div>
      <div className="Frame139-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame139;
