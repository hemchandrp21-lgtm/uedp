import React from 'react';
import './StarsFilled.css';

export interface StarsFilledProps {
  /** Exact Figma Layer Name: "stars_filled" */
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
 * Figma Component: "stars_filled"
 * Preserved Layer Name: stars_filled
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const StarsFilled: React.FC<StarsFilledProps> = ({
  title = 'stars_filled',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`StarsFilled-container ${className}`} data-figma-layer="stars_filled" data-variant={variant}>
      <div className="StarsFilled-header">
        <span className="StarsFilled-title">{title}</span>
        <span className="StarsFilled-badge">{variant}</span>
      </div>
      <div className="StarsFilled-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default StarsFilled;
