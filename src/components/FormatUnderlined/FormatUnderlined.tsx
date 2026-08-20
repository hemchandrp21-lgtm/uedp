import React from 'react';
import './FormatUnderlined.css';

export interface FormatUnderlinedProps {
  /** Exact Figma Layer Name: "format_underlined" */
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
 * Figma Component: "format_underlined"
 * Preserved Layer Name: format_underlined
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const FormatUnderlined: React.FC<FormatUnderlinedProps> = ({
  title = 'format_underlined',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`FormatUnderlined-container ${className}`} data-figma-layer="format_underlined" data-variant={variant}>
      <div className="FormatUnderlined-header">
        <span className="FormatUnderlined-title">{title}</span>
        <span className="FormatUnderlined-badge">{variant}</span>
      </div>
      <div className="FormatUnderlined-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default FormatUnderlined;
