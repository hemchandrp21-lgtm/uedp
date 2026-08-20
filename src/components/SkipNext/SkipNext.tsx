import React from 'react';
import './SkipNext.css';

export interface SkipNextProps {
  /** Exact Figma Layer Name: "skip_next" */
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
 * Figma Component: "skip_next"
 * Preserved Layer Name: skip_next
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const SkipNext: React.FC<SkipNextProps> = ({
  title = 'skip_next',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`SkipNext-container ${className}`} data-figma-layer="skip_next" data-variant={variant}>
      <div className="SkipNext-header">
        <span className="SkipNext-title">{title}</span>
        <span className="SkipNext-badge">{variant}</span>
      </div>
      <div className="SkipNext-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default SkipNext;
