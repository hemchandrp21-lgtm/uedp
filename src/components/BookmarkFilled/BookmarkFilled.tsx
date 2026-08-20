import React from 'react';
import './BookmarkFilled.css';

export interface BookmarkFilledProps {
  /** Exact Figma Layer Name: "bookmark_filled" */
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
 * Figma Component: "bookmark_filled"
 * Preserved Layer Name: bookmark_filled
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const BookmarkFilled: React.FC<BookmarkFilledProps> = ({
  title = 'bookmark_filled',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`BookmarkFilled-container ${className}`} data-figma-layer="bookmark_filled" data-variant={variant}>
      <div className="BookmarkFilled-header">
        <span className="BookmarkFilled-title">{title}</span>
        <span className="BookmarkFilled-badge">{variant}</span>
      </div>
      <div className="BookmarkFilled-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default BookmarkFilled;
