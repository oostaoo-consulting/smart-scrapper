import React from 'react';
import Image from 'next/image';
import Title from '../../1atoms/Title';
import Paragraph from '../../1atoms/Paragraph/Paragraph';

export default function Card() {
  return (
    <article className="border border-slate-400 border-2 p-3 pb-10">
      <Title level={3} text="Programme" />
      <Title level={2} text="Nom du poste" />
      <Image
        src="/img/logo-oostaoo.jpeg"
        alt="Card's image"
        width={60}
        height={60}
      />
      <Paragraph
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis, neque doloribus qui sint sunt, exercitationem voluptas laborum adipisci, aliquam culpa voluptate? Officiis ut error rerum maxime pariatur modi eum.
      Amet eveniet temporibus accusantium? Nam et eum sequi."
      />
    </article>
  );
}
