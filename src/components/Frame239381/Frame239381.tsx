import React from 'react';
import './Frame239381.css';

export interface Frame239381Props {
  /** Exact Figma Layer Name: "Frame 239381" */
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
 * Figma Component: "Frame 239381"
 * Preserved Layer Name: Frame 239381
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239381: React.FC<Frame239381Props> = ({
  title = 'Frame 239381',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239381-container ${className}`} data-figma-layer="Frame 239381" data-variant={variant}>
      <div className="Frame239381-header">
        <span className="Frame239381-title">{title}</span>
        <span className="Frame239381-badge">{variant}</span>
      </div>
      <div className="Frame239381-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239381;
