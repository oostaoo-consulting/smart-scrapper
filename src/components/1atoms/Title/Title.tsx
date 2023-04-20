import React from 'react';

type TitleProps = {
  level: number;
  text: string;
};

export default function Title({ level, text }: TitleProps) {
  const TitleTag = `h${level}` as keyof JSX.IntrinsicElements;

  let style;
  switch (level) {
    case 1:
      style = 'text-3xl uppercase';
      break;
    case 2:
      style = 'text-xl';
      break;
    case 3:
      style = 'text-sm';
      break;

    default:
      break;
  }
  return <TitleTag className={style}>{text}</TitleTag>;
}
