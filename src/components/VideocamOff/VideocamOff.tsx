import React from 'react';
import './VideocamOff.css';

export interface VideocamOffProps {
  /** Exact Figma Layer Name: "videocam_off" */
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
 * Figma Component: "videocam_off"
 * Preserved Layer Name: videocam_off
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const VideocamOff: React.FC<VideocamOffProps> = ({
  title = 'videocam_off',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`VideocamOff-container ${className}`} data-figma-layer="videocam_off" data-variant={variant}>
      <div className="VideocamOff-header">
        <span className="VideocamOff-title">{title}</span>
        <span className="VideocamOff-badge">{variant}</span>
      </div>
      <div className="VideocamOff-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default VideocamOff;
