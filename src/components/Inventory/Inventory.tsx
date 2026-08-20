import React from 'react';
import './Inventory.css';

export interface InventoryProps {
  /** Exact Figma Layer Name: "inventory" */
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
 * Figma Component: "inventory"
 * Preserved Layer Name: inventory
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Inventory: React.FC<InventoryProps> = ({
  title = 'inventory',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Inventory-container ${className}`} data-figma-layer="inventory" data-variant={variant}>
      <div className="Inventory-header">
        <span className="Inventory-title">{title}</span>
        <span className="Inventory-badge">{variant}</span>
      </div>
      <div className="Inventory-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Inventory;
