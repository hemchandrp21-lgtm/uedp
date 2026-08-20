import React from 'react';
import './Send.css';

export interface SendProps {
  /** Exact Figma Layer Name: "send" */
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
 * Figma Component: "send"
 * Preserved Layer Name: send
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Send: React.FC<SendProps> = ({
  title = 'send',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Send-container ${className}`} data-figma-layer="send" data-variant={variant}>
      <div className="Send-header">
        <span className="Send-title">{title}</span>
        <span className="Send-badge">{variant}</span>
      </div>
      <div className="Send-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Send;
