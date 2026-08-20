import React from 'react';
import './Today.css';

export interface TodayProps {
  /** Exact Figma Layer Name: "today" */
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
 * Figma Component: "today"
 * Preserved Layer Name: today
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Today: React.FC<TodayProps> = ({
  title = 'today',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Today-container ${className}`} data-figma-layer="today" data-variant={variant}>
      <div className="Today-header">
        <span className="Today-title">{title}</span>
        <span className="Today-badge">{variant}</span>
      </div>
      <div className="Today-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Today;
