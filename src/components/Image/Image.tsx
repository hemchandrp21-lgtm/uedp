import React from 'react';
import './Image.css';

export interface ImageProps {
  /** Exact Figma Layer Name: "image" */
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
 * Figma Component: "image"
 * Preserved Layer Name: image
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Image: React.FC<ImageProps> = ({
  title = 'image',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Image-container ${className}`} data-figma-layer="image" data-variant={variant}>
      <div className="Image-header">
        <span className="Image-title">{title}</span>
        <span className="Image-badge">{variant}</span>
      </div>
      <div className="Image-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Image;
