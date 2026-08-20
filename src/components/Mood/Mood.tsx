import React from 'react';
import './Mood.css';

export interface MoodProps {
  /** Exact Figma Layer Name: "mood" */
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
 * Figma Component: "mood"
 * Preserved Layer Name: mood
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Mood: React.FC<MoodProps> = ({
  title = 'mood',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Mood-container ${className}`} data-figma-layer="mood" data-variant={variant}>
      <div className="Mood-header">
        <span className="Mood-title">{title}</span>
        <span className="Mood-badge">{variant}</span>
      </div>
      <div className="Mood-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Mood;
