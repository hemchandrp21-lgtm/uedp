import React from 'react';
import * as LucideIcons from 'lucide-react';
import './Icon.css';

export type IconName =
  | 'menu'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'arrow-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'check'
  | 'close'
  | 'plus'
  | 'minus'
  | 'search'
  | 'star'
  | 'trash'
  | 'edit'
  | 'settings'
  | 'folder'
  | 'file'
  | 'mail'
  | 'bookmark'
  | 'sun'
  | 'moon'
  | 'calendar'
  | 'clock'
  | 'bell'
  | 'user'
  | 'users'
  | 'volume'
  | 'play'
  | 'pause'
  | 'share'
  | 'filter'
  | 'link'
  | string;

export interface IconProps extends React.SVGAttributes<SVGElement> {
  /** Icon name matching Figma Icon component set (node-id 60-1101) */
  name?: IconName;
  /** Size in pixels */
  size?: number | string;
  /** Color (hex, rgb, or CSS color string) */
  color?: string;
  /** Custom stroke width */
  strokeWidth?: number;
  /** Unread / active dot indicator toggle */
  hasDot?: boolean;
  /** Dot indicator color */
  dotColor?: string;
}

// Icon mapping dictionary
const iconMap: Record<string, React.ElementType> = {
  menu: LucideIcons.Menu,
  'arrow-left': LucideIcons.ArrowLeft,
  'arrow-right': LucideIcons.ArrowRight,
  'arrow-up': LucideIcons.ArrowUp,
  'arrow-down': LucideIcons.ArrowDown,
  'chevron-left': LucideIcons.ChevronLeft,
  'chevron-right': LucideIcons.ChevronRight,
  'chevron-up': LucideIcons.ChevronUp,
  'chevron-down': LucideIcons.ChevronDown,
  check: LucideIcons.Check,
  close: LucideIcons.X,
  plus: LucideIcons.Plus,
  minus: LucideIcons.Minus,
  search: LucideIcons.Search,
  star: LucideIcons.Star,
  trash: LucideIcons.Trash2,
  edit: LucideIcons.Edit2,
  settings: LucideIcons.Settings,
  folder: LucideIcons.Folder,
  file: LucideIcons.FileText,
  mail: LucideIcons.Mail,
  bookmark: LucideIcons.Bookmark,
  sun: LucideIcons.Sun,
  moon: LucideIcons.Moon,
  calendar: LucideIcons.Calendar,
  clock: LucideIcons.Clock,
  bell: LucideIcons.Bell,
  user: LucideIcons.User,
  users: LucideIcons.Users,
  volume: LucideIcons.Volume2,
  play: LucideIcons.Play,
  pause: LucideIcons.Pause,
  share: LucideIcons.Share2,
  filter: LucideIcons.Filter,
  link: LucideIcons.Link,
};

export const Icon: React.FC<IconProps> = ({
  name = 'bell',
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  hasDot = false,
  dotColor = '#ef4444',
  className = '',
  ...props
}) => {
  const IconComponent = iconMap[name.toLowerCase()] || LucideIcons.HelpCircle;

  return (
    <div className={`uedp-icon-wrapper ${className}`}>
      <IconComponent
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        className="uedp-icon"
        {...props}
      />
      {hasDot && (
        <span
          className="uedp-icon__dot"
          style={{ backgroundColor: dotColor }}
        />
      )}
    </div>
  );
};

export default Icon;
