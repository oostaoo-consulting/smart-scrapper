import React from 'react';
import Image from 'next/image';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { GrMailOption } from 'react-icons/gr';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { BsMastodon } from 'react-icons/bs';
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
    <article className="relative flex flex-col" data-testid="card">
      <div key={profil?.id}>
        <Button
          className="flex flex-col w-full gap-3 p-3 mb-1 text-left border hover:bg-neutral-100 border-slate-400"
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
              <Title level={4}>{profil?.login}</Title>
              <div className="flex items-center justify-start gap-4">
                <Title level={3}>{profil?.name} test</Title>

                {profil?.email && (
                  <SocialIcon
                    key={`mailto:${profil?.name as string}`}
                    url={profil?.email}
                    className="text-neutral-400 hover:cursor-pointer"
                    icon={<GrMailOption size={18} color="#84c4fd" />}
                  />
                )}
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
                    <span className="text-neutral-600">Github:</span>{' '}
                    {profil?.url}
                  </a>
                )}

                {profil?.email && (
                  <a
                    href={profil?.email as string}
                    target="_blank"
                    className="text-red-600 hover:text-red-800"
                    rel="noreferrer"
                  >
                    <span className="text-neutral-600">Email:</span>{' '}
                    {profil?.email}
                  </a>
                )}
              </div>
            </div>
          </div>
          {!isFavorite && <Paragraph text={profil?.bio} />}
        </Button>

        <Button
          onClick={(): void => {}}
          className="absolute top-3 right-3"
          disabled={false}
        >
          {isFavorite ? (
            <MdFavorite size={25} />
          ) : (
            <MdFavoriteBorder size={25} />
          )}
        </Button>
        <div className="relative mr-6 top-[17px]">
          {profil?.socialAccounts.map((socialAccount: PersonSocialAccount) => {
            if (
              socialAccount.provider &&
              socialAccount.provider === 'TWITTER'
            ) {
              return (
                <SocialIcon
                  key={socialAccount.displayName}
                  url={socialAccount?.url}
                  className="absolute z-20 top-3 right-12 hover:border"
                  icon={<AiOutlineTwitter size={25} color="#84c4fd" />}
                />
              );
            }
            if (
              socialAccount.provider &&
              socialAccount.provider === 'LINKEDIN'
            ) {
              return (
                <SocialIcon
                  key={socialAccount.displayName}
                  url={socialAccount?.url}
                  className="absolute z-20 top-3 right-20 hover:border"
                  icon={<AiFillLinkedin size={25} color="#0080f1" />}
                />
              );
            }

            if (
              socialAccount.provider &&
              socialAccount.provider === 'MASTODON'
            ) {
              return (
                <SocialIcon
                  key={socialAccount.displayName}
                  url={socialAccount?.url}
                  className="absolute z-20 top-3 right-28 hover:border"
                  icon={<BsMastodon size={22} color="#7b4eb8" />}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </article>
  );
}
