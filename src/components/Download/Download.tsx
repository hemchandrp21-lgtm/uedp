import React from 'react';
import './Download.css';

export interface DownloadProps {
  /** Exact Figma Layer Name: "download" */
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
 * Figma Component: "download"
 * Preserved Layer Name: download
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Download: React.FC<DownloadProps> = ({
  title = 'download',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Download-container ${className}`} data-figma-layer="download" data-variant={variant}>
      <div className="Download-header">
        <span className="Download-title">{title}</span>
        <span className="Download-badge">{variant}</span>
      </div>
      <div className="Download-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Download;
