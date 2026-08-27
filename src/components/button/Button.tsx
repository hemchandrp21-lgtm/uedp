import React from 'react';
import { Upload, ChevronDown } from 'lucide-react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual state matching Figma node-id 111-1422 */
  variant?: 'default' | 'active' | 'active-glow' | 'disabled';
  /** Button text label */
  label?: string;
  /** Custom left icon element */
  leftIcon?: React.ReactNode;
  /** Custom right icon element */
  rightIcon?: React.ReactNode;
  /** Show left icon */
  showLeftIcon?: boolean;
  /** Show right icon */
  showRightIcon?: boolean;
  /** Disable button interactions */
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  label = 'All Regions',
  leftIcon = <Upload size={16} />,
  rightIcon = <ChevronDown size={16} />,
  showLeftIcon = true,
  showRightIcon = true,
  disabled = false,
  className = '',
  ...props
}) => {
  const isDisabled = disabled || variant === 'disabled';
  const computedVariant = isDisabled ? 'disabled' : variant;

  return (
    <button
      className={`uedp-button uedp-button--${computedVariant} ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {showLeftIcon && <span className="uedp-button__icon uedp-button__icon--left">{leftIcon}</span>}
      <span className="uedp-button__label">{label}</span>
      {showRightIcon && <span className="uedp-button__icon uedp-button__icon--right">{rightIcon}</span>}
    </button>
  );
};

export default Button;
