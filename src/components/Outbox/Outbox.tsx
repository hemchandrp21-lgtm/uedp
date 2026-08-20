import React from 'react';
import './Outbox.css';

export interface OutboxProps {
  /** Exact Figma Layer Name: "outbox" */
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
 * Figma Component: "outbox"
 * Preserved Layer Name: outbox
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Outbox: React.FC<OutboxProps> = ({
  title = 'outbox',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Outbox-container ${className}`} data-figma-layer="outbox" data-variant={variant}>
      <div className="Outbox-header">
        <span className="Outbox-title">{title}</span>
        <span className="Outbox-badge">{variant}</span>
      </div>
      <div className="Outbox-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Outbox;
