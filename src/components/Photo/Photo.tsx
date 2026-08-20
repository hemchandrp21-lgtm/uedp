import React from 'react';
import './Photo.css';

export interface PhotoProps {
  /** Exact Figma Layer Name: "photo" */
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
 * Figma Component: "photo"
 * Preserved Layer Name: photo
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Photo: React.FC<PhotoProps> = ({
  title = 'photo',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Photo-container ${className}`} data-figma-layer="photo" data-variant={variant}>
      <div className="Photo-header">
        <span className="Photo-title">{title}</span>
        <span className="Photo-badge">{variant}</span>
      </div>
      <div className="Photo-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Photo;
