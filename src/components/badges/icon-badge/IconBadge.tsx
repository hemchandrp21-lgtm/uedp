import React from 'react';
import { Users } from 'lucide-react';
import './IconBadge.css';

export interface IconBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color variant matching Figma material icon badge (node-id 60-99) */
  variant?: 'danger' | 'success' | 'warning' | 'muted';
  /** Icon element to render inside the badge */
  icon?: React.ReactNode;
  /** Size variant of the icon badge */
  size?: 'sm' | 'md' | 'lg';
}

export const IconBadge: React.FC<IconBadgeProps> = ({
  variant = 'success',
  icon = <Users size={22} />,
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`uedp-icon-badge uedp-icon-badge--${variant} uedp-icon-badge--${size} ${className}`}
      {...props}
    >
      <span className="uedp-icon-badge__icon">{icon}</span>
    </div>
  );
};

export default IconBadge;
