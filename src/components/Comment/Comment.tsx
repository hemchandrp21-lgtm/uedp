import React from 'react';
import './Comment.css';

export interface CommentProps {
  /** Exact Figma Layer Name: "comment" */
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
 * Figma Component: "comment"
 * Preserved Layer Name: comment
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Comment: React.FC<CommentProps> = ({
  title = 'comment',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Comment-container ${className}`} data-figma-layer="comment" data-variant={variant}>
      <div className="Comment-header">
        <span className="Comment-title">{title}</span>
        <span className="Comment-badge">{variant}</span>
      </div>
      <div className="Comment-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Comment;
