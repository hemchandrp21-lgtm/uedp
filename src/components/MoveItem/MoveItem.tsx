import React from 'react';
import './MoveItem.css';

export interface MoveItemProps {
  /** Exact Figma Layer Name: "move_item" */
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
 * Figma Component: "move_item"
 * Preserved Layer Name: move_item
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const MoveItem: React.FC<MoveItemProps> = ({
  title = 'move_item',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`MoveItem-container ${className}`} data-figma-layer="move_item" data-variant={variant}>
      <div className="MoveItem-header">
        <span className="MoveItem-title">{title}</span>
        <span className="MoveItem-badge">{variant}</span>
      </div>
      <div className="MoveItem-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default MoveItem;
