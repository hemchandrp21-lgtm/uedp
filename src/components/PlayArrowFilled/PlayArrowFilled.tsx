import React from 'react';
import './PlayArrowFilled.css';

export interface PlayArrowFilledProps {
  /** Exact Figma Layer Name: "play_arrow_filled" */
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
 * Figma Component: "play_arrow_filled"
 * Preserved Layer Name: play_arrow_filled
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const PlayArrowFilled: React.FC<PlayArrowFilledProps> = ({
  title = 'play_arrow_filled',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`PlayArrowFilled-container ${className}`} data-figma-layer="play_arrow_filled" data-variant={variant}>
      <div className="PlayArrowFilled-header">
        <span className="PlayArrowFilled-title">{title}</span>
        <span className="PlayArrowFilled-badge">{variant}</span>
      </div>
      <div className="PlayArrowFilled-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default PlayArrowFilled;
