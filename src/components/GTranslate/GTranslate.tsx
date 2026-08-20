import React from 'react';
import './GTranslate.css';

export interface GTranslateProps {
  /** Exact Figma Layer Name: "g_translate" */
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
 * Figma Component: "g_translate"
 * Preserved Layer Name: g_translate
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const GTranslate: React.FC<GTranslateProps> = ({
  title = 'g_translate',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`GTranslate-container ${className}`} data-figma-layer="g_translate" data-variant={variant}>
      <div className="GTranslate-header">
        <span className="GTranslate-title">{title}</span>
        <span className="GTranslate-badge">{variant}</span>
      </div>
      <div className="GTranslate-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default GTranslate;
