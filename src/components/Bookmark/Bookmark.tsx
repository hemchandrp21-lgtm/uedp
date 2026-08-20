import React from 'react';
import './Bookmark.css';

export interface BookmarkProps {
  /** Exact Figma Layer Name: "bookmark" */
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
 * Figma Component: "bookmark"
 * Preserved Layer Name: bookmark
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Bookmark: React.FC<BookmarkProps> = ({
  title = 'bookmark',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Bookmark-container ${className}`} data-figma-layer="bookmark" data-variant={variant}>
      <div className="Bookmark-header">
        <span className="Bookmark-title">{title}</span>
        <span className="Bookmark-badge">{variant}</span>
      </div>
      <div className="Bookmark-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Bookmark;
