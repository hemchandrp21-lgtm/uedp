import React from 'react';
import './MarkEmailUnread.css';

export interface MarkEmailUnreadProps {
  /** Exact Figma Layer Name: "mark_email_unread" */
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
 * Figma Component: "mark_email_unread"
 * Preserved Layer Name: mark_email_unread
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const MarkEmailUnread: React.FC<MarkEmailUnreadProps> = ({
  title = 'mark_email_unread',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`MarkEmailUnread-container ${className}`} data-figma-layer="mark_email_unread" data-variant={variant}>
      <div className="MarkEmailUnread-header">
        <span className="MarkEmailUnread-title">{title}</span>
        <span className="MarkEmailUnread-badge">{variant}</span>
      </div>
      <div className="MarkEmailUnread-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default MarkEmailUnread;
