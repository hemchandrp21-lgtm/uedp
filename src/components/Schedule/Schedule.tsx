import React from 'react';
import './Schedule.css';

export interface ScheduleProps {
  /** Exact Figma Layer Name: "schedule" */
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
 * Figma Component: "schedule"
 * Preserved Layer Name: schedule
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Schedule: React.FC<ScheduleProps> = ({
  title = 'schedule',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Schedule-container ${className}`} data-figma-layer="schedule" data-variant={variant}>
      <div className="Schedule-header">
        <span className="Schedule-title">{title}</span>
        <span className="Schedule-badge">{variant}</span>
      </div>
      <div className="Schedule-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Schedule;
