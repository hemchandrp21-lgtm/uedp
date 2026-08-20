import React from 'react';
import './Commute.css';

export interface CommuteProps {
  /** Exact Figma Layer Name: "commute" */
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
 * Figma Component: "commute"
 * Preserved Layer Name: commute
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Commute: React.FC<CommuteProps> = ({
  title = 'commute',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Commute-container ${className}`} data-figma-layer="commute" data-variant={variant}>
      <div className="Commute-header">
        <span className="Commute-title">{title}</span>
        <span className="Commute-badge">{variant}</span>
      </div>
      <div className="Commute-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Commute;
