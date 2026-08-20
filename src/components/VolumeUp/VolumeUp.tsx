import React from 'react';
import './VolumeUp.css';

export interface VolumeUpProps {
  /** Exact Figma Layer Name: "volume_up" */
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
 * Figma Component: "volume_up"
 * Preserved Layer Name: volume_up
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const VolumeUp: React.FC<VolumeUpProps> = ({
  title = 'volume_up',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`VolumeUp-container ${className}`} data-figma-layer="volume_up" data-variant={variant}>
      <div className="VolumeUp-header">
        <span className="VolumeUp-title">{title}</span>
        <span className="VolumeUp-badge">{variant}</span>
      </div>
      <div className="VolumeUp-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default VolumeUp;
