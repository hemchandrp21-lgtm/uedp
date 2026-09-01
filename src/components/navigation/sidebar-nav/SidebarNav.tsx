import React, { useState } from 'react';
import {
  LayoutGrid,
  TrendingUp,
  DollarSign,
  Package,
  Users,
  UsersRound,
  Settings,
} from 'lucide-react';
import { NavItem } from '../nav-item/NavItem';
import './SidebarNav.css';

export interface SidebarNavItemData {
  key: string;
  label: string;
  icon: React.ReactNode;
}

export const defaultSidebarItems: SidebarNavItemData[] = [
  { key: 'dashboard', label: 'Dashboard', icon: <LayoutGrid size={20} /> },
  { key: 'sales-pipeline', label: 'Sales Pipeline', icon: <TrendingUp size={20} /> },
  { key: 'revenue', label: 'Revenue', icon: <DollarSign size={20} /> },
  { key: 'inventory', label: 'Inventory', icon: <Package size={20} /> },
  { key: 'costumers', label: 'Costumers', icon: <Users size={20} /> },
  { key: 'teams', label: 'Teams', icon: <UsersRound size={20} /> },
  { key: 'settings', label: 'Settings', icon: <Settings size={20} /> },
];

export interface SidebarNavProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Currently active item key matching Figma Frame 158 (node-id 173-2792) */
  activeItem?: string;
  /** Navigation item selection callback */
  onSelect?: (key: string) => void;
  /** Custom list of sidebar navigation items */
  items?: SidebarNavItemData[];
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  activeItem = 'dashboard',
  onSelect,
  items = defaultSidebarItems,
  className = '',
  ...props
}) => {
  const [internalActive, setInternalActive] = useState<string>(activeItem);
  const currentActive = activeItem !== undefined ? activeItem : internalActive;

  const handleItemClick = (key: string) => {
    if (activeItem === undefined) {
      setInternalActive(key);
    }
    onSelect?.(key);
  };

  return (
    <div className={`uedp-sidebar-nav ${className}`} {...props}>
      <div className="uedp-sidebar-nav__menu">
        {items.map((item) => {
          const isSelected = currentActive.toLowerCase() === item.key.toLowerCase();
          return (
            <NavItem
              key={item.key}
              variant={isSelected ? 'active' : 'default'}
              label={item.label}
              icon={item.icon}
              onClick={() => handleItemClick(item.key)}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Frame158 = SidebarNav;
export default SidebarNav;
