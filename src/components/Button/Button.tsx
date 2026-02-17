import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isDisabled?: boolean;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  label?: string;
}

const CircleIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.67" />
  </svg>
);

export function Button({
  variant = 'primary',
  size = 'md',
  isDisabled = false,
  showLeadingIcon = false,
  showTrailingIcon = false,
  label = 'Button CTA',
  className,
  ...rest
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    isDisabled ? 'btn--disabled' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={isDisabled} {...rest}>
      {showLeadingIcon && (
        <span className="btn__icon">
          <CircleIcon />
        </span>
      )}
      <span>{label}</span>
      {showTrailingIcon && (
        <span className="btn__icon">
          <CircleIcon />
        </span>
      )}
    </button>
  );
}

export default Button;
