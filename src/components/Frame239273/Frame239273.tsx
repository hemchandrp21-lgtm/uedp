import React from 'react';
import './Frame239273.css';

export interface Frame239273Props {
  /** Exact Figma Layer Name: "Frame 239273" */
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
 * Figma Component: "Frame 239273"
 * Preserved Layer Name: Frame 239273
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239273: React.FC<Frame239273Props> = ({
  title = 'Frame 239273',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239273-container ${className}`} data-figma-layer="Frame 239273" data-variant={variant}>
      <div className="Frame239273-header">
        <span className="Frame239273-title">{title}</span>
        <span className="Frame239273-badge">{variant}</span>
      </div>
      <div className="Frame239273-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239273;
