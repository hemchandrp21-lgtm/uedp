import React from 'react';
import './Users.css';

export interface UsersProps {
  /** Exact Figma Layer Name: "users" */
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
 * Figma Component: "users"
 * Preserved Layer Name: users
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Users: React.FC<UsersProps> = ({
  title = 'users',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Users-container ${className}`} data-figma-layer="users" data-variant={variant}>
      <div className="Users-header">
        <span className="Users-title">{title}</span>
        <span className="Users-badge">{variant}</span>
      </div>
      <div className="Users-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Users;
