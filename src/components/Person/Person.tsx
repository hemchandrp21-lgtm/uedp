import React from 'react';
import './Person.css';

export interface PersonProps {
  /** Exact Figma Layer Name: "person" */
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
 * Figma Component: "person"
 * Preserved Layer Name: person
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Person: React.FC<PersonProps> = ({
  title = 'person',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Person-container ${className}`} data-figma-layer="person" data-variant={variant}>
      <div className="Person-header">
        <span className="Person-title">{title}</span>
        <span className="Person-badge">{variant}</span>
      </div>
      <div className="Person-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Person;
