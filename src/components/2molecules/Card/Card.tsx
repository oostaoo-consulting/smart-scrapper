import React from 'react';
import Image from 'next/image';
import { TfiCheckBox, TfiLayoutWidthFull } from 'react-icons/tfi';

import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { BsFillInfoSquareFill, BsMastodon } from 'react-icons/bs';
import { MdOutlineContentCopy } from 'react-icons/md';
import Title from '../../1atoms/Title/Title';
import Paragraph from '../../1atoms/Paragraph/Paragraph';
import Button from '../../1atoms/Button/Button';
import SocialIcon from '../../1atoms/SocialIcon/SocialIcon';

interface CardProps {
  isFavorite: boolean;
  handleOpeningCard: (event: React.MouseEvent<HTMLElement>) => void;
  profil: Person;
}

export default function Card({
  isFavorite,
  handleOpeningCard,
  profil,
}: CardProps): JSX.Element {
  return (
    <article
      key={profil?.id}
      className="relative flex flex-col w-full gap-3 p-3 mb-1 text-left border hover:bg-neutral-100 border-slate-400"
      data-testid="card"
    >
      <div className="flex items-start">
        <Image
          src="/img/imagePlaceholder.png"
          alt="Card's image"
          width={60}
          height={60}
          className="mr-4 rounded h-"
        />
        <div>
          <Title level={4}>{profil?.login}</Title>
          <div className="flex items-center justify-start gap-4">
            <Title level={3}>{profil?.name}</Title>
            <Button className="" onClick={handleOpeningCard} disabled={false}>
              <BsFillInfoSquareFill size={25} />
            </Button>
          </div>

          <div className="flex flex-col">
            {profil?.websiteUrl && (
              <a
                href={profil?.websiteUrl as string}
                target="_blank"
                className="text-red-600 hover:text-red-800"
                rel="noreferrer"
              >
                <span className="text-neutral-600">Site:</span>{' '}
                {profil?.websiteUrl}
              </a>
            )}

            {profil?.url && (
              <a
                href={profil?.url as string}
                target="_blank"
                className="text-red-600 hover:text-red-800"
                rel="noreferrer"
              >
                <span className="text-neutral-600">Github:</span> {profil?.url}
              </a>
            )}

            <div className="flex items-center justify-start gap-4">
              {profil?.email && (
                <a
                  href={`maito:${profil?.email}` as string}
                  target="_blank"
                  className="text-red-600 hover:text-red-800"
                  rel="noreferrer"
                >
                  <span className="text-neutral-600">Email:</span>{' '}
                  {profil?.email}
                </a>
              )}

              {profil?.email && (
                <Button
                  className=""
                  onClick={(): void => {
                    navigator.clipboard.writeText(profil?.email).then(
                      () => {
                        'Copié';
                      },
                      () => {
                        'Erreur copie';
                      },
                    );
                  }}
                  disabled={false}
                >
                  <MdOutlineContentCopy
                    className="hover:text-neutral-900"
                    size={20}
                  />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      {!isFavorite && <Paragraph text={profil?.bio} />}

      <Button
        onClick={(): void => {}}
        className="absolute top-3 right-3"
        disabled={false}
      >
        {isFavorite ? (
          <TfiCheckBox size={25} />
        ) : (
          <TfiLayoutWidthFull size={21} />
        )}
      </Button>
      <div className="absolute flex gap-2 right-12 top-3">
        {profil?.socialAccounts.map((socialAccount: PersonSocialAccount) => {
          if (socialAccount.provider && socialAccount.provider === 'TWITTER') {
            return (
              <SocialIcon
                key={socialAccount.displayName}
                url={socialAccount?.url}
                className=""
                icon={<AiOutlineTwitter size={25} color="#84c4fd" />}
              />
            );
          }
          if (socialAccount.provider && socialAccount.provider === 'LINKEDIN') {
            return (
              <SocialIcon
                key={socialAccount.displayName}
                url={socialAccount?.url}
                className=""
                icon={<AiFillLinkedin size={25} color="#0080f1" />}
              />
            );
          }

          if (socialAccount.provider && socialAccount.provider === 'MASTODON') {
            return (
              <SocialIcon
                key={socialAccount.displayName}
                url={socialAccount?.url}
                className=""
                icon={<BsMastodon size={22} color="#7b4eb8" />}
              />
            );
          }
          return null;
        })}
      </div>
    </article>
  );
}
