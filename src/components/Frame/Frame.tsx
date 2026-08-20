import React from 'react';
import './Frame.css';

export interface FrameProps {
  /** Exact Figma Layer Name: "Frame" */
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
 * Figma Component: "Frame"
 * Preserved Layer Name: Frame
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame: React.FC<FrameProps> = ({
  title = 'Frame',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Frame-container ${className}`} data-figma-layer="Frame" data-variant={variant}>
      <div className="Frame-header">
        <span className="Frame-title">{title}</span>
        <span className="Frame-badge">{variant}</span>
      </div>
      <div className="Frame-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame;
