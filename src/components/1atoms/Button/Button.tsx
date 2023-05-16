import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Button({
  children,
  className,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      data-testid="buttonComponent"
    >
      {children}
    </button>
  );
}
