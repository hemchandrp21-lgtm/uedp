import React from 'react';
import './FastRewind.css';

export interface FastRewindProps {
  /** Exact Figma Layer Name: "fast_rewind" */
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
 * Figma Component: "fast_rewind"
 * Preserved Layer Name: fast_rewind
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const FastRewind: React.FC<FastRewindProps> = ({
  title = 'fast_rewind',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`FastRewind-container ${className}`} data-figma-layer="fast_rewind" data-variant={variant}>
      <div className="FastRewind-header">
        <span className="FastRewind-title">{title}</span>
        <span className="FastRewind-badge">{variant}</span>
      </div>
      <div className="FastRewind-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default FastRewind;
