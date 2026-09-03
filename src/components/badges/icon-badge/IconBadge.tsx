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
  /** Boolean state for ON/OFF active toggle */
  on?: boolean;
  /** Alias boolean state for ON/OFF active toggle */
  active?: boolean;
}

export const IconBadge: React.FC<IconBadgeProps> = ({
  variant = 'success',
  icon = <Users size={22} />,
  size = 'md',
  on,
  active,
  className = '',
  ...props
}) => {
  const isOn = on !== undefined ? on : active !== undefined ? active : true;
  const stateClass = isOn ? 'uedp-icon-badge--on' : 'uedp-icon-badge--off';

  return (
    <div
      className={`uedp-icon-badge uedp-icon-badge--${variant} uedp-icon-badge--${size} ${stateClass} ${className}`}
      {...props}
    >
      <span className="uedp-icon-badge__icon">{icon}</span>
    </div>
  );
};

export default IconBadge;
