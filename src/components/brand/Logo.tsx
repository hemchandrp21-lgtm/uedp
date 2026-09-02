import React from 'react';
import './Logo.css';

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Logo variant layout */
  variant?: 'full' | 'icon' | 'stacked';
  /** Logo size scale */
  size?: 'sm' | 'md' | 'lg';
  /** Dark or Light theme context */
  theme?: 'dark' | 'light';
  /** Enables hover, active, and click microinteractions */
  interactive?: boolean;
  /** Optional custom tagline text shown beneath sasystem brand name */
  tagline?: string;
  /** Navigation link target URL (if clickable) */
  href?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  theme = 'light',
  interactive = true,
  tagline = 'SALES DESIGN',
  href,
  className = '',
  onClick,
  ...props
}) => {
  const containerClasses = [
    'sasystem-logo',
    `sasystem-logo--${size}`,
    `sasystem-logo--${variant}`,
    `sasystem-logo--theme-${theme}`,
    interactive ? 'sasystem-logo--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const LogoIcon = (
    <div className="sasystem-logo__icon-wrapper">
      <div className="sasystem-logo__aura" />
      <div className="sasystem-logo__ripple" />
      <svg
        className="sasystem-logo__icon"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sasystem-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="sasystem-sa-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <linearGradient id="sasystem-accent-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>

          <filter id="sasystem-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Hexagon Shield Badge */}
        <path
          className="sasystem-logo__icon-bg"
          d="M24 4L41.3205 14V34L24 44L6.67949 34V14L24 4Z"
          fill="url(#sasystem-bg-grad)"
          stroke="url(#sasystem-accent-grad)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Stylized Futuristic "S" + "A" Emblem Ribbon */}
        <path
          className="sasystem-logo__path-sa"
          d="M15 17C15 14.7909 17.5 13 21 13H27C30.5 13 33 14.7909 33 17C33 19.5 30 21 27 22L21 24C18 25 15 26.5 15 29C15 31.2091 17.5 33 21 33H27C30.5 33 33 31.2091 33 29"
          stroke="url(#sasystem-sa-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#sasystem-glow)"
        />

        {/* Core A-crossbar connector accent */}
        <path
          d="M19 28H29"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Tech Node Pulses */}
        <circle className="sasystem-logo__node-glow" cx="33" cy="17" r="3" fill="#06b6d4" />
        <circle className="sasystem-logo__node-glow" cx="15" cy="29" r="3" fill="#ec4899" />
      </svg>
    </div>
  );

  const LogoText = variant !== 'icon' && (
    <div className="sasystem-logo__text-group">
      <div className="sasystem-logo__brand-name">
        <span className="sasystem-logo__prefix">sa</span>
        <span className="sasystem-logo__suffix">system</span>
      </div>
      {tagline && <span className="sasystem-logo__tagline">{tagline}</span>}
      <div className="sasystem-logo__underline" />
    </div>
  );

  const Content = (
    <>
      {LogoIcon}
      {LogoText}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={containerClasses}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {Content}
      </a>
    );
  }

  return (
    <div
      className={containerClasses}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      {...props}
    >
      {Content}
    </div>
  );
};

export default Logo;
