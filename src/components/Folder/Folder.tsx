import React from 'react';
import './Folder.css';

export interface FolderProps {
  /** Exact Figma Layer Name: "folder" */
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
 * Figma Component: "folder"
 * Preserved Layer Name: folder
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Folder: React.FC<FolderProps> = ({
  title = 'folder',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Folder-container ${className}`} data-figma-layer="folder" data-variant={variant}>
      <div className="Folder-header">
        <span className="Folder-title">{title}</span>
        <span className="Folder-badge">{variant}</span>
      </div>
      <div className="Folder-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Folder;
