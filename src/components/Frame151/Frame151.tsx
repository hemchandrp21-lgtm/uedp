import React from 'react';
import './Frame151.css';

export interface Frame151Props {
  /** Exact Figma Layer Name: "Frame 151" */
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
 * Figma Component: "Frame 151"
 * Preserved Layer Name: Frame 151
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame151: React.FC<Frame151Props> = ({
  title = 'Frame 151',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame151-container ${className}`} data-figma-layer="Frame 151" data-variant={variant}>
      <div className="Frame151-header">
        <span className="Frame151-title">{title}</span>
        <span className="Frame151-badge">{variant}</span>
      </div>
      <div className="Frame151-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame151;
