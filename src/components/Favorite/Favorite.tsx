import React from 'react';
import './Favorite.css';

export interface FavoriteProps {
  /** Exact Figma Layer Name: "favorite" */
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
 * Figma Component: "favorite"
 * Preserved Layer Name: favorite
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Favorite: React.FC<FavoriteProps> = ({
  title = 'favorite',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Favorite-container ${className}`} data-figma-layer="favorite" data-variant={variant}>
      <div className="Favorite-header">
        <span className="Favorite-title">{title}</span>
        <span className="Favorite-badge">{variant}</span>
      </div>
      <div className="Favorite-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Favorite;
