import React from 'react';
import Image from 'next/image';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import Title from '../../1atoms/Title/Title';
import Paragraph from '../../1atoms/Paragraph/Paragraph';
import Button from '../../1atoms/Button/Button';

interface CardProps {
  isFavorite: boolean;
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void;
  profiles: any;
}

export default function Card({
  isFavorite,
  handleOpeningCard,
  profiles,
}: CardProps) {
  console.log('coucou: ', profiles);

  return (
    <article className="relative flex flex-col" data-testid="card">
      <Button
        className="flex flex-col gap-3 p-3 text-left border border-slate-400 hover:border-white"
        onClick={handleOpeningCard}
        disabled={false}
      >
        <div className="flex">
          <Image
            src="/img/imagePlaceholder.png"
            alt="Card's image"
            width={60}
            height={60}
            className="mr-4 rounded"
          />
          <div>
            <Title level={4}>FUCK</Title>
            <Title level={3}>PIPO</Title>
            {/* <Title level={4}>{profiles?.login}</Title>
            <Title level={3}>{profiles?.name}</Title> */}
          </div>
        </div>
        {!isFavorite && (
          <Paragraph
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis, neque doloribus qui sint sunt, exercitationem voluptas laborum adipisci, aliquam culpa voluptate? Officiis ut error rerum maxime pariatur modi eum.
          Amet eveniet temporibus accusantium? Nam et eum sequi."
          />
        )}
      </Button>
      <Button
        onClick={() => {}}
        className="absolute top-3 right-3"
        disabled={false}
      >
        {isFavorite ? <MdFavorite size={25} /> : <MdFavoriteBorder size={25} />}
      </Button>
    </article>
  );
}
