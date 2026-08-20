import React from 'react';
import './Sticker.css';

export interface StickerProps {
  /** Exact Figma Layer Name: "sticker" */
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
 * Figma Component: "sticker"
 * Preserved Layer Name: sticker
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const Sticker: React.FC<StickerProps> = ({
  title = 'sticker',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`Sticker-container ${className}`} data-figma-layer="sticker" data-variant={variant}>
      <div className="Sticker-header">
        <span className="Sticker-title">{title}</span>
        <span className="Sticker-badge">{variant}</span>
      </div>
      <div className="Sticker-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default Sticker;
