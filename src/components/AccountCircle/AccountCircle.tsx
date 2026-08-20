import React from 'react';
import './AccountCircle.css';

export interface AccountCircleProps {
  /** Exact Figma Layer Name: "account_circle" */
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
 * Figma Component: "account_circle"
 * Preserved Layer Name: account_circle
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const AccountCircle: React.FC<AccountCircleProps> = ({
  title = 'account_circle',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`AccountCircle-container ${className}`} data-figma-layer="account_circle" data-variant={variant}>
      <div className="AccountCircle-header">
        <span className="AccountCircle-title">{title}</span>
        <span className="AccountCircle-badge">{variant}</span>
      </div>
      <div className="AccountCircle-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default AccountCircle;
