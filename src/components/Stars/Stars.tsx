import React from 'react';
import './Stars.css';

export interface StarsProps {
  /** Exact Figma Layer Name: "stars" */
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
 * Figma Component: "stars"
 * Preserved Layer Name: stars
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Stars: React.FC<StarsProps> = ({
  title = 'stars',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Stars-container ${className}`} data-figma-layer="stars" data-variant={variant}>
      <div className="Stars-header">
        <span className="Stars-title">{title}</span>
        <span className="Stars-badge">{variant}</span>
      </div>
      <div className="Stars-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Stars;
