import React from 'react';
import './BAR.css';

export interface BARProps {
  /** Exact Figma Layer Name: "BAR" */
  title?: string;
  /** Primary description or content text */
  description?: string;
  /** Component state or variant */
  variant?: 'profit' | 'loss' | 'medium' | 'progress';
  /** Optional custom CSS class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Figma Component: "BAR"
 * Preserved Layer Name: BAR
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const BAR: React.FC<BARProps> = ({
  title = 'BAR',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'profit',
  className = '',
  children
}) => {
  return (
    <div className={`BAR-container ${className}`} data-figma-layer="BAR" data-variant={variant}>
      <div className="BAR-header">
        <span className="BAR-title">{title}</span>
        <span className="BAR-badge">{variant}</span>
      </div>
      <div className="BAR-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default BAR;
