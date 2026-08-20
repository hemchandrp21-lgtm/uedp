import React from 'react';
import './Frame239318.css';

export interface Frame239318Props {
  /** Exact Figma Layer Name: "Frame 239318" */
  title?: string;
  /** Primary description or content text */
  description?: string;
  /** Component state or variant */
  variant?: 'neg' | 'pos' | 'mid';
  /** Optional custom CSS class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Figma Component: "Frame 239318"
 * Preserved Layer Name: Frame 239318
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239318: React.FC<Frame239318Props> = ({
  title = 'Frame 239318',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'neg',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239318-container ${className}`} data-figma-layer="Frame 239318" data-variant={variant}>
      <div className="Frame239318-header">
        <span className="Frame239318-title">{title}</span>
        <span className="Frame239318-badge">{variant}</span>
      </div>
      <div className="Frame239318-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239318;
