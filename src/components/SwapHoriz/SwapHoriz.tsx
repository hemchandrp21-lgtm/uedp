import React from 'react';
import './SwapHoriz.css';

export interface SwapHorizProps {
  /** Exact Figma Layer Name: "swap_horiz" */
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
 * Figma Component: "swap_horiz"
 * Preserved Layer Name: swap_horiz
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const SwapHoriz: React.FC<SwapHorizProps> = ({
  title = 'swap_horiz',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`SwapHoriz-container ${className}`} data-figma-layer="swap_horiz" data-variant={variant}>
      <div className="SwapHoriz-header">
        <span className="SwapHoriz-title">{title}</span>
        <span className="SwapHoriz-badge">{variant}</span>
      </div>
      <div className="SwapHoriz-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default SwapHoriz;
