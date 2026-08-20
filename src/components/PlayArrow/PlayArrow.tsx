import React from 'react';
import './PlayArrow.css';

export interface PlayArrowProps {
  /** Exact Figma Layer Name: "play_arrow" */
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
 * Figma Component: "play_arrow"
 * Preserved Layer Name: play_arrow
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const PlayArrow: React.FC<PlayArrowProps> = ({
  title = 'play_arrow',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`PlayArrow-container ${className}`} data-figma-layer="play_arrow" data-variant={variant}>
      <div className="PlayArrow-header">
        <span className="PlayArrow-title">{title}</span>
        <span className="PlayArrow-badge">{variant}</span>
      </div>
      <div className="PlayArrow-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default PlayArrow;
