import React from 'react';
import './Frame239398.css';

export interface Frame239398Props {
  /** Exact Figma Layer Name: "Frame 239398" */
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
 * Figma Component: "Frame 239398"
 * Preserved Layer Name: Frame 239398
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239398: React.FC<Frame239398Props> = ({
  title = 'Frame 239398',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239398-container ${className}`} data-figma-layer="Frame 239398" data-variant={variant}>
      <div className="Frame239398-header">
        <span className="Frame239398-title">{title}</span>
        <span className="Frame239398-badge">{variant}</span>
      </div>
      <div className="Frame239398-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239398;
