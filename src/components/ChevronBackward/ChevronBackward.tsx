import React from 'react';
import './ChevronBackward.css';

export interface ChevronBackwardProps {
  /** Exact Figma Layer Name: "chevron_backward" */
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
 * Figma Component: "chevron_backward"
 * Preserved Layer Name: chevron_backward
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const ChevronBackward: React.FC<ChevronBackwardProps> = ({
  title = 'chevron_backward',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`ChevronBackward-container ${className}`} data-figma-layer="chevron_backward" data-variant={variant}>
      <div className="ChevronBackward-header">
        <span className="ChevronBackward-title">{title}</span>
        <span className="ChevronBackward-badge">{variant}</span>
      </div>
      <div className="ChevronBackward-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default ChevronBackward;
