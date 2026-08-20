import React from 'react';
import './Share.css';

export interface ShareProps {
  /** Exact Figma Layer Name: "share" */
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
 * Figma Component: "share"
 * Preserved Layer Name: share
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Share: React.FC<ShareProps> = ({
  title = 'share',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Share-container ${className}`} data-figma-layer="share" data-variant={variant}>
      <div className="Share-header">
        <span className="Share-title">{title}</span>
        <span className="Share-badge">{variant}</span>
      </div>
      <div className="Share-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Share;
