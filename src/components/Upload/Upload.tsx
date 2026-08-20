import React from 'react';
import './Upload.css';

export interface UploadProps {
  /** Exact Figma Layer Name: "upload" */
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
 * Figma Component: "upload"
 * Preserved Layer Name: upload
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Upload: React.FC<UploadProps> = ({
  title = 'upload',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Upload-container ${className}`} data-figma-layer="upload" data-variant={variant}>
      <div className="Upload-header">
        <span className="Upload-title">{title}</span>
        <span className="Upload-badge">{variant}</span>
      </div>
      <div className="Upload-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Upload;
