import React from 'react';
import './DoNotDisturbOn.css';

export interface DoNotDisturbOnProps {
  /** Exact Figma Layer Name: "do_not_disturb_on" */
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
 * Figma Component: "do_not_disturb_on"
 * Preserved Layer Name: do_not_disturb_on
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const DoNotDisturbOn: React.FC<DoNotDisturbOnProps> = ({
  title = 'do_not_disturb_on',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`DoNotDisturbOn-container ${className}`} data-figma-layer="do_not_disturb_on" data-variant={variant}>
      <div className="DoNotDisturbOn-header">
        <span className="DoNotDisturbOn-title">{title}</span>
        <span className="DoNotDisturbOn-badge">{variant}</span>
      </div>
      <div className="DoNotDisturbOn-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default DoNotDisturbOn;
