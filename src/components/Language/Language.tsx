import React from 'react';
import './Language.css';

export interface LanguageProps {
  /** Exact Figma Layer Name: "language" */
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
 * Figma Component: "language"
 * Preserved Layer Name: language
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Language: React.FC<LanguageProps> = ({
  title = 'language',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Language-container ${className}`} data-figma-layer="language" data-variant={variant}>
      <div className="Language-header">
        <span className="Language-title">{title}</span>
        <span className="Language-badge">{variant}</span>
      </div>
      <div className="Language-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Language;
