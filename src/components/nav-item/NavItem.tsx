import React from 'react';
import { LayoutGrid } from 'lucide-react';
import './NavItem.css';

export interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual state matching Figma Frame 149 (node-id 111-1527) */
  variant?: 'active' | 'default' | 'hover';
  /** Active boolean shortcut */
  active?: boolean;
  /** Label text for the navigation item */
  label?: string;
  /** Custom icon component */
  icon?: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({
  variant = 'default',
  active = false,
  label = 'Dashboard',
  icon = <LayoutGrid size={20} />,
  className = '',
  ...props
}) => {
  const isSelected = active || variant === 'active';
  const computedVariant = isSelected ? 'active' : variant;

  return (
    <div
      className={`uedp-nav-item uedp-nav-item--${computedVariant} ${className}`}
      {...props}
    >
      {computedVariant === 'active' && <span className="uedp-nav-item__indicator" />}
      <div className="uedp-nav-item__content">
        {icon && <span className="uedp-nav-item__icon">{icon}</span>}
        <span className="uedp-nav-item__label">{label}</span>
      </div>
    </div>
  );
};

export default NavItem;
