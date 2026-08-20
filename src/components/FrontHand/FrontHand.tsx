import React from 'react';
import './FrontHand.css';

export interface FrontHandProps {
  /** Exact Figma Layer Name: "front_hand" */
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
 * Figma Component: "front_hand"
 * Preserved Layer Name: front_hand
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const FrontHand: React.FC<FrontHandProps> = ({
  title = 'front_hand',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`FrontHand-container ${className}`} data-figma-layer="front_hand" data-variant={variant}>
      <div className="FrontHand-header">
        <span className="FrontHand-title">{title}</span>
        <span className="FrontHand-badge">{variant}</span>
      </div>
      <div className="FrontHand-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default FrontHand;
