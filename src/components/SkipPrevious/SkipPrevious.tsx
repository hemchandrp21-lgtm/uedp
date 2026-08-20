import React from 'react';
import './SkipPrevious.css';

export interface SkipPreviousProps {
  /** Exact Figma Layer Name: "skip_previous" */
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
 * Figma Component: "skip_previous"
 * Preserved Layer Name: skip_previous
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const SkipPrevious: React.FC<SkipPreviousProps> = ({
  title = 'skip_previous',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`SkipPrevious-container ${className}`} data-figma-layer="skip_previous" data-variant={variant}>
      <div className="SkipPrevious-header">
        <span className="SkipPrevious-title">{title}</span>
        <span className="SkipPrevious-badge">{variant}</span>
      </div>
      <div className="SkipPrevious-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default SkipPrevious;
