import React, { ReactNode } from 'react';

type TitleProps = {
  level: number;
  children: ReactNode;
};

export default function Title({ level, children }: TitleProps) {
  const TitleTag = `h${level}` as keyof JSX.IntrinsicElements;

  let style;
  switch (level) {
    case 1:
      style = 'sm:text-3xl text-lg text-right uppercase';
      break;
    case 2:
      style = 'text-2xl';
      break;
    case 3:
      style = 'text-xl';
      break;
    case 4:
      style = 'text-sm';
      break;
    default:
      break;
  }
  return <TitleTag className={style}>{children}</TitleTag>;
}
