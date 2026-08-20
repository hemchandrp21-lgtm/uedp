import React from 'react';
import './MenuOpen.css';

export interface MenuOpenProps {
  /** Exact Figma Layer Name: "menu_open" */
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
 * Figma Component: "menu_open"
 * Preserved Layer Name: menu_open
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const MenuOpen: React.FC<MenuOpenProps> = ({
  title = 'menu_open',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`MenuOpen-container ${className}`} data-figma-layer="menu_open" data-variant={variant}>
      <div className="MenuOpen-header">
        <span className="MenuOpen-title">{title}</span>
        <span className="MenuOpen-badge">{variant}</span>
      </div>
      <div className="MenuOpen-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default MenuOpen;
