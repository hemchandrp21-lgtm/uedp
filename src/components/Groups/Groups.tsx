import React from 'react';
import './Groups.css';

export interface GroupsProps {
  /** Exact Figma Layer Name: "groups" */
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
 * Figma Component: "groups"
 * Preserved Layer Name: groups
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Groups: React.FC<GroupsProps> = ({
  title = 'groups',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Groups-container ${className}`} data-figma-layer="groups" data-variant={variant}>
      <div className="Groups-header">
        <span className="Groups-title">{title}</span>
        <span className="Groups-badge">{variant}</span>
      </div>
      <div className="Groups-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Groups;
