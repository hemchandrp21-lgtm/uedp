import React from 'react';
import './Frame60.css';

export interface Frame60Props {
  /** Exact Figma Layer Name: "Frame 60" */
  title?: string;
  /** Primary description or content text */
  description?: string;
  /** Component state or variant */
  variant?: 'negative' | 'positive' | 'Variant3' | 'Variant5' | 'Variant6' | 'dull text';
  /** Optional custom CSS class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * Figma Component: "Frame 60"
 * Preserved Layer Name: Frame 60
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Frame60: React.FC<Frame60Props> = ({
  title = 'Frame 60',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'negative',
  className = '',
  children
}) => {
  return (
    <div className={`Frame60-container ${className}`} data-figma-layer="Frame 60" data-variant={variant}>
      <div className="Frame60-header">
        <span className="Frame60-title">{title}</span>
        <span className="Frame60-badge">{variant}</span>
      </div>
      <div className="Frame60-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Frame60;
