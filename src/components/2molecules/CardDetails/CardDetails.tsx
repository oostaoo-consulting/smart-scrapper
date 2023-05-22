import React from 'react';
import Image from 'next/image';
import { MdFavorite, MdFavoriteBorder, MdClose } from 'react-icons/md';

import Title from '../../1atoms/Title/Title';
import Paragraph from '../../1atoms/Paragraph/Paragraph';
import Button from '../../1atoms/Button/Button';

interface CardDetailsprops {
  person: Person;
  isFavorite: boolean;
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function CardDetails({
  person,
  isFavorite,
  handleOpeningCard,
}: CardDetailsprops) {
  return (
    <>
      <Button
        className="fixed top-0 left-0 w-screen h-screen bg-black cursor-default opacity-80"
        onClick={handleOpeningCard}
        disabled={false}
      >
        l
      </Button>

      <dialog
        open
        className="absolute top-0 flex flex-col w-11/12 max-h-full gap-3 p-3 overflow-y-auto bg-white border border-slate-400"
        data-testid="card"
      >
        <section className="flex">
          <Image
            src="/img/imagePlaceholder.png"
            alt="Card's image"
            width={60}
            height={60}
            className="mr-4 rounded"
          />
          <div>
            <Title level={4}>{person.login}</Title>
            <Title level={3}>{person.name}</Title>
          </div>
        </section>

        <Paragraph text={`Localisation : ${person.location}`} />

        <Paragraph text={`e-Mail : ${person.email}`} />

        <Paragraph text={`gitHub : ${person.url}`} />
        <Paragraph text={`Site Personnel : ${person.websiteUrl}`} />

        <Title level={3}>Bio :</Title>
        <Paragraph text={person.bio} />

        <Title level={3}>Réseaux Sociaux :</Title>

        {person.socialAccounts.map((account: PersonSocialAccount) => (
          <a
            key={account.displayName + account.provider + account.url}
            className=""
            href={account.url}
          >
            {`${account.provider} : ${account.displayName}`}
          </a>
        ))}

        <Button className="absolute top-3 right-3" onClick={handleOpeningCard}>
          <MdClose size={36} aria-label="close button" />
        </Button>
        <Button onClick={() => {}} className="absolute top-12 right-3">
          {isFavorite ? (
            <MdFavorite size={34} />
          ) : (
            <MdFavoriteBorder size={34} />
          )}
        </Button>
      </dialog>
    </>
  );
}
