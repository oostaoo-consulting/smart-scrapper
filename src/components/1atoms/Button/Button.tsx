import React from 'react';

interface ButtonProps {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: React.ReactNode;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  type = 'button',
  children,
  className,
  onClick,
}: ButtonProps) {
  const buttonType = type || 'button';
  return onClick ? (
    <button
      type={buttonType}
      className={className}
      onClick={onClick}
      data-testid="buttonComponent"
    >
      {children}
    </button>
  ) : (
    <button
      type={buttonType}
      className={className}
      data-testid="buttonComponent"
    >
      {children}
    </button>
  );
}
