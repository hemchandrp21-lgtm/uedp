import React from 'react';
import './Undo.css';

export interface UndoProps {
  /** Exact Figma Layer Name: "undo" */
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
 * Figma Component: "undo"
 * Preserved Layer Name: undo
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Undo: React.FC<UndoProps> = ({
  title = 'undo',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Undo-container ${className}`} data-figma-layer="undo" data-variant={variant}>
      <div className="Undo-header">
        <span className="Undo-title">{title}</span>
        <span className="Undo-badge">{variant}</span>
      </div>
      <div className="Undo-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Undo;
