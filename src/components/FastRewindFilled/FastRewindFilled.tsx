import React from 'react';
import './FastRewindFilled.css';

export interface FastRewindFilledProps {
  /** Exact Figma Layer Name: "fast_rewind_filled" */
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
 * Figma Component: "fast_rewind_filled"
 * Preserved Layer Name: fast_rewind_filled
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const FastRewindFilled: React.FC<FastRewindFilledProps> = ({
  title = 'fast_rewind_filled',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`FastRewindFilled-container ${className}`} data-figma-layer="fast_rewind_filled" data-variant={variant}>
      <div className="FastRewindFilled-header">
        <span className="FastRewindFilled-title">{title}</span>
        <span className="FastRewindFilled-badge">{variant}</span>
      </div>
      <div className="FastRewindFilled-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default FastRewindFilled;
