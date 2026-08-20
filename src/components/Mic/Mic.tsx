import React from 'react';
import './Mic.css';

export interface MicProps {
  /** Exact Figma Layer Name: "mic" */
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
 * Figma Component: "mic"
 * Preserved Layer Name: mic
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Mic: React.FC<MicProps> = ({
  title = 'mic',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Mic-container ${className}`} data-figma-layer="mic" data-variant={variant}>
      <div className="Mic-header">
        <span className="Mic-title">{title}</span>
        <span className="Mic-badge">{variant}</span>
      </div>
      <div className="Mic-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Mic;
