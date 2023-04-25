import React from 'react';
import Image from 'next/image';
import Title from '../../1atoms/Title/Title';
import Paragraph from '../../1atoms/Paragraph/Paragraph';

export default function Card() {
  return (
    <article className="border-slate-400 border p-3 pb-10">
      <Title level={3}>Programmenveifavbpnjreafbvfrb</Title>
      <Title level={2}>Nom du poste</Title>
      <Image
        src="/img/imagePlaceholder.png"
        alt="Card's image"
        width={60}
        height={60}
        className="rounded my-4"
      />
      <Paragraph
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis, neque doloribus qui sint sunt, exercitationem voluptas laborum adipisci, aliquam culpa voluptate? Officiis ut error rerum maxime pariatur modi eum.
      Amet eveniet temporibus accusantium? Nam et eum sequi."
      />
    </article>
  );
}
