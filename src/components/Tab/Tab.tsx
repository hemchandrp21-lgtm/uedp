import React from 'react';
import './Tab.css';

export interface TabProps {
  /** Exact Figma Layer Name: "tab" */
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
 * Figma Component: "tab"
 * Preserved Layer Name: tab
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Tab: React.FC<TabProps> = ({
  title = 'tab',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Tab-container ${className}`} data-figma-layer="tab" data-variant={variant}>
      <div className="Tab-header">
        <span className="Tab-title">{title}</span>
        <span className="Tab-badge">{variant}</span>
      </div>
      <div className="Tab-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Tab;
