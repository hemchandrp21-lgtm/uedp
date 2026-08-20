import React from 'react';
import './Mail.css';

export interface MailProps {
  /** Exact Figma Layer Name: "mail" */
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
 * Figma Component: "mail"
 * Preserved Layer Name: mail
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Mail: React.FC<MailProps> = ({
  title = 'mail',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Mail-container ${className}`} data-figma-layer="mail" data-variant={variant}>
      <div className="Mail-header">
        <span className="Mail-title">{title}</span>
        <span className="Mail-badge">{variant}</span>
      </div>
      <div className="Mail-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Mail;
