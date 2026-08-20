import React from 'react';
import './HeaderTopNavigationBar.css';

export interface HeaderTopNavigationBarProps {
  /** Exact Figma Layer Name: "Header - Top Navigation Bar" */
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
 * Figma Component: "Header - Top Navigation Bar"
 * Preserved Layer Name: Header - Top Navigation Bar
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const HeaderTopNavigationBar: React.FC<HeaderTopNavigationBarProps> = ({
  title = 'Header - Top Navigation Bar',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`HeaderTopNavigationBar-container ${className}`} data-figma-layer="Header - Top Navigation Bar" data-variant={variant}>
      <div className="HeaderTopNavigationBar-header">
        <span className="HeaderTopNavigationBar-title">{title}</span>
        <span className="HeaderTopNavigationBar-badge">{variant}</span>
      </div>
      <div className="HeaderTopNavigationBar-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default HeaderTopNavigationBar;
