import React from 'react';
import { Bell, Upload } from 'lucide-react';
import { Status } from '../../badges/status/Status';
import { Button } from '../../controls/button/Button';
import { Logo } from '../../brand/Logo';
import './TopNavBar.css';

export interface TopNavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Page header title */
  title?: string;
  /** Status pill text */
  statusLabel?: string;
  /** Primary button action text */
  primaryActionText?: string;
  /** Secondary button action text */
  secondaryActionText?: string;
  /** Unread notification dot indicator toggle */
  hasUnreadNotifications?: boolean;
  /** Toggles brand logo icon in top bar */
  showLogo?: boolean;
  /** Notification bell click callback */
  onNotificationClick?: (e: React.MouseEvent) => void;
  /** Primary button click callback */
  onPrimaryActionClick?: (e: React.MouseEvent) => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  title = 'Sales Dashboard',
  statusLabel = 'March 2026',
  primaryActionText = '+ All Regions',
  secondaryActionText = 'All Categories',
  hasUnreadNotifications = true,
  showLogo = false,
  onNotificationClick,
  onPrimaryActionClick,
  className = '',
  ...props
}) => {
  return (
    <header className={`uedp-top-nav-bar ${className}`} {...props}>
      <div className="uedp-top-nav-bar__left">
        {showLogo && <Logo variant="icon" size="sm" theme="dark" />}
        <h1 className="uedp-top-nav-bar__title">{title}</h1>
        <Status variant="success" label={statusLabel} />
        <div className="uedp-top-nav-bar__filters">
          <Button variant="default" label="All Regions" showRightIcon={false} showLeftIcon={false} />
          <Button variant="default" label="All Categories" showRightIcon={false} showLeftIcon={false} />
        </div>
      </div>

      <div className="uedp-top-nav-bar__right">
        <Button
          variant="default"
          label={secondaryActionText}
          leftIcon={<Upload size={15} />}
          showRightIcon={false}
        />
        <Button
          variant="active"
          label={primaryActionText}
          showLeftIcon={false}
          showRightIcon={false}
          onClick={onPrimaryActionClick}
        />
        <button
          type="button"
          className="uedp-top-nav-bar__bell-btn"
          onClick={onNotificationClick}
          aria-label="Notifications"
        >
          <Bell size={20} className="uedp-top-nav-bar__bell-icon" />
          {hasUnreadNotifications && <span className="uedp-top-nav-bar__unread-badge" />}
        </button>
      </div>
    </header>
  );
};

export const TopNav = TopNavBar;
export default TopNavBar;
