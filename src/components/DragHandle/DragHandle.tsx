import React from 'react';
import './DragHandle.css';

export interface DragHandleProps {
  /** Exact Figma Layer Name: "drag_handle" */
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
 * Figma Component: "drag_handle"
 * Preserved Layer Name: drag_handle
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const DragHandle: React.FC<DragHandleProps> = ({
  title = 'drag_handle',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`DragHandle-container ${className}`} data-figma-layer="drag_handle" data-variant={variant}>
      <div className="DragHandle-header">
        <span className="DragHandle-title">{title}</span>
        <span className="DragHandle-badge">{variant}</span>
      </div>
      <div className="DragHandle-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default DragHandle;
