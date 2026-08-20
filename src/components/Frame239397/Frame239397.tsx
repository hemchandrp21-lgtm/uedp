import React from 'react';
import './Frame239397.css';

export interface Frame239397Props {
  /** Exact Figma Layer Name: "Frame 239397" */
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
 * Figma Component: "Frame 239397"
 * Preserved Layer Name: Frame 239397
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239397: React.FC<Frame239397Props> = ({
  title = 'Frame 239397',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239397-container ${className}`} data-figma-layer="Frame 239397" data-variant={variant}>
      <div className="Frame239397-header">
        <span className="Frame239397-title">{title}</span>
        <span className="Frame239397-badge">{variant}</span>
      </div>
      <div className="Frame239397-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239397;
