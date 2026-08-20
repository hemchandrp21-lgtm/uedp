import React from 'react';
import './SkipNextFilled.css';

export interface SkipNextFilledProps {
  /** Exact Figma Layer Name: "skip_next_filled" */
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
 * Figma Component: "skip_next_filled"
 * Preserved Layer Name: skip_next_filled
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const SkipNextFilled: React.FC<SkipNextFilledProps> = ({
  title = 'skip_next_filled',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`SkipNextFilled-container ${className}`} data-figma-layer="skip_next_filled" data-variant={variant}>
      <div className="SkipNextFilled-header">
        <span className="SkipNextFilled-title">{title}</span>
        <span className="SkipNextFilled-badge">{variant}</span>
      </div>
      <div className="SkipNextFilled-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default SkipNextFilled;
