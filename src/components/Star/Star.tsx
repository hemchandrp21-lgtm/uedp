import React from 'react';
import './Star.css';

export interface StarProps {
  /** Exact Figma Layer Name: "star" */
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
 * Figma Component: "star"
 * Preserved Layer Name: star
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Star: React.FC<StarProps> = ({
  title = 'star',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Star-container ${className}`} data-figma-layer="star" data-variant={variant}>
      <div className="Star-header">
        <span className="Star-title">{title}</span>
        <span className="Star-badge">{variant}</span>
      </div>
      <div className="Star-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Star;
