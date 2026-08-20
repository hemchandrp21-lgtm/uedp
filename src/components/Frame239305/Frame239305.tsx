import React from 'react';
import './Frame239305.css';

export interface Frame239305Props {
  /** Exact Figma Layer Name: "Frame 239305" */
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
 * Figma Component: "Frame 239305"
 * Preserved Layer Name: Frame 239305
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame239305: React.FC<Frame239305Props> = ({
  title = 'Frame 239305',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame239305-container ${className}`} data-figma-layer="Frame 239305" data-variant={variant}>
      <div className="Frame239305-header">
        <span className="Frame239305-title">{title}</span>
        <span className="Frame239305-badge">{variant}</span>
      </div>
      <div className="Frame239305-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame239305;
