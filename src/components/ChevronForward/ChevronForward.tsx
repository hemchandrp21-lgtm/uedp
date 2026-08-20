import React from 'react';
import './ChevronForward.css';

export interface ChevronForwardProps {
  /** Exact Figma Layer Name: "chevron_forward" */
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
 * Figma Component: "chevron_forward"
 * Preserved Layer Name: chevron_forward
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const ChevronForward: React.FC<ChevronForwardProps> = ({
  title = 'chevron_forward',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`ChevronForward-container ${className}`} data-figma-layer="chevron_forward" data-variant={variant}>
      <div className="ChevronForward-header">
        <span className="ChevronForward-title">{title}</span>
        <span className="ChevronForward-badge">{variant}</span>
      </div>
      <div className="ChevronForward-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default ChevronForward;
