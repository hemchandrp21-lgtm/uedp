import React from 'react';
import './ContentCut.css';

export interface ContentCutProps {
  /** Exact Figma Layer Name: "content_cut" */
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
 * Figma Component: "content_cut"
 * Preserved Layer Name: content_cut
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const ContentCut: React.FC<ContentCutProps> = ({
  title = 'content_cut',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`ContentCut-container ${className}`} data-figma-layer="content_cut" data-variant={variant}>
      <div className="ContentCut-header">
        <span className="ContentCut-title">{title}</span>
        <span className="ContentCut-badge">{variant}</span>
      </div>
      <div className="ContentCut-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default ContentCut;
