import React from 'react';
import './SwapVert.css';

export interface SwapVertProps {
  /** Exact Figma Layer Name: "swap_vert" */
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
 * Figma Component: "swap_vert"
 * Preserved Layer Name: swap_vert
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const SwapVert: React.FC<SwapVertProps> = ({
  title = 'swap_vert',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`SwapVert-container ${className}`} data-figma-layer="swap_vert" data-variant={variant}>
      <div className="SwapVert-header">
        <span className="SwapVert-title">{title}</span>
        <span className="SwapVert-badge">{variant}</span>
      </div>
      <div className="SwapVert-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default SwapVert;
