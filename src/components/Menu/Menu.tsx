import React from 'react';
import './Menu.css';

export interface MenuProps {
  /** Exact Figma Layer Name: "menu" */
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
 * Figma Component: "menu"
 * Preserved Layer Name: menu
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Menu: React.FC<MenuProps> = ({
  title = 'menu',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Menu-container ${className}`} data-figma-layer="menu" data-variant={variant}>
      <div className="Menu-header">
        <span className="Menu-title">{title}</span>
        <span className="Menu-badge">{variant}</span>
      </div>
      <div className="Menu-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Menu;
