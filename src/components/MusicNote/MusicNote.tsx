import React from 'react';
import './MusicNote.css';

export interface MusicNoteProps {
  /** Exact Figma Layer Name: "music_note" */
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
 * Figma Component: "music_note"
 * Preserved Layer Name: music_note
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const MusicNote: React.FC<MusicNoteProps> = ({
  title = 'music_note',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`MusicNote-container ${className}`} data-figma-layer="music_note" data-variant={variant}>
      <div className="MusicNote-header">
        <span className="MusicNote-title">{title}</span>
        <span className="MusicNote-badge">{variant}</span>
      </div>
      <div className="MusicNote-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default MusicNote;
