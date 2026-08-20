import React from 'react';
import './Inbox.css';

export interface InboxProps {
  /** Exact Figma Layer Name: "inbox" */
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
 * Figma Component: "inbox"
 * Preserved Layer Name: inbox
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Inbox: React.FC<InboxProps> = ({
  title = 'inbox',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Inbox-container ${className}`} data-figma-layer="inbox" data-variant={variant}>
      <div className="Inbox-header">
        <span className="Inbox-title">{title}</span>
        <span className="Inbox-badge">{variant}</span>
      </div>
      <div className="Inbox-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Inbox;
