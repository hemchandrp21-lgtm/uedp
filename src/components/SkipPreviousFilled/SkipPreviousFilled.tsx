import React from 'react';
import './SkipPreviousFilled.css';

export interface SkipPreviousFilledProps {
  /** Exact Figma Layer Name: "skip_previous_filled" */
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
 * Figma Component: "skip_previous_filled"
 * Preserved Layer Name: skip_previous_filled
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const SkipPreviousFilled: React.FC<SkipPreviousFilledProps> = ({
  title = 'skip_previous_filled',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`SkipPreviousFilled-container ${className}`} data-figma-layer="skip_previous_filled" data-variant={variant}>
      <div className="SkipPreviousFilled-header">
        <span className="SkipPreviousFilled-title">{title}</span>
        <span className="SkipPreviousFilled-badge">{variant}</span>
      </div>
      <div className="SkipPreviousFilled-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default SkipPreviousFilled;
