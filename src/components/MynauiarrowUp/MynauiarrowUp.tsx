import React from 'react';
import './MynauiarrowUp.css';

export interface MynauiarrowUpProps {
  /** Exact Figma Layer Name: "mynaui:arrow-up" */
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
 * Figma Component: "mynaui:arrow-up"
 * Preserved Layer Name: mynaui:arrow-up
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const MynauiarrowUp: React.FC<MynauiarrowUpProps> = ({
  title = 'mynaui:arrow-up',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`MynauiarrowUp-container ${className}`} data-figma-layer="mynaui:arrow-up" data-variant={variant}>
      <div className="MynauiarrowUp-header">
        <span className="MynauiarrowUp-title">{title}</span>
        <span className="MynauiarrowUp-badge">{variant}</span>
      </div>
      <div className="MynauiarrowUp-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default MynauiarrowUp;
