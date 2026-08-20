import React from 'react';
import './ChatBubble.css';

export interface ChatBubbleProps {
  /** Exact Figma Layer Name: "chat_bubble" */
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
 * Figma Component: "chat_bubble"
 * Preserved Layer Name: chat_bubble
 * Variable Aliasing: Bound token custom properties or hardcoded Figma styles.
 */
export const ChatBubble: React.FC<ChatBubbleProps> = ({
  title = 'chat_bubble',
  description = 'High-fidelity Figma component directly synchronized with base color palette & foundational tokens.',
  variant = 'default',
  className = '',
  children
}) => {
  return (
    <div className={`ChatBubble-container ${className}`} data-figma-layer="chat_bubble" data-variant={variant}>
      <div className="ChatBubble-header">
        <span className="ChatBubble-title">{title}</span>
        <span className="ChatBubble-badge">{variant}</span>
      </div>
      <div className="ChatBubble-content">
        {children || <p>{description}</p>}
      </div>
    </div>
  );
};

export default ChatBubble;
