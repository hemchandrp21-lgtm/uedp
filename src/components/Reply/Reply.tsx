import React from 'react';
import './Reply.css';

export interface ReplyProps {
  /** Exact Figma Layer Name: "reply" */
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
 * Figma Component: "reply"
 * Preserved Layer Name: reply
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Reply: React.FC<ReplyProps> = ({
  title = 'reply',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Reply-container ${className}`} data-figma-layer="reply" data-variant={variant}>
      <div className="Reply-header">
        <span className="Reply-title">{title}</span>
        <span className="Reply-badge">{variant}</span>
      </div>
      <div className="Reply-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Reply;
