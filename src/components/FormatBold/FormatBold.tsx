import React from 'react';
import './FormatBold.css';

export interface FormatBoldProps {
  /** Exact Figma Layer Name: "format_bold" */
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
 * Figma Component: "format_bold"
 * Preserved Layer Name: format_bold
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const FormatBold: React.FC<FormatBoldProps> = ({
  title = 'format_bold',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`FormatBold-container ${className}`} data-figma-layer="format_bold" data-variant={variant}>
      <div className="FormatBold-header">
        <span className="FormatBold-title">{title}</span>
        <span className="FormatBold-badge">{variant}</span>
      </div>
      <div className="FormatBold-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default FormatBold;
