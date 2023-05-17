import React from 'react';

interface ButtonProps {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: React.ReactNode;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export default function Button({
  type = 'button',
  children,
  className,
  disabled,
  onClick,
}: ButtonProps) {
  const buttonType = type || 'button';
  return onClick ? (
    <button
      type={buttonType}
      disabled={disabled}
      className={className}
      onClick={onClick}
      data-testid="buttonComponent"
    >
      {children}
    </button>
  ) : (
    <button
      type={buttonType}
      disabled={disabled}
      className={className}
      data-testid="buttonComponent"
    >
      {children}
    </button>
  );
}
