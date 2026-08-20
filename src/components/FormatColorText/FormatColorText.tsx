import React from 'react';
import './FormatColorText.css';

export interface FormatColorTextProps {
  /** Exact Figma Layer Name: "format_color_text" */
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
 * Figma Component: "format_color_text"
 * Preserved Layer Name: format_color_text
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const FormatColorText: React.FC<FormatColorTextProps> = ({
  title = 'format_color_text',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`FormatColorText-container ${className}`} data-figma-layer="format_color_text" data-variant={variant}>
      <div className="FormatColorText-header">
        <span className="FormatColorText-title">{title}</span>
        <span className="FormatColorText-badge">{variant}</span>
      </div>
      <div className="FormatColorText-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default FormatColorText;
