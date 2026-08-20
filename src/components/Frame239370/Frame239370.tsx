import React from 'react';
import './Frame239370.css';

export interface Frame239370Props {
  /** Exact Figma Layer Name: "Frame 239370" */
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
 * Figma Component: "Frame 239370"
 * Preserved Layer Name: Frame 239370
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239370: React.FC<Frame239370Props> = ({
  title = 'Frame 239370',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239370-container ${className}`} data-figma-layer="Frame 239370" data-variant={variant}>
      <div className="Frame239370-header">
        <span className="Frame239370-title">{title}</span>
        <span className="Frame239370-badge">{variant}</span>
      </div>
      <div className="Frame239370-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239370;
