import React from 'react';
import Image from 'next/image';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import Title from '../../1atoms/Title/Title';
import Paragraph from '../../1atoms/Paragraph/Paragraph';
import Button from '../../1atoms/Button/Button';

interface CardProps {
  isFavorite: boolean;
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Card({
  isFavorite,
  handleOpeningCard,
}: CardProps): JSX.Element {
  return (
    <article className="relative flex flex-col" data-testid="card">
      <Button
        className="border-slate-400 border p-3 flex flex-col gap-3 text-left hover:border-white"
        onClick={handleOpeningCard}
      >
        <div className="flex">
          <Image
            src="/img/imagePlaceholder.png"
            alt="Card's image"
            width={60}
            height={60}
            className="rounded mr-4"
          />
          <div>
            <Title level={4}>Programme</Title>
            <Title level={3}>Nom du post</Title>
          </div>
        </div>
        {!isFavorite && (
          <Paragraph
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis, neque doloribus qui sint sunt, exercitationem voluptas laborum adipisci, aliquam culpa voluptate? Officiis ut error rerum maxime pariatur modi eum.
          Amet eveniet temporibus accusantium? Nam et eum sequi."
          />
        )}
      </Button>
      <Button onClick={(): void => {}} className="absolute top-3 right-3">
        {isFavorite ? <MdFavorite size={25} /> : <MdFavoriteBorder size={25} />}
      </Button>
    </article>
  );
}
