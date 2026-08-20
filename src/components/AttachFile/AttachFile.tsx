import React from 'react';
import './AttachFile.css';

export interface AttachFileProps {
  /** Exact Figma Layer Name: "attach_file" */
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
 * Figma Component: "attach_file"
 * Preserved Layer Name: attach_file
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const AttachFile: React.FC<AttachFileProps> = ({
  title = 'attach_file',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`AttachFile-container ${className}`} data-figma-layer="attach_file" data-variant={variant}>
      <div className="AttachFile-header">
        <span className="AttachFile-title">{title}</span>
        <span className="AttachFile-badge">{variant}</span>
      </div>
      <div className="AttachFile-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default AttachFile;
