import React from 'react';
import Image from 'next/image';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { GrMailOption } from 'react-icons/Gr';
import Title from '../../1atoms/Title/Title';
import Paragraph from '../../1atoms/Paragraph/Paragraph';
import Button from '../../1atoms/Button/Button';

interface CardProps {
  isFavorite: boolean;
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void;
  profil: Person;
}

export default function Card({
  isFavorite,
  handleOpeningCard,
  profil,
}: CardProps) {
  return (
    <article className="relative flex flex-col" data-testid="card">
      <div key={profil.id}>
        <Button
          className="flex flex-col w-full gap-3 p-3 mb-1 text-left border border-slate-400 hover:border-white"
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
              {profil.login && <Title level={4}>{profil.login}</Title>}
              <div className="flex items-center justify-start gap-4">
                {profil.name && <Title level={3}>{profil.name}</Title>}
                {profil.email && (
                  <a
                    href={`mailto:${profil.email as string}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GrMailOption
                      size={18}
                      className="text-neutral-400 hover:cursor-pointer"
                    />
                  </a>
                )}
              </div>
              <div className="flex flex-col">
                {profil.websiteUrl && (
                  <a
                    href={profil.websiteUrl as string}
                    target="_blank"
                    className="text-red-600"
                    rel="noreferrer"
                  >
                    <span className="text-neutral-600">Site:</span>{' '}
                    {profil.websiteUrl}
                  </a>
                )}
                {profil.url && (
                  <a
                    href={profil.websiteUrl as string}
                    target="_blank"
                    className="text-red-600"
                    rel="noreferrer"
                  >
                    <span className="text-neutral-600">Github:</span>{' '}
                    {profil.url}
                  </a>
                )}
              </div>
            </div>
          </div>
          {!isFavorite && <Paragraph text={profil.bio} />}
        </Button>
        <Button
          onClick={() => {}}
          className="absolute top-3 right-3"
          disabled={false}
        >
          {isFavorite ? (
            <MdFavorite size={25} />
          ) : (
            <MdFavoriteBorder size={25} />
          )}
        </Button>
      </div>
    </article>
  );
}
