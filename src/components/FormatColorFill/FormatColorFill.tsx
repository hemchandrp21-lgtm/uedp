import React from 'react';
import './FormatColorFill.css';

export interface FormatColorFillProps {
  /** Exact Figma Layer Name: "format_color_fill" */
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
 * Figma Component: "format_color_fill"
 * Preserved Layer Name: format_color_fill
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const FormatColorFill: React.FC<FormatColorFillProps> = ({
  title = 'format_color_fill',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`FormatColorFill-container ${className}`} data-figma-layer="format_color_fill" data-variant={variant}>
      <div className="FormatColorFill-header">
        <span className="FormatColorFill-title">{title}</span>
        <span className="FormatColorFill-badge">{variant}</span>
      </div>
      <div className="FormatColorFill-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default FormatColorFill;
