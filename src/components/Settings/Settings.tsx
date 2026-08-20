import React from 'react';
import './Settings.css';

export interface SettingsProps {
  /** Exact Figma Layer Name: "settings" */
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
 * Figma Component: "settings"
 * Preserved Layer Name: settings
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Settings: React.FC<SettingsProps> = ({
  title = 'settings',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Settings-container ${className}`} data-figma-layer="settings" data-variant={variant}>
      <div className="Settings-header">
        <span className="Settings-title">{title}</span>
        <span className="Settings-badge">{variant}</span>
      </div>
      <div className="Settings-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Settings;
