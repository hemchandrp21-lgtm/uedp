import React from 'react';
import './Pause.css';

export interface PauseProps {
  /** Exact Figma Layer Name: "pause" */
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
 * Figma Component: "pause"
 * Preserved Layer Name: pause
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Pause: React.FC<PauseProps> = ({
  title = 'pause',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Pause-container ${className}`} data-figma-layer="pause" data-variant={variant}>
      <div className="Pause-header">
        <span className="Pause-title">{title}</span>
        <span className="Pause-badge">{variant}</span>
      </div>
      <div className="Pause-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Pause;
