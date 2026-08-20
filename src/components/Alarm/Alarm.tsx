import React from 'react';
import './Alarm.css';

export interface AlarmProps {
  /** Exact Figma Layer Name: "alarm" */
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
 * Figma Component: "alarm"
 * Preserved Layer Name: alarm
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Alarm: React.FC<AlarmProps> = ({
  title = 'alarm',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Alarm-container ${className}`} data-figma-layer="alarm" data-variant={variant}>
      <div className="Alarm-header">
        <span className="Alarm-title">{title}</span>
        <span className="Alarm-badge">{variant}</span>
      </div>
      <div className="Alarm-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Alarm;
