import React from 'react';

type TitleProps = {
  level: number;
  text: string;
};

export default function Title({ level, text }: TitleProps) {
  const TitleTag = `h${level}` as keyof JSX.IntrinsicElements;
  return <TitleTag>{text}</TitleTag>;
}

// J'aime les croissants
