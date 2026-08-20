import React from 'react';
import './StarFilled.css';

export interface StarFilledProps {
  /** Exact Figma Layer Name: "star_filled" */
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
 * Figma Component: "star_filled"
 * Preserved Layer Name: star_filled
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const StarFilled: React.FC<StarFilledProps> = ({
  title = 'star_filled',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`StarFilled-container ${className}`} data-figma-layer="star_filled" data-variant={variant}>
      <div className="StarFilled-header">
        <span className="StarFilled-title">{title}</span>
        <span className="StarFilled-badge">{variant}</span>
      </div>
      <div className="StarFilled-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default StarFilled;
