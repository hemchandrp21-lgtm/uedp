import React from 'react';
import './IndeterminateCheckBox.css';

export interface IndeterminateCheckBoxProps {
  /** Exact Figma Layer Name: "indeterminate_check_box" */
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
 * Figma Component: "indeterminate_check_box"
 * Preserved Layer Name: indeterminate_check_box
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const IndeterminateCheckBox: React.FC<IndeterminateCheckBoxProps> = ({
  title = 'indeterminate_check_box',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`IndeterminateCheckBox-container ${className}`} data-figma-layer="indeterminate_check_box" data-variant={variant}>
      <div className="IndeterminateCheckBox-header">
        <span className="IndeterminateCheckBox-title">{title}</span>
        <span className="IndeterminateCheckBox-badge">{variant}</span>
      </div>
      <div className="IndeterminateCheckBox-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default IndeterminateCheckBox;
