import React from 'react';
import './Property1teams.css';

export interface Property1teamsProps {
  /** Exact Figma Layer Name: "Property 1=teams" */
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
 * Figma Component: "Property 1=teams"
 * Preserved Layer Name: Property 1=teams
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Property1teams: React.FC<Property1teamsProps> = ({
  title = 'Property 1=teams',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Property1teams-container ${className}`} data-figma-layer="Property 1=teams" data-variant={variant}>
      <div className="Property1teams-header">
        <span className="Property1teams-title">{title}</span>
        <span className="Property1teams-badge">{variant}</span>
      </div>
      <div className="Property1teams-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Property1teams;
