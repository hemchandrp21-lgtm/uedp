import React from 'react';
import './MicOff.css';

export interface MicOffProps {
  /** Exact Figma Layer Name: "mic_off" */
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
 * Figma Component: "mic_off"
 * Preserved Layer Name: mic_off
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const MicOff: React.FC<MicOffProps> = ({
  title = 'mic_off',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`MicOff-container ${className}`} data-figma-layer="mic_off" data-variant={variant}>
      <div className="MicOff-header">
        <span className="MicOff-title">{title}</span>
        <span className="MicOff-badge">{variant}</span>
      </div>
      <div className="MicOff-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default MicOff;
