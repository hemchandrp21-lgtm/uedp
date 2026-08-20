import React from 'react';
import './Cancel.css';

export interface CancelProps {
  /** Exact Figma Layer Name: "cancel" */
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
 * Figma Component: "cancel"
 * Preserved Layer Name: cancel
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Cancel: React.FC<CancelProps> = ({
  title = 'cancel',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Cancel-container ${className}`} data-figma-layer="cancel" data-variant={variant}>
      <div className="Cancel-header">
        <span className="Cancel-title">{title}</span>
        <span className="Cancel-badge">{variant}</span>
      </div>
      <div className="Cancel-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Cancel;
