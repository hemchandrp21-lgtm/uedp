import React from 'react';
import './CallEnd.css';

export interface CallEndProps {
  /** Exact Figma Layer Name: "call_end" */
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
 * Figma Component: "call_end"
 * Preserved Layer Name: call_end
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const CallEnd: React.FC<CallEndProps> = ({
  title = 'call_end',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`CallEnd-container ${className}`} data-figma-layer="call_end" data-variant={variant}>
      <div className="CallEnd-header">
        <span className="CallEnd-title">{title}</span>
        <span className="CallEnd-badge">{variant}</span>
      </div>
      <div className="CallEnd-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default CallEnd;
