import React from 'react';
import './Snooze.css';

export interface SnoozeProps {
  /** Exact Figma Layer Name: "snooze" */
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
 * Figma Component: "snooze"
 * Preserved Layer Name: snooze
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Snooze: React.FC<SnoozeProps> = ({
  title = 'snooze',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Snooze-container ${className}`} data-figma-layer="snooze" data-variant={variant}>
      <div className="Snooze-header">
        <span className="Snooze-title">{title}</span>
        <span className="Snooze-badge">{variant}</span>
      </div>
      <div className="Snooze-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Snooze;
