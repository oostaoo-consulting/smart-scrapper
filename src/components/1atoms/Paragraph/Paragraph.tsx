import React from 'react';

interface ParagraphType {
  text: string;
}

export default function Paragraph({ text }: ParagraphType): JSX.Element {
  return <p data-testid="paragraphtest">{text}</p>;
}
