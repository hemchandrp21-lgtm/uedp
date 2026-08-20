import React from 'react';
import './Frame120.css';

export interface Frame120Props {
  /** Exact Figma Layer Name: "Frame 120" */
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
 * Figma Component: "Frame 120"
 * Preserved Layer Name: Frame 120
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame120: React.FC<Frame120Props> = ({
  title = 'Frame 120',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame120-container ${className}`} data-figma-layer="Frame 120" data-variant={variant}>
      <div className="Frame120-header">
        <span className="Frame120-title">{title}</span>
        <span className="Frame120-badge">{variant}</span>
      </div>
      <div className="Frame120-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame120;
