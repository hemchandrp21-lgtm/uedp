import React from 'react';
import './FolderFilled.css';

export interface FolderFilledProps {
  /** Exact Figma Layer Name: "folder_filled" */
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
 * Figma Component: "folder_filled"
 * Preserved Layer Name: folder_filled
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const FolderFilled: React.FC<FolderFilledProps> = ({
  title = 'folder_filled',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`FolderFilled-container ${className}`} data-figma-layer="folder_filled" data-variant={variant}>
      <div className="FolderFilled-header">
        <span className="FolderFilled-title">{title}</span>
        <span className="FolderFilled-badge">{variant}</span>
      </div>
      <div className="FolderFilled-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default FolderFilled;
