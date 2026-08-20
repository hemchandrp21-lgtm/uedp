import React from 'react';
import './MoreHoriz.css';

export interface MoreHorizProps {
  /** Exact Figma Layer Name: "more_horiz" */
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
 * Figma Component: "more_horiz"
 * Preserved Layer Name: more_horiz
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const MoreHoriz: React.FC<MoreHorizProps> = ({
  title = 'more_horiz',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`MoreHoriz-container ${className}`} data-figma-layer="more_horiz" data-variant={variant}>
      <div className="MoreHoriz-header">
        <span className="MoreHoriz-title">{title}</span>
        <span className="MoreHoriz-badge">{variant}</span>
      </div>
      <div className="MoreHoriz-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default MoreHoriz;
