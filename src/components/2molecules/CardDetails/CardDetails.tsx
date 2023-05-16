import React from 'react';
import Image from 'next/image';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import Title from '../../1atoms/Title/Title';
import Paragraph from '../../1atoms/Paragraph/Paragraph';
import Button from '../../1atoms/Button/Button';

interface CardDetailsprops {
  person: Person,
  isFavorite: boolean
}

export default function CardDetails({ person, isFavorite }: CardDetailsprops) {
  return (
    <>
      <div className="w-screen h-screen fixed left-0 top-0 bg-black opacity-80" />
      <dialog open className="bg-white w-11/12 max-h-full overflow-y-auto border-slate-400 border p-3 flex flex-col gap-3 absolute top-0" data-testid="card">
        <section className="flex">
          <Image
            src="/img/imagePlaceholder.png"
            alt="Card's image"
            width={60}
            height={60}
            className="rounded mr-4"
          />
          <div>
            <Title level={4}>{person.login}</Title>
            <Title level={3}>{person.name}</Title>
          </div>
        </section>

        <Paragraph
          text={`Localisation : ${person.location}`}
        />

        <Paragraph
          text={`e-Mail : ${person.email}`}
        />

        <Paragraph
          text={`gitHub : ${person.url}`}
        />
        <Paragraph
          text={`Site Personnel : ${person.websiteUrl}`}
        />

        <Title level={3}>Bio :</Title>
        <Paragraph
          text={person.bio}
        />

        <Title level={3}>Réseaux Sociaux :</Title>

        {
          person.socialAccounts.map((account: PersonSocialAccount) => (

            <a
              key={account.displayName + account.provider + account.url}
              className=""
              href={account.url}
            >{`${account.provider} : ${account.displayName}`}
            </a>
          ))
        }

        <Button className="absolute top-3 right-3">{isFavorite ? <MdFavorite size={25} /> : <MdFavoriteBorder size={25} />}</Button>

      </dialog>
    </>
  );
}
