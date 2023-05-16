import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  disabled: boolean;
}

export default function Button({
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type="button"
      className={className}
      onClick={onClick}
      data-testid="buttonComponent"
    >
      {children}
    </button>
  );
}
