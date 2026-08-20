import React from 'react';
import './FastForwardFilled.css';

export interface FastForwardFilledProps {
  /** Exact Figma Layer Name: "fast_forward_filled" */
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
 * Figma Component: "fast_forward_filled"
 * Preserved Layer Name: fast_forward_filled
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const FastForwardFilled: React.FC<FastForwardFilledProps> = ({
  title = 'fast_forward_filled',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`FastForwardFilled-container ${className}`} data-figma-layer="fast_forward_filled" data-variant={variant}>
      <div className="FastForwardFilled-header">
        <span className="FastForwardFilled-title">{title}</span>
        <span className="FastForwardFilled-badge">{variant}</span>
      </div>
      <div className="FastForwardFilled-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default FastForwardFilled;
