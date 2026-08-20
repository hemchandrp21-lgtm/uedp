import React from 'react';
import './Videocam.css';

export interface VideocamProps {
  /** Exact Figma Layer Name: "videocam" */
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
 * Figma Component: "videocam"
 * Preserved Layer Name: videocam
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Videocam: React.FC<VideocamProps> = ({
  title = 'videocam',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Videocam-container ${className}`} data-figma-layer="videocam" data-variant={variant}>
      <div className="Videocam-header">
        <span className="Videocam-title">{title}</span>
        <span className="Videocam-badge">{variant}</span>
      </div>
      <div className="Videocam-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Videocam;
